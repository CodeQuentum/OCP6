// Header.js
import React from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from "../assets/logo-kasa.png";


const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src={logo} alt="Logo Kasa" />

      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
