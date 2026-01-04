package com.gridsync.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarketUpdate {
    private long timestamp;
    private double marketPrice;
    private List<EnergyNode> nodes;
    private List<String> recentTrades;
}
