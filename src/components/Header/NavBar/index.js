import React from 'react';

import './NavBar.scss';
import Logo from '../../../img/logo.svg';

const NavBar = () => (
  <nav className="header__navbar">
    <img src={Logo} alt="Logo" id="logo" />
    <div className="header__spacing"></div>
  <a href="#">Services<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><switch><g><path d="M24 24H0V0h24v24z" fill="none"/><path className="chevron" d="M15.9 9.3L12 13.2 8.1 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.4.4 1 .4 1.4 0l4.6-4.6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"/></g></switch></svg></a>
    <a href="#">Qui suis-je ?</a>
    <a href="#">Consultations</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </nav>
);

export default NavBar;
