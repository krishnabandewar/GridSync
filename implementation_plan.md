# GridSync Implementation Plan

## Project Goal
Build a Peer-to-Peer (P2P) Micro-Energy Trading Platform where users can visualize and simulate trading excess energy (Solar) with neighbors (EVs/Appliances).

## Tech Stack
- **Backend**: Spring Boot 3 (Java 21), WebFlux, H2 Database (for simplicity in demo), Simulated Matching Engine.
- **Frontend**: Next.js 14, Vanilla CSS (Modern, Glassmorphism), Recharts for data visualization.
- **Communication**: Server-Sent Events (SSE) for real-time dashboard updates (simulating WebSocket high-frequency updates).

## Phase 1: Project Setup & Foundation
- [ ] Create Project Directory Structure (Backend/Frontend)
- [ ] Initialize Next.js Frontend (No Tailwind, TypeScript)
- [ ] Initialize Spring Boot Backend (Maven, WebFlux, JPA, H2)

## Phase 2: Backend Core (The Engine)
- [ ] `EnergyNode` Model: Represents a House (Producer/Consumer).
- [ ] `SimulatorService`: Generates mock energy data in real-time.
- [ ] `MarketController`: SSE Endpoint to stream market data to frontend.
- [ ] `OrderBook`: Simple in-memory matching logic for the demo.

## Phase 3: Frontend Design (The "Wow" Factor)
- [ ] Global CSS Variables (Neon/Dark Theme Palette).
- [ ] Dashboard Layout (Grid System).
- [ ] Components:
    - `EnergyFlowChart`: Live graph of energy usage.
    - `MarketOrderBook`: Visual list of active Bids/Asks.
    - `HouseCard`: Status of individual simulation nodes.

## Phase 4: Integration
- [ ] Connect Frontend SSE to Backend.
- [ ] Visualize Real-time Trading.

## Phase 5: Polish
- [ ] Animations (CSS Transitions).
- [ ] Responsive adjustments.
