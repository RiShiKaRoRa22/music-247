const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/musicdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a Song model
const Song = mongoose.model('Song', {
  title: String,
  artist: String,
  album: String,
  duration: String
});

// CRUD Operations for MongoDB
app.post('/songs', async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.send(song);
});

app.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.send(songs);
});

app.put('/songs/:id', async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(song);
});

app.delete('/songs/:id', async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.send({ message: 'Song deleted' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
