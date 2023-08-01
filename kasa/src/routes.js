// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez le composant Routes au lieu de Switch
import Home from './pages/Home';
import Appartements from './pages/Appartements';
import NotFound from './pages/NotFound';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes> {/* Utilisez le composant Routes */}
        <Route path="/" element={<Home />} /> {/* Utilisez "element" au lieu de "component" */}
        <Route path="/appartements" element={<Appartements />} /> {/* Utilisez "element" au lieu de "component" */}
        <Route path="*" element={<NotFound />} /> {/* Utilisez "element" au lieu de "component" */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
