import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import NavBar from './NavBar';

import './Header.scss';

const Header = ({ mobile = false }) => (
  <>
    {/* <header className="header"> */}
    {!mobile && <TopBar />}
    <NavBar mobile={mobile} />
    {/* </header> */}
  </>
);

Header.propTypes = {
  mobile: PropTypes.bool,
};

export default Header;
