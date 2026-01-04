package com.gridsync.service;

import com.gridsync.model.*;
import javax.annotation.PostConstruct;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class MarketService {

    private final List<EnergyNode> nodes = new CopyOnWriteArrayList<>();
    private final Sinks.Many<MarketUpdate> sink = Sinks.many().multicast().onBackpressureBuffer();
    private final Random random = new Random();
    private double currentPrice = 0.15;
    private String activeEvent = "NORMAL"; // NORMAL, HEATWAVE, STORM

    public MarketService() {
    }

    public void setEvent(String eventType) {
        this.activeEvent = eventType;
    }

    @PostConstruct
    public void init() {
        // Init mock nodes
        nodes.add(new EnergyNode("1", "Solar House A", NodeType.PRODUCER));
        nodes.add(new EnergyNode("2", "EV Garage B", NodeType.CONSUMER));
        nodes.add(new EnergyNode("3", "Modern Villa C", NodeType.PROSUMER));
        nodes.add(new EnergyNode("4", "Cottage D", NodeType.CONSUMER));
        nodes.add(new EnergyNode("5", "Wind Farm E", NodeType.PRODUCER));
    }

    public Flux<MarketUpdate> getMarketStream() {
        return sink.asFlux();
    }

    @Scheduled(fixedRate = 1000)
    public void simulateMarket() {
        List<String> trades = new ArrayList<>();

        // 1. Update Loads (Simulation)
        for (EnergyNode node : nodes) {

            // Apply Event Modifiers
            double productionBias = 0;
            double consumptionBias = 0;

            if ("STORM".equals(activeEvent)) {
                productionBias = 5.0; // Reduces production (making it less negative or positive)
            } else if ("HEATWAVE".equals(activeEvent)) {
                consumptionBias = 10.0; // Increases load significantly
            }

            double change = (random.nextDouble() - 0.5) * 5;

            if (node.getType() == NodeType.PRODUCER) {
                // Producers tend to produce (negative load)
                // Bias towards negative
                // Producers tend to produce (negative load)
                // Bias towards negative
                double baseProduction = -5.0 + (random.nextDouble() * 2) + productionBias;
                // Solar can't produce positive load normally (unless consuming), but for simple
                // sim:
                if (baseProduction > 0)
                    baseProduction = 0;
                node.setCurrentLoad(baseProduction);
            } else if (node.getType() == NodeType.CONSUMER) {
                // Consumers tend to consume (positive load)
                // Consumers tend to consume (positive load)
                double baseConsumption = 5.0 + (random.nextDouble() * 2) + consumptionBias;
                node.setCurrentLoad(baseConsumption);
            } else {
                node.setCurrentLoad(node.getCurrentLoad() + change);
            }

            // Randomly update balance sim
            node.setBankBalance(node.getBankBalance() - (node.getCurrentLoad() * currentPrice));
        }

        // 2. Simple Pricing Logic (Supply vs Demand)
        double totalLoad = nodes.stream().mapToDouble(EnergyNode::getCurrentLoad).sum();

        // If totalLoad > 0, we are net consuming, price up.
        // If totalLoad < 0, we are net producing (excess), price down.
        if (totalLoad > 10)
            currentPrice += 0.01;
        else if (totalLoad < -10)
            currentPrice -= 0.01;

        // Clamp price
        currentPrice = Math.max(0.05, Math.min(0.50, currentPrice));

        // 3. Emit Update
        MarketUpdate update = new MarketUpdate(
                Instant.now().toEpochMilli(),
                currentPrice,
                new ArrayList<>(nodes), // copy
                trades);

        sink.tryEmitNext(update);
    }
}
