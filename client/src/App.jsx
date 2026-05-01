import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparkles, History, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import UrlForm from './components/UrlForm';
import UrlCard from './components/UrlCard';
import LottieAnimation from './components/LottieAnimation';
import linkAnimation from './assets/animations/link.json';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    fetchRecentUrls();
  }, []);

  const fetchRecentUrls = async () => {
    try {
      const response = await axios.get(`${API_URL}/recent`);
      setUrls(response.data);
    } catch (error) {
      console.error('Error fetching recent URLs:', error);
    }
  };

  const shortenUrl = async (originalUrl) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/shorten`, { originalUrl });
      setCurrentUrl(response.data);
      setUrls([response.data, ...urls.filter(u => u._id !== response.data._id)]);
    } catch (error) {
      console.error('Error shortening URL:', error);
      alert('Failed to shorten URL. Make sure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="glow-1"></div>
      <div className="glow-2"></div>

      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.2)', color: 'var(--accent-primary)', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}
        >
          <Zap size={16} fill="currentColor" />
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Production Ready URL Shortener</span>
        </motion.div>
        
        <LottieAnimation animationData={linkAnimation} width={250} height={250} />
        
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}
        >
          Simplify your <br />
          <span className="text-gradient">Digital Presence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-secondary"
          style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}
        >
          Create short, memorable links and track their performance with real-time analytics. Fast, secure, and beautiful.
        </motion.p>
      </header>

      <UrlForm onShorten={shortenUrl} isLoading={isLoading} />

      <AnimatePresence>
        {currentUrl && (
          <div key="current">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
              <Sparkles className="text-gradient" size={20} />
              Your New Link
            </h3>
            <UrlCard urlData={currentUrl} />
          </div>
        )}
      </AnimatePresence>

      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <History className="text-secondary" size={20} />
          Recent Links
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {urls.filter(u => u._id !== currentUrl?._id).map((url) => (
            <UrlCard key={url._id} urlData={url} />
          ))}
          {urls.length === 0 && !currentUrl && (
            <p className="text-secondary" style={{ textAlign: 'center', padding: '2rem' }}>No recent links found. Start by shortening one!</p>
          )}
        </div>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
        <p className="text-secondary">© 2026 URLShortner. Powered by Node & React.</p>
      </footer>
    </div>
  );
}

export default App;
