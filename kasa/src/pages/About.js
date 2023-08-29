import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse'; // Assure-toi d'ajuster le chemin si nécessaire
import '../styles/About.scss';
import imgAPropos from "../assets/img-apropos.png";

const About = () => {
  const sections = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  const [openSections, setOpenSections] = useState(Array(sections.length).fill(false));

  const handleSectionClick = (index) => {
    const updatedSections = [...openSections];
    updatedSections[index] = !updatedSections[index];
    setOpenSections(updatedSections);
  };

  return (
    <div>
      <Header />
      <main className="aboutMain">
        <img src={imgAPropos} alt="Lac bordée de montagne." />
        <section className='topic'>
        {sections.map((section, index) => (
          <Collapse
            key={index}
            title={section.title}
            isOpen={openSections[index]}
            onClick={() => handleSectionClick(index)}
          >
            {section.content}
          </Collapse>
        ))} 
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
