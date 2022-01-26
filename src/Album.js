import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './request';

function Album() {
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
        <div>
            {
                albums.map(album => (
                    <h1 key={album.id}>{album.title}</h1>
                ))
            }
        </div>
    );
}

export default Album;
