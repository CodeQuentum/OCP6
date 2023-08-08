import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.scss';
import apptData from '../data/appartement.json';

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {apptData.map((item) => (
          <div key={item.id} className="gallery-item">
            <Link to={`/appartements/${item.id}`}>
              <div className="img-wrapper">
                <div className="appt-overlay"></div>
                <div className="overlay-dark"></div>
                <img src={item.cover} alt={item.title} className="overlay-image" />
                <p className="appt-title">{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
