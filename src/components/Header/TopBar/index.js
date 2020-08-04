import React from 'react';

import PhoneIcon from '../../../icons/phone.svg';
import MailIcon from '../../../icons/mailto.svg';
import LinkedInIcon from '../../../icons/linkedin.svg';
import FacebookIcon from '../../../icons/facebook.svg';
import './TopBar.scss';

const TopBar = () => (
  <div className="header__topbar">
    <ul className="header__contact">
      <li><a href="#"><img src={PhoneIcon} alt="phone" />06.32.80.35.82</a></li>
      <li><a href="#"><img src={MailIcon} alt="mail" />contact@pauline-gorlier.com</a></li>
    </ul>
    <ul className="header__social">
      <li><a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a></li>
      <li><a href="#"><img src={FacebookIcon} alt="Facebook" /></a></li>
    </ul>
  </div>
);

export default TopBar;
