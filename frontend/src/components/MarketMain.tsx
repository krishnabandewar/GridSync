import React from 'react';
import { EnergyNode } from '@/types';

interface Props {
    price: number;
    nodes: EnergyNode[];
}

export const MarketMain: React.FC<Props> = ({ price, nodes }) => {
    return (
        <div className="card main-stage" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="price-label">Current Spot Price</div>
            <div className="price-display" style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}>
                ${price.toFixed(4)} <span style={{ fontSize: '1rem', color: '#444' }}>/ kWh</span>
            </div>

            <div style={{ marginTop: 60, width: '100%', padding: '0 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.8rem', color: '#555', textTransform: 'uppercase' }}>
                    <span>Generation (Supply)</span>
                    <span>Load (Demand)</span>
                </div>

                {/* Visualizer */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {nodes.map(node => {
                        const width = Math.min(100, Math.abs(node.currentLoad) * 15);
                        const color = node.currentLoad > 0 ? 'var(--accent-pink)' : 'var(--accent-green)';
                        const opacity = Math.min(1, Math.abs(node.currentLoad) / 5 + 0.2);

                        return (
                            <div key={node.id} style={{ display: 'flex', alignItems: 'center', height: 18 }}>
                                {/* Left Side (Supply) */}
                                <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
                                    {node.currentLoad < 0 && (
                                        <div style={{ height: 6, width: `${width}%`, background: color, borderRadius: 4, boxShadow: `0 0 10px ${color}`, opacity }} />
                                    )}
                                </div>

                                {/* Center Axis */}
                                <div style={{ width: 1, height: 24, background: '#222' }}></div>

                                {/* Right Side (Demand) */}
                                <div style={{ width: '50%', paddingLeft: 10 }}>
                                    {node.currentLoad > 0 && (
                                        <div style={{ height: 6, width: `${width}%`, background: color, borderRadius: 4, boxShadow: `0 0 10px ${color}`, opacity }} />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
