import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.scss';
import imgAPropos from "../assets/img-apropos.png";

const About = () => {
    return (
      <div>
        <Header />
        <main> {}
        <img src={imgAPropos} alt="Lac bordée de montagne." />
        <div class = "menuDeroulant">
        <h2>Fiabilité</h2>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes.</p>
        </div>
        <div class = "menuDeroulant">
        <h2>Respect</h2>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div class = "menuDeroulant">
        <h2>Service</h2>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div class = "menuDeroulant">
        <h2>Sécurité</h2>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
        </main> {}
        <Footer />
      </div>
    );
  };
export default About;