import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import requests from './request';

function App() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.jsonAlbums)
      console.log(response.data);
      setAlbums(response.data);
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>{ }</h1>
    </div>
  );
}

export default App;
