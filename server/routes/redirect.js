import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();

router.get('/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });

    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).send('URL not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
