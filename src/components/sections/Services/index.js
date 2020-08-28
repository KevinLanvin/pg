import React from 'react';
import { useLocation } from 'react-router-dom';

import servicesData from '../../../data/services.json';
import './Services.scss';

const Services = () => {
  const location = useLocation();
  return (
    <section className="services">
      <h2 className="services__title center">{servicesData.title}</h2>
      <div className="services__grid">
        { servicesData.services.map(service =>
         service.linkTo != location.pathname ? (
          <div className="services__service" key={service.title}>
            <div className="service__image">
              <img src={service.image.url} alt={service.image.alternativeText} />
              <div className="service__title">
                <h4 className="white center">{service.title}</h4>
              </div>
              <div className="overlay" />
            </div>
            <div className="service__text">
              <h3>{service.title}</h3>
              <ul>
                { service.examples.map(example => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
         ):null)}
      </div>
    </section>
  );
};

export default Services;