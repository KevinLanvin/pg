import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({
  title,
  description,
  image,
  alt,
  link,
}) => (
  <div className="card">
    <div className="card__wrapper">
      <img className="card__picture" src={image} alt={alt} />
      <div className="card__text">
        <h3 className="card__title center">{title}</h3>
        <p className="card__description">{description}</p>
        <a className="card__link" href={link}>Voir plus<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><defs><filter id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.140513 0 0 0 0 0.064018 0 0 0 0 0.322209 0 0 0 1.000000 0"/></filter></defs><g filter="url(#a)" fill="none"><path className="chevron" d="M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm3.475 15.663l-4.218 4.219a.935.935 0 01-.663.274c-.828 0-1.255-1.008-.663-1.6L16.487 15l-3.556-3.556a.937.937 0 111.326-1.326l4.218 4.22a.937.937 0 010 1.325z" /></g></svg></a>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
