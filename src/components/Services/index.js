import React from 'react';
import PropTypes from 'prop-types';

import './Services.scss';

const Services = ({ title, services }) => (
  <section className="services">
    <h2 className="services__title center">Mes services</h2>
    <div className="services__grid">
      { services.map(service => (
        <div className="services__service" key={service.title}>
          <div className="service__image">
            <img src={`${process.env.REACT_APP_BACK_URL}${service.image.url}`} alt={service.title} />
            <div className="service__title">
              <h4 className="white center">{service.title}</h4>
            </div>
            <div className="overlay" />
          </div>
          <div className="service__text">
            <h3>{service.title}</h3>
            <ul>
              { service.Examples.map(example => (
                <li key={example.Label}>{example.Label}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

Services.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      image: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
      Examples: PropTypes.arrayOf(
        PropTypes.shape({
          Label: PropTypes.string.isRequired
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
}

export default Services;
