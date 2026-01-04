import React from 'react';

import { API_BASE_URL } from '@/config';

export const ControlPanel: React.FC = () => {
    const triggerEvent = async (type: string) => {
        try {
            await fetch(`${API_BASE_URL}/api/market/event/${type}`, { method: 'POST' });
        } catch (error) {
            console.error('Failed to trigger event', error);
        }
    };

    return (
        <div className="card" style={{ marginTop: 12 }}>
            <h3 style={{ marginBottom: 12 }}>Grid Operator Console</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                <button
                    onClick={() => triggerEvent('NORMAL')}
                    style={{
                        padding: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid #333',
                        color: 'var(--text-primary)',
                        borderRadius: 8,
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        transition: '0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                    RESET
                </button>
                <button
                    onClick={() => triggerEvent('HEATWAVE')}
                    style={{
                        padding: '10px',
                        background: 'rgba(236, 72, 153, 0.15)',
                        border: '1px solid var(--accent-pink)',
                        color: 'var(--accent-pink)',
                        borderRadius: 8,
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                    }}
                >
                    HEATWAVE
                </button>
                <button
                    onClick={() => triggerEvent('STORM')}
                    style={{
                        padding: '10px',
                        background: 'rgba(6, 182, 212, 0.15)',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        borderRadius: 8,
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                    }}
                >
                    STORM
                </button>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#666', marginTop: 12, lineHeight: 1.4 }}>
                * <b>Heatwave</b>: Spikes consumer demand.<br />
                * <b>Storm</b>: Drops solar generation.
            </div>
        </div>
    );
};
