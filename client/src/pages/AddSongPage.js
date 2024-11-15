import React, { useState } from 'react';
import axios from 'axios';

function AddSongPage() {
  console.log('AddSongPage component is rendering'); // Debugging line

  const [song, setSong] = useState({ title: '', artist: '', album: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/songs', song);
      setSong({ title: '', artist: '', album: '' });
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={song.title}
          onChange={handleChange}
        />
        <input
          name="artist"
          placeholder="Artist"
          value={song.artist}
          onChange={handleChange}
        />
        <input
          name="album"
          placeholder="Album"
          value={song.album}
          onChange={handleChange}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default AddSongPage;
