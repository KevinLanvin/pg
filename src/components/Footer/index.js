import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-bar">
      <Link to="/mentions-legales" className="footer__link">Mentions Légales</Link>
      <Link to="/contact" className="footer__link">Contact</Link>
    </div>
    <div className="footer__bottom-bar">
      <p>Site réalisé par MGDG et Kévin Lanvin</p>
    </div>
  </footer>
);

export default Footer;
