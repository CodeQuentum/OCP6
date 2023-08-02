// Header.js
import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src="../assets/logo-kasa.png" alt="Logo Kasa" />
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
