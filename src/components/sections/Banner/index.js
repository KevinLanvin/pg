import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

import './Banner.scss';

const Banner = ({
  title,
  image,
  imageAlt,
  onClick,
}) => (
  <section className="banner">
    <h1 className="white">{title}</h1>
    <Button name="En savoir plus" onClick={onClick} />
    <img src={image} alt={imageAlt} />
  </section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Banner;
