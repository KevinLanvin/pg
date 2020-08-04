import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({name, link}) => (
  <a href={link} className="button">{name}</a>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
