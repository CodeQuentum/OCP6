import React from 'react';

const Appartements = ({ data }) => {
  return (
    <div>
      <h2>Liste des appartements :</h2>
      <ul>
        {data.map((appartement) => (
          <li key={appartement.id}>
            <h3>{appartement.nom}</h3>
            <p>{appartement.description}</p>
            {/* Ajoutez d'autres informations sur l'appartement ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appartements;
