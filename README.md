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

### Local Development

1. **Prerequisites**:
   - Node.js (v18+)
   - MongoDB running locally (default: `mongodb://localhost:27017/url_shortener`)

2. **Backend Setup**:
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Using Docker (Deployment Ready)

To run the entire stack (Frontend, Backend, MongoDB) with one command:

```bash
docker-compose up --build
```

The app will be available at:
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000`

## Environment Variables

### Server (`/server/.env`)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `BASE_URL`: Base URL for short links
- `FRONTEND_URL`: URL of the frontend app

## License
MIT
