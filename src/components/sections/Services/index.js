import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import useIntersect from '../../../utils/useIntersect';

import servicesData from '../../../data/services.json';
import './Services.scss';

const Services = ({ mobile = false }) => {
  const location = useLocation();
  const [ ref, entry ] = useIntersect({ threshold: 0});

  const gridClass = classNames('services__grid', {'services__grid--visible' : entry.intersectionRatio > 0 });

  return (
    <section className="services">
      <h2 className="services__title center">{servicesData.title}</h2>
      <div className={gridClass} ref={ref}>
        { servicesData.services.map((service, index) =>
          service.linkTo !== location.pathname ? (
            <NavLink to={service.linkTo} className="services__service" key={service.title}>
              <div className="service__image">
                <img src={`${process.env.REACT_APP_BACKEND_URL}${service.image.url}`} alt={service.image.alternativeText} />
                <div className="service__title">
                  <h4 className="white center">{service.title}</h4>
                </div>
                <div className="overlay" />
              </div>
              {!mobile && (
                <div className="service__text">
                  <h3>{service.title}</h3>
                  <ul>
                    { service.examples.map(example => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </NavLink>
          ):null)}
      </div>
    </section>
  );
};

Services.propTypes = {
  mobile: PropTypes.bool,
};

export default Services;
