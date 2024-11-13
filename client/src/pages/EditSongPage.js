import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditSongPage({ fetchSongs }) {
  const [song, setSong] = useState({ title: '', artist: '', album: '', duration: '' });
  const { id } = useParams();  // Extract the song ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the song details using the ID
    axios.get(`http://localhost:5000/songs/${id}`)
      .then(response => {
        setSong(response.data);
      })
      .catch(error => console.error("Error fetching song:", error));
  }, [id]);

  const handleEditSong = async () => {
    try {
      await axios.put(`http://localhost:5000/songs/${id}`, song);
      fetchSongs();  // Refresh the song list
      navigate('/list');  // Redirect to the list page after editing
    } catch (error) {
      console.error("Error editing song:", error);
    }
  };

  return (
    <div>
      <h2>Edit Song</h2>
      <input
        placeholder="Title"
        value={song.title}
        onChange={(e) => setSong({ ...song, title: e.target.value })}
      />
      <input
        placeholder="Artist"
        value={song.artist}
        onChange={(e) => setSong({ ...song, artist: e.target.value })}
      />
      <input
        placeholder="Album"
        value={song.album}
        onChange={(e) => setSong({ ...song, album: e.target.value })}
      />
      <input
        placeholder="Duration"
        value={song.duration}
        onChange={(e) => setSong({ ...song, duration: e.target.value })}
      />
      <button onClick={handleEditSong}>Save Changes</button>
    </div>
  );
}

export default EditSongPage;
