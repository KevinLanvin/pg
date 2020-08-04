import React from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

import './Header.scss';

const Header = () => (
  <header className="header">
    <TopBar />
    <NavBar />
  </header>
);

export default Header;
