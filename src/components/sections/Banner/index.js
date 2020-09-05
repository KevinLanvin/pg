import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import ParallaxImage from '../../ParallaxImage';

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
    <ParallaxImage src={image} alt={imageAlt} className="banner__image" />
  </section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Banner;
