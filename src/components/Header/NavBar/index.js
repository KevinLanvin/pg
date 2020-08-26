import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';
import Logo from '../../../img/logo.svg';

const NavBar = () => (

  <nav className="header__navbar">
    <img src={Logo} alt="Logo" id="logo" />
    <div className="header__spacing"></div>
    <span>
      <a href="#">
        Services
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><switch><g><path d="M24 24H0V0h24v24z" fill="none"/><path className="chevron" d="M15.9 9.3L12 13.2 8.1 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.4.4 1 .4 1.4 0l4.6-4.6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"/></g></switch></svg></a>
      <span className="dropdown">
        <span><NavLink to="/soins-naturels">Soins naturels</NavLink></span>
        <span><a href="#">Soins énergétiques</a></span>
        <span><a href="#">Kinésiologie</a></span>
        <span><a href="#">Arrêt du Tabac</a></span>
      </span>
    </span>
    <span><a href="#">Qui suis-je ?</a></span>
    <span><a href="#">Consultations</a></span>
    <span><a href="#">Blog</a></span>
    <span><a href="#">Contact</a></span>
  </nav>
);

export default NavBar;
