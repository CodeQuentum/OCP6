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
      <main className='homeMain'> {} 
        <div className='img-wrapper'>
          <div className='overlay'></div>
          <img src={imgAccueil} alt="Falaise en bord de mer"></img>
          <h1 className ="image-title">Chez vous, partout et ailleurs</h1>
        </div>
      </main> {}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
