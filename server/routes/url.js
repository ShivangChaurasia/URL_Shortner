import express from 'express';
import { nanoid } from 'nanoid';
import Url from '../models/Url.js';

const router = express.Router();

// Shorten a URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Check if URL already exists
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json(url);
    }

    const shortCode = nanoid(8);
    url = new Url({
      originalUrl,
      shortCode,
    });

    await url.save();
    res.status(201).json(url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get stats for a URL
router.get('/stats/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }
    res.json(url);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get recent URLs
router.get('/recent', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 }).limit(10);
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
