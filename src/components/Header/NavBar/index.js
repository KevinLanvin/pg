import React, { useState, useEffect } from 'react';

import './NavBar.scss';
import Logo from '../../../img/logo.svg';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    document.body.addEventListener('click', () => setDropdown(null));
    return () => document.body.removeEventListener('click', () => setDropdown(null));
  },[]);

  const toggleDropdown = (label) => {
    dropdown === label ? setDropdown(null) : setDropdown(label);
  };

  return (
    <nav className="header__navbar">
      <img src={Logo} alt="Logo" id="logo" />
      <div className="header__spacing"></div>
      <span>
        <a href="#" onClick={() => toggleDropdown('services')}>
          Services
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><switch><g><path d="M24 24H0V0h24v24z" fill="none"/><path className="chevron" d="M15.9 9.3L12 13.2 8.1 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.4.4 1 .4 1.4 0l4.6-4.6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"/></g></switch></svg></a>
        {
          dropdown === 'services' &&
            <span className="dropdown">
              <span><a href="#">Soins naturels</a></span>
              <span><a href="#">Soins énergétiques</a></span>
              <span><a href="#">Kinésiologie</a></span>
              <span><a href="#">Arrêt du Tabac</a></span>
            </span>
        }
      </span>
      <span><a href="#">Qui suis-je ?</a></span>
      <span><a href="#">Consultations</a></span>
      <span><a href="#">Blog</a></span>
      <span><a href="#">Contact</a></span>
    </nav>
  );
};

export default NavBar;
