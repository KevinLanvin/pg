import React from 'react';
import PropTypes from 'prop-types';

import './introduction.scss';

const Introduction = ({ title, paragraph }) => (
  <header className="introduction">
    <h1>{title}</h1>
    <p>{paragraph}</p>
  </header>
);

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Introduction;
