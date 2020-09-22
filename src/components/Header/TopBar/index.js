import React from 'react';

import PhoneIcon from '../../../icons/phone.svg';
import MailIcon from '../../../icons/mailto.svg';
import LinkedInIcon from '../../../icons/linkedin.svg';
import FacebookIcon from '../../../icons/facebook.svg';
import InstagramIcon from '../../../icons/instagram.svg';
import './TopBar.scss';

const TopBar = () => (
  <div className="header__topbar">
    <ul className="header__contact">
      <li><img src={PhoneIcon} alt="phone" />06.32.80.35.82</li>
      <li><a href="mailto:contact@pauline-gorlier.com"><img src={MailIcon} alt="mail" />contact@pauline-gorlier.com</a></li>
    </ul>
    <ul className="header__social">
      <li><a href="https://www.instagram.com/pauline_gorlier_soins_naturels" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" /></a></li>
      <li><a href="https://www.linkedin.com/in/pauline-gorlier-6a13361b6/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" /></a></li>
      <li><a href="https://www.facebook.com/Pauline-Gorlier-Praticienne-en-soins-naturels-et-%C3%A9nerg%C3%A9tiques-Lille-101885001591490" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" /></a></li>
    </ul>
  </div>
);

export default TopBar;
