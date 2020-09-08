import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = ({ mobile = false }) => (
  <footer className="footer">
    { !mobile && (
      <div className="footer__top-bar">
        <Link to="/mentions-legales" className="footer__link">Mentions Légales</Link>
        <Link to="/contact" className="footer__link">Contact</Link>
      </div>
    )}
    <div className="footer__bottom-bar">
      { mobile && (
        <>
          <Link to="/contact" className="footer__link">Contact</Link>
          <Link to="/mentions-legales" className="footer__link">Mentions Légales</Link>
        </>
      )}
      <p>Site réalisé par MGDG et Kévin Lanvin</p>
    </div>
  </footer>
);

Footer.propTypes = {
  mobile: PropTypes.bool,
};

export default Footer;
