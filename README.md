# GridSync: Peer-to-Peer Micro-Energy Trading

## System Architecture
- **Backend (Port 8080)**: Spring Boot 2.7 (Java 8/17 compat), WebFlux, Simulated Matching Engine.
- **Frontend (Port 3000)**: Next.js 14, Real-time Glassmorphism Dashboard.
- **Protocol**: Server-Sent Events (SSE) for millisecond-latency market updates.

## 🚀 How to Run

### 1. Start the Backend
Open a terminal in the `backend` folder:
```bash
cd backend
mvn spring-boot:run
```

### 2. Start the Frontend
Open a *new* terminal in the `frontend` folder:
```bash
cd frontend
npm run dev
```

### 3. Experience It
Open **[http://localhost:3000](http://localhost:3000)** to see the live micro-trading simulation.
