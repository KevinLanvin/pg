import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({name, link, alt}) => {
  const classes = classNames({ 'button': true, 'button--alt': alt });
    return (
  <a
    href={link}
    className={classes}
  >{name}</a>
);
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.bool,
};

export default Button;
