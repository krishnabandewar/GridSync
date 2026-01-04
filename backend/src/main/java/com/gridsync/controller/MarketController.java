package com.gridsync.controller;

import com.gridsync.model.MarketUpdate;
import com.gridsync.service.MarketService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/market")
@CrossOrigin(origins = "*") // Allow frontend
public class MarketController {

    private final MarketService marketService;

    public MarketController(MarketService marketService) {
        this.marketService = marketService;
    }

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<MarketUpdate> stream() {
        return marketService.getMarketStream();
    }

    @PostMapping("/event/{type}")
    public void triggerEvent(@PathVariable String type) {
        marketService.setEvent(type.toUpperCase());
    }
}
