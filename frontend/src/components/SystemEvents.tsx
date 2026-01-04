import React from 'react';
import { EnergyNode } from '@/types';

interface Props {
    timestamp: number;
    nodes: EnergyNode[];
}

export const SystemEvents: React.FC<Props> = ({ timestamp, nodes }) => {
    const netLoad = nodes.reduce((acc, n) => acc + n.currentLoad, 0);

    return (
        <div className="card">
            <h3>System Events</h3>
            <div style={{ fontSize: '0.8rem', color: '#666', fontFamily: 'monospace', marginTop: 16 }}>
                <div style={{ borderLeft: '2px solid #333', paddingLeft: 8, marginBottom: 8 }}>
                    TIMESTAMP<br />
                    <span style={{ color: '#fff' }}>{new Date(timestamp).toLocaleTimeString()}</span>
                </div>
                <div style={{ borderLeft: '2px solid #333', paddingLeft: 8, marginBottom: 8 }}>
                    NET LOAD<br />
                    <span style={{ color: netLoad > 0 ? 'var(--accent-pink)' : 'var(--accent-green)' }}>
                        {netLoad.toFixed(2)} kW
                    </span>
                </div>

                <div style={{ marginTop: 20, borderTop: '1px solid #222', paddingTop: 10 }}>
                    <div style={{ color: '#888' }}>&gt; System Connected</div>
                    <div style={{ color: '#888' }}>&gt; Market Active</div>
                    {nodes.filter(n => Math.abs(n.currentLoad) > 4).map(n => (
                        <div key={n.id} style={{ marginTop: 4, color: n.currentLoad > 0 ? 'var(--accent-pink)' : 'var(--accent-green)' }}>
                            &gt; ALERT: {n.name} {n.currentLoad > 0 ? 'Peak Load' : 'Surplus'}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
