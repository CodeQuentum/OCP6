// components/Footer.js
import React from 'react';
import '../styles/Footer.scss';
import footerLogo from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-content'>
            <img src={footerLogo} alt="Logo Kasa noir et blanc"></img>
            <p>© 2020 Kasa. All <span>rights reserved</span></p>
        </div>
    </footer>
  );
};

export default Footer;
