package com.gridsync.model;

public class EnergyNode {
    private String id;
    private String name;
    private NodeType type;
    private double currentLoad; // kW. >0 consuming, <0 producing
    private double batteryLevel; // % (0-100)
    private double bankBalance; // $

    public EnergyNode(String id, String name, NodeType type) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.currentLoad = 0.0;
        this.batteryLevel = 50.0;
        this.bankBalance = 0.0;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public NodeType getType() {
        return type;
    }

    public double getCurrentLoad() {
        return currentLoad;
    }

    public void setCurrentLoad(double currentLoad) {
        this.currentLoad = currentLoad;
    }

    public double getBatteryLevel() {
        return batteryLevel;
    }

    public void setBatteryLevel(double batteryLevel) {
        this.batteryLevel = batteryLevel;
    }

    public double getBankBalance() {
        return bankBalance;
    }

    public void setBankBalance(double bankBalance) {
        this.bankBalance = bankBalance;
    }
}
