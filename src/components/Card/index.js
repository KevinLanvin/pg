import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({
  title,
  description,
  price,
  image,
  imageAlt,
  linkTo,
  linkLabel,
}) => (
  <Link className="card" to={linkTo}>
    <div className="card__wrapper">
      <img className="card__picture" src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt={imageAlt} />
      <div className="card__text">
        <h3 className="card__title center">{title}</h3>
        {!!price &&
        <div className="card__price-container">
          <p className="card__price">{price}</p>
          <p className="card__description">{description}</p>
        </div>
        }
        {!price && <p className="card__description">
          <Truncate lines={4} ellipsis={<span>...</span>}>
            {description}
          </Truncate>
        </p>}
        <p className="card__link" href={linkTo}>{linkLabel}<svg height="24" width="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path className="chevron" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm59.313 267.314l-72 72A15.95 15.95 0 01232 344.001c-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg></p>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

export default Card;
