const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// GET /:shortcode - Redirect to original URL
router.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Update click count and last accessed time
    url.clicks += 1;
    url.lastAccessed = new Date();
    await url.save();

    // Redirect to original URL
    res.redirect(url.longUrl);

  } catch (error) {
    console.error('Error redirecting:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
