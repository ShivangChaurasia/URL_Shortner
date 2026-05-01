# 🔗 Shorty - Premium URL Shortener

![Banner](https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop)

Shorty is a production-ready, visually stunning URL shortener built with the MERN stack. It features a modern **Glassmorphism** design, real-time analytics, and a seamless user experience.

## ✨ Features

- 💎 **Premium Glassmorphism UI**: A beautiful, translucent interface that feels modern and fast.
- 🌓 **Dynamic Theme Engine**: Smooth transitions between Dark and Light modes with persistent state.
- 🎬 **Lottie Animations**: High-quality vector animations for a premium interactive feel.
- 📱 **QR Code Generation**: Instantly generate QR codes for every shortened URL.
- 📊 **Real-time Tracking**: Monitor link performance and click counts instantly.
- 🚀 **Performance Optimized**: Built with React 19 and Vite 6 for lightning-fast loads.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lottie React](https://github.com/Gamote/lottie-react)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Codes**: [qrcode.react](https://github.com/zpao/qrcode.react)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **ID Generation**: [Nanoid](https://github.com/ai/nanoid)

## 🚀 Getting Started

### Quick Start (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShivangChaurasia/URL_Shortner.git
   cd URL_Shortner
   ```

2. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   BASE_URL=http://localhost:5000
   FRONTEND_URL=http://localhost:5173
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

The app will be live at `http://localhost:5173`.

## 👤 Author

**Shivang Chaurasia**
- [GitHub](https://github.com/ShivangChaurasia)
- [LinkedIn](https://www.linkedin.com/in/shivang-chaurasia-754232297/)
- [Portfolio](https://shivangchaurasia.vercel.app/)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
