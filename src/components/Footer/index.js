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
          <div className="footer__social">
            <a href="https://www.linkedin.com/in/pauline-gorlier-6a13361b6/" target="_blank" rel="noopener noreferrer"><svg height="682pt" viewBox="0 0 682 682" width="682pt" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0"/><path fill="white" d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0"/><path fill="white" d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0"/></svg></a>
            <a href="https://www.facebook.com/Pauline-Gorlier-Praticienne-en-soins-naturels-et-%C3%A9nerg%C3%A9tiques-Lille-101885001591490" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><switch><g><path d="M288 176v-64c0-17.7 14.3-32 32-32h32V0h-64c-53 0-96 43-96 96v80h-64v80h64v256h96V256h64l32-80h-96z" fill="#fff"/></g></switch></svg></a>
          </div>
          <Link to="/mentions-legales" className="footer__link">Mentions Légales</Link>
        </>
      )}
      <p>Site réalisé par <a href="mgdg.fr" target="_blank" rel="noopener noreferrer">MGDG</a> et <a href="https://www.linkedin.com/in/kevin-lanvin-0208281b5/" target="_blank" rel="noopener noreferrer">Kévin Lanvin</a></p>
    </div>
  </footer>
);

Footer.propTypes = {
  mobile: PropTypes.bool,
};

export default Footer;
