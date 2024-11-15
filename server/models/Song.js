// models/Song.js
const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  duration: { type: String, required: false }, // Optional duration field
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
