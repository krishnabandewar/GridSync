'use client';
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 0%, #1a1a1a 0%, #050505 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }}>

      {/* Decorative Blur */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', zIndex: 0 }}></div>

      <div style={{ zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
        <div className="logo" style={{ fontSize: '3rem', marginBottom: '24px' }}>GridSync_</div>

        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '24px', background: 'linear-gradient(to bottom, #fff, #888)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          The Future of <br />
          Decentralized Energy
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: '1.6', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
          GridSync is a real-time simulation of Peer-to-Peer (P2P) microgrid trading.
          Watch as autonomous agents (Solars, EVs, Households) bid and ask for energy
          in a dynamic marketplace, optimizing efficiency and reducing grid dependency.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px', textAlign: 'left' }}>
          <FeatureCard
            icon="⚡"
            title="Real-time Trading"
            desc="Live simulated order book matching energy producers and consumers instantly."
          />
          <FeatureCard
            icon="🤖"
            title="Autonomous Agents"
            desc="Smart nodes making independent decisions based on simulated battery levels and price."
          />
          <FeatureCard
            icon="📊"
            title="Live Analytics"
            desc="Visualize energy flow, spot prices, and net load in high-fidelity."
          />
        </div>

        <Link href="/dashboard">
          <button style={{
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            border: 'none',
            padding: '16px 48px',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '100px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Launch Simulator
          </button>
        </Link>
      </div>

      <footer style={{ position: 'absolute', bottom: 40, fontSize: '0.8rem', color: '#444' }}>
        Engineered for the Open Energy Web
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.05)',
      padding: '24px',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '1rem', color: '#eee', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}
