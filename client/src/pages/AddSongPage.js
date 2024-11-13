import React, { useState } from 'react';
import axios from 'axios';

function AddSongPage() {
  const [song, setSong] = useState({ title: '', artist: '', album: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    try {
      // Send the song data to your backend
      await axios.post('http://localhost:5000/songs', song);
      console.log('Song added:', song);
      // Clear form after submitting
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
