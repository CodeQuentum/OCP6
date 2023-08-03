// Gallery.js
import React from 'react';
import '../styles/Gallery.scss';
import apptData from '../data/appartement.json';

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
    <div className="gallery">
      {apptData.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.cover} alt={item.title} />
          <p className="image-title">{item.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
