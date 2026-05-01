import React, { useState } from 'react';
import { Link2, Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const UrlForm = ({ onShorten, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onShorten(url);
    setUrl('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card"
    >
      <form onSubmit={handleSubmit} className="url-form">
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Shorten your <span className="text-gradient">Long URL</span></h2>
        <div className="url-input-wrapper">
          <div style={{ position: 'relative', flex: 1 }}>
            <Link2 className="text-secondary" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} size={20} />
            <input 
              type="url" 
              placeholder="Paste your link here..." 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              style={{ paddingLeft: '3rem' }}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Sparkles size={20} />
                Shorten
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default UrlForm;
