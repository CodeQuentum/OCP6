import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import RoutesComponent from './routes'; // Assurez-vous d'avoir le bon chemin vers le fichier routes.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoutesComponent /> {/* Utilisez directement le composant RoutesComponent ici */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();