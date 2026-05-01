import React from 'react';
import { Copy, ExternalLink, BarChart3, Check } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';

const UrlCard = ({ urlData, backendUrl }) => {
  const [copied, setCopied] = React.useState(false);
  const shortUrl = `${backendUrl}/${urlData.shortCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card"
      style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem' }}
    >
      <div style={{ background: 'white', padding: '0.75rem', borderRadius: '1rem' }}>
        <QRCodeSVG value={shortUrl} size={100} />
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="text-secondary">Original: {urlData.originalUrl.substring(0, 40)}...</span>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <BarChart3 size={16} className="text-secondary" />
            <span className="text-secondary">{urlData.clicks} clicks</span>
          </div>
        </div>
        
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ textDecoration: 'none' }}>
            {shortUrl}
          </a>
        </h3>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={copyToClipboard} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            <button style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}>
              <ExternalLink size={16} />
              Visit
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default UrlCard;
