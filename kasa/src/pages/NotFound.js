// pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../assets/404.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div>
      <Header /> 
      <section className='errorContent'>
      <img className='img404' src={error404} alt='Erreur 404' />
      <p>Oups! La page que <span>vous demandez n'existe pas.</span></p>
      <Link to="/">Retourner à la page d'accueil</Link>
      </section>
      <Footer /> 
    </div>
  );
};

export default NotFound;
