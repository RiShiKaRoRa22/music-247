import React, { useState, useEffect } from 'react';

function ListPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Mocked API call
    setSongs([{ title: 'Song 1' }, { title: 'Song 2' }]);
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
