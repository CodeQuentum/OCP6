// pages/Home.js
import React from 'react';
import Header from '../components/Header';
import imgAccueil from '../assets/img-accueil.png';
import "../styles/Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <main> {}
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={imgAccueil} alt="Falaise en bord de mer"></img>
        {/* Ajoutez d'autres éléments de contenu pour la page d'accueil */}
      </main> {}
    </div>
  );
};

export default Home;
