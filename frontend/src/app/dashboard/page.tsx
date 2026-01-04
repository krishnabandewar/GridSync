'use client';
import React from 'react';
import { useMarketStream } from '@/hooks/useMarketStream';
import { DashboardHeader } from '@/components/DashboardHeader';
import { NetworkNodes } from '@/components/NetworkNodes';
import { MarketMain } from '@/components/MarketMain';
import { SystemEvents } from '@/components/SystemEvents';
import { ControlPanel } from '@/components/ControlPanel';

export default function Dashboard() {
    const { data, status, error } = useMarketStream('http://127.0.0.1:8080/api/market/stream');

    if (!data) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>
                <div className="logo" style={{ marginBottom: 20 }}>GridSync_</div>
                <div style={{ fontSize: '0.9rem', color: '#666', letterSpacing: '0.1em' }}>
                    {status === 'ERROR' ? 'CONNECTION FAILED' : 'INITIALIZING UPLINK...'}
                </div>
                {error && <div style={{ color: 'var(--accent-pink)', marginTop: 10, fontSize: '0.8rem' }}>{error}</div>}
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <DashboardHeader status={status} />

            {/* Sidebar: Nodes */}
            <NetworkNodes nodes={data.nodes} />

            {/* Main Stage: Price & Visualization */}
            <MarketMain price={data.marketPrice} nodes={data.nodes} />

            {/* Right: Simulator Log / Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <SystemEvents timestamp={data.timestamp} nodes={data.nodes} />
                <ControlPanel />
            </div>
        </div>
    );
}
