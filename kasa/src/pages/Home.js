// pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import imgAccueil from '../assets/img-accueil.png';
import "../styles/Home.scss";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main> {}
        <h1>Chez vous, partout et ailleurs</h1>
        <div className='img-wrapper'>
        <img src={imgAccueil} alt="Falaise en bord de mer"></img>
        </div>
      </main> {}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
