// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appartements from './pages/Appartements';
import NotFound from './pages/NotFound';
import About from './pages/About';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appartements/:id" element={<Appartements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
