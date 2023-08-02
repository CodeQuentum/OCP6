// Header.js
import React from 'react';
import '../styles/Header.scss';
import logo from "../assets/logo-kasa.png";


const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src={logo} alt="Logo Kasa" />

      </div>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
