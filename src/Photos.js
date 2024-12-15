import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './request';

function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requests.jsonPhotos)
            // console.log(response.data);
            setPhotos(response.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {
                photos.map(photo => (
                    <img
                        key={photo.id}
                        src={photo.thumbnailUrl}
                    />
                ))
            }
        </div>
    );
}

export default Photos;
