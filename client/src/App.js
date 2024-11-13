import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';
import ListPage from './pages/ListPage';
import AddSongPage from './pages/AddSongPage';
import EditSongPage from './pages/EditSongPage';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/songs');
      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Music Player</h1>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/list" element={<ListPage songs={songs} />} />
          <Route
            path="/add-song"
            element={<AddSongPage fetchSongs={fetchSongs} />}
          />
          <Route
            path="/edit-song/:id"
            element={<EditSongPage fetchSongs={fetchSongs} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
