import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './Button.scss';

const Button = ({
  name,
  link,
  onClick,
  alt,
}) => {
  const classes = classNames({ 'button': true, 'button--alt': alt });
  return (
    <>
      {!!link &&
      <Link
        to={link}
        className={classes}
      >{name}</Link>
      }
      {!!onClick &&
        <div
          onClick={onClick}
          className={classes}
        >{name}</div>
      }
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  alt: PropTypes.bool,
};

export default Button;
