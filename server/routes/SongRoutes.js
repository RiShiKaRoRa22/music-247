// routes/songRoutes.js
const express = require('express');
const Song = require('../models/Song');

const router = express.Router();

// Create a new song
router.post('/songs', async (req, res) => {
  try {
    const newSong = new Song(req.body);
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (error) {
    res.status(400).json({ message: 'Error creating song', error });
  }
});

// Get all songs
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs', error });
  }
});

// Get a song by ID
router.get('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching song', error });
  }
});

// Update a song by ID
router.put('/songs/:id', async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(400).json({ message: 'Error updating song', error });
  }
});

// Delete a song by ID
router.delete('/songs/:id', async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting song', error });
  }
});

module.exports = router;
