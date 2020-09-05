import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Reveal } from 'react-reveal';

import servicesData from '../../../data/services.json';
import './Services.scss';

const Services = () => {
  const location = useLocation();
  return (
    <section className="services">
      <h2 className="services__title center">{servicesData.title}</h2>
      <div className="services__grid">
        { servicesData.services.map((service, index) =>
          service.linkTo !== location.pathname ? (
            <Reveal effect="fadeIn" delay={index*300} key={service.title}>
              <NavLink to={service.linkTo} className="services__service">
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
              </NavLink>
            </Reveal>
          ):null)}
      </div>
    </section>
  );
};

export default Services;
