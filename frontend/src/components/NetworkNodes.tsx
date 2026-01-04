import React from 'react';
import { EnergyNode } from '@/types';

interface Props {
    nodes: EnergyNode[];
}

export const NetworkNodes: React.FC<Props> = ({ nodes }) => {
    return (
        <div className="card scrollable">
            <h3 style={{ marginBottom: 20 }}>Network Nodes</h3>
            {nodes.map(node => (
                <div key={node.id} className="node-item">
                    <div className={`node-icon ${node.type === 'PRODUCER' ? 'producer' : 'consumer'}`}>
                        {node.type === 'PRODUCER' ? '☀' : (node.type === 'PROSUMER' ? '⇆' : '⚡')}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{node.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#666', marginTop: 2 }}>{node.type}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div className={node.currentLoad > 0 ? "value-positive" : "value-negative"} style={{ fontWeight: '600' }}>
                            {node.currentLoad > 0 ? '-' : '+'}{Math.abs(node.currentLoad).toFixed(2)} kW
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>${node.bankBalance.toFixed(2)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
