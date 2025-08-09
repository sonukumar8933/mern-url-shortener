const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const { nanoid } = require('nanoid');

// POST /api/shorten - Create short URL
router.post('/shorten', async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({ error: 'Long URL is required' });
    }

    // Check if URL already exists
    let existingUrl = await Url.findOne({ longUrl });
    if (existingUrl) {
      return res.json({
        shortCode: existingUrl.shortCode,
        shortUrl: `${req.protocol}://${req.get('host')}/${existingUrl.shortCode}`,
        longUrl: existingUrl.longUrl
      });
    }

    // Generate unique short code
    let shortCode;
    let isUnique = false;
    
    while (!isUnique) {
      shortCode = nanoid(6);
      const existing = await Url.findOne({ shortCode });
      if (!existing) {
        isUnique = true;
      }
    }

    // Create new URL entry
    const newUrl = new Url({
      longUrl,
      shortCode
    });

    await newUrl.save();

    res.json({
      shortCode,
      shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}`,
      longUrl
    });

  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/admin/urls - Get all URLs with statistics (Admin only)
router.get('/admin/urls', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    console.error('Error fetching URLs:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/admin/urls/:id - Delete URL (Admin only)
router.delete('/admin/urls/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Url.findByIdAndDelete(id);
    res.json({ message: 'URL deleted successfully' });
  } catch (error) {
    console.error('Error deleting URL:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
