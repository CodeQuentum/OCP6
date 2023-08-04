// pages/Appartements.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import apptData from '../data/appartement.json';
import '../styles/Appartements.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Appartements = () => {
  const { id } = useParams();
  const appartement = apptData.find((appartement) => appartement.id === id);

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <Slider {...settings}>
        {appartement.pictures.map((picture, index) => (
          <div key={index}>
            <img className="slider-image" src={picture} alt={`Picture ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div>
        <h2>{appartement.title}</h2>
        <p>{appartement.description}</p>
        <p>Location: {appartement.location}</p>
        <p>Rating: {appartement.rating}</p>

        <h3>Host</h3>
        <div>
          <p>{appartement.host.name}</p>
          <img src={appartement.host.picture} alt={appartement.host.name} />
        </div>

        <h3>Equipements</h3>
        <ul>
          {appartement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>

        <h3>Tags</h3>
        <ul>
          {appartement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Appartements;
