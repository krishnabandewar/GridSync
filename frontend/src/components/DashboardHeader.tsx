import React from 'react';

interface Props {
    status: 'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR';
}

export const DashboardHeader: React.FC<Props> = ({ status }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'CONNECTED': return 'var(--accent-green)';
            case 'CONNECTING': return '#fbbf24'; // amber
            case 'ERROR': return 'var(--accent-pink)';
            default: return '#666';
        }
    };

    return (
        <div className="header glass">
            <div className="logo">GridSync_</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: getStatusColor(), boxShadow: `0 0 8px ${getStatusColor()}` }}></div>
                    {status}
                </div>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#666', borderLeft: '1px solid var(--glass-border)', paddingLeft: 16 }}>
                    P2P ENERGY MICROGRID
                </div>
            </div>
        </div>
    );
};
