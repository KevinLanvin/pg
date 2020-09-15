import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './NavBar.scss';
import Logo from '../../../img/logo.svg';

const NavBar = ({ mobile }) => {
  let location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);
  const navMobileClass = classNames('header__mobile-menu', { 'header__mobile-menu--visible': menuVisible });
  const servicesPaths = ['/soins-naturels', '/soins-energetiques', '/kinesiologie', '/arret-tabac', '/ventouses', '/moxibustion', '/guasha', '/reflexologie-auriculaire' ];
  const servicesClass = classNames({ 'active': servicesPaths.includes(location.pathname) });
  const chevronClass = classNames('chevron', { 'chevron--active': servicesPaths.includes(location.pathname) });
  const soinsNaturelsTechniques = [ '/ventouses', '/moxibustion', '/guasha', '/reflexologie-auriculaire' ];
  const soinsNaturelsClass = classNames({ 'active': soinsNaturelsTechniques.includes(location.pathname) })
  const closeMenu = () => setMenuVisible(false)

  return (
    <nav className="header__navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src={Logo} alt="Logo" id="logo" />
      </NavLink>
      <div className="header__spacing"></div>
      {!mobile && (
        <>
          <span>
            <div className={servicesClass}>
              Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><switch><g><path d="M24 24H0V0h24v24z" fill="none"/><path className={chevronClass} d="M15.9 9.3L12 13.2 8.1 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.4.4 1 .4 1.4 0l4.6-4.6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"/></g></switch></svg></div>
            <span className="dropdown">
              <span><NavLink className={soinsNaturelsClass} to="/soins-naturels">Soins naturels</NavLink></span>
              <span><NavLink to="/soins-energetiques">Soins énergétiques</NavLink></span>
              <span><NavLink to="/kinesiologie">Kinésiologie</NavLink></span>
              <span><NavLink to="/arret-tabac">Arrêt du Tabac</NavLink></span>
            </span>
          </span>
          <span><NavLink to="/qui-suis-je">Qui suis-je ?</NavLink></span>
          <span><NavLink to="/consultations">Consultations</NavLink></span>
          <span><NavLink to="/contact">Contact</NavLink></span>
        </>
      )}
      {mobile && (
        <>
          <input type="checkbox" checked={menuVisible} readOnly id="hamburger-toggle" onClick={() => setMenuVisible(!menuVisible)} />
          <label className="header__hamburger" htmlFor="hamburger-toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className={navMobileClass}>
            <span className={servicesClass}>Services</span>
            <span><NavLink className={`header__sublink ${soinsNaturelsClass}`} to="/soins-naturels" onClick={closeMenu}>Soins naturels</NavLink></span>
            <span><NavLink className="header__sublink" to="/soins-energetiques" onClick={closeMenu}>Soins énergétiques</NavLink></span>
            <span><NavLink className="header__sublink" to="/kinesiologie" onClick={closeMenu}>Kinésiologie</NavLink></span>
            <span><NavLink className="header__sublink" to="/arret-tabac" onClick={closeMenu}>Arrêt du Tabac</NavLink></span>
            <span><NavLink to="/qui-suis-je" onClick={closeMenu}>Qui suis-je ?</NavLink></span>
            <span><NavLink to="/consultations" onClick={closeMenu}>Consultations</NavLink></span>
            <span><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></span>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
