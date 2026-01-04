export type NodeType = 'PRODUCER' | 'CONSUMER' | 'PROSUMER';

export interface EnergyNode {
  id: string;
  name: string;
  type: NodeType;
  currentLoad: number;
  batteryLevel: number;
  bankBalance: number;
}

export interface MarketUpdate {
  timestamp: number;
  marketPrice: number;
  nodes: EnergyNode[];
  recentTrades: string[];
}
