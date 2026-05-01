# Modern URL Shortener

A premium, production-ready URL shortener built with React, Node.js, and MongoDB.

## Features
- **Sleek UI**: Glassmorphism design with smooth animations using Framer Motion.
- **QR Code Generation**: Automatically generates a QR code for every shortened link.
- **Click Tracking**: Monitor how many times your links are clicked in real-time.
- **Recent Links**: Quickly access your recently shortened URLs.
- **Deployment Ready**: Fully containerized with Docker and Docker Compose.

## Tech Stack
- **Frontend**: React (Vite), Lucide React, Framer Motion, Axios, QRCode.react.
- **Backend**: Node.js, Express, MongoDB (Mongoose), Nanoid.
- **DevOps**: Docker, Docker Compose.

## Getting Started

### Local Development (Quick Start)

1. **Install All Dependencies**:
   ```bash
   npm run install-all
   ```

2. **Run Both Frontend & Backend**:
   ```bash
   npm run dev
   ```

The app will be available at:
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000`

### Manual Setup (Optional)

1. **Backend Setup**:
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. **Frontend Setup**:
   ```bash
   cd client
   npm install
   npm run dev
   ```

## Environment Variables

### Server (`/server/.env`)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `BASE_URL`: Base URL for short links
- `FRONTEND_URL`: URL of the frontend app

## License
MIT
