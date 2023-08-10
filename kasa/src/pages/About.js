import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.scss';
import imgAPropos from "../assets/img-apropos.png";

const About = () => {
  const [openParagraphs, setOpenParagraphs] = useState([false, false, false, false]);

  const handleMenuClick = (index) => {
    const updatedParagraphs = [...openParagraphs];
    updatedParagraphs[index] = !updatedParagraphs[index];
    setOpenParagraphs(updatedParagraphs);
  };

  return (
    <div>
      <Header />
      <main className='aboutMain'>
        <img src={imgAPropos} alt="Lac bordée de montagne." />
        <div className="menuDeroulant">
          <h2 onClick={() => handleMenuClick(0)}>
            Fiabilité 
            <span className={`arrow ${openParagraphs[0] ? 'open' : ''}`}>&#x25B2;</span>
          </h2>
          {openParagraphs[0] && (
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          )}
        </div>
        <div className="menuDeroulant">
          <h2 onClick={() => handleMenuClick(1)}>
            Respect 
            <span className={`arrow ${openParagraphs[1] ? 'open' : ''}`}>&#x25B2;</span>
          </h2>
          {openParagraphs[1] && (
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
              ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          )}
        </div>
        <div className="menuDeroulant">
          <h2 onClick={() => handleMenuClick(2)}>
            Service 
            <span className={`arrow ${openParagraphs[2] ? 'open' : ''}`}>&#x25B2;</span>
          </h2>
          {openParagraphs[2] && (
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
              ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          )}
        </div>
        <div className="menuDeroulant">
          <h2 onClick={() => handleMenuClick(3)}>
            Sécurité 
            <span className={`arrow ${openParagraphs[3] ? 'open' : ''}`}>&#x25B2;</span>
          </h2>
          {openParagraphs[3] && (
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
