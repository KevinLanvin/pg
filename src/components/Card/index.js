import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({
  title,
  description,
  image,
  imageAlt,
  link,
}) => (
  <div className="card">
    <div className="card__wrapper">
      <img className="card__picture" src={image} alt={imageAlt} />
      <div className="card__text">
        <h3 className="card__title center">{title}</h3>
        <p className="card__description">{description}</p>
        <a className="card__link" href={link}>Voir plus<svg height="24" width="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path className="chevron" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm59.313 267.314l-72 72A15.95 15.95 0 01232 344.001c-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg></a>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
