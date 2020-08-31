import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-bar">
      <a href="#" className="footer__link">Mentions Légales</a>
      <NavLink to="/contact" className="footer__link">Contact</NavLink>
    </div>
    <div className="footer__bottom-bar">
      <p>Site réalisé par MGDG et Kévin Lanvin</p>
    </div>
  </footer>
);

export default Footer;
