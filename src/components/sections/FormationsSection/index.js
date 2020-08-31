import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ArrowIcon from '../../../icons/arrow.svg';

import Button from '../../Button';
import './formationsSection.scss';

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={ArrowIcon} alt="Next" />
    </div>
  )
};

const FormationsSection = ({
  title,
  formations,
  linkTo,
  linkLabel,
}) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoPlay: false,
    draggable: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    <section className="formations-section">
      <h2 className="">{title}</h2>
      <Slider {...settings} className="formations-section__carousel">
        {formations.map(formation => (
          <div key="formation.name">
            <div className="formations-section__slide">
              <img src={formation.image.url} alt={formation.image.alternativeText} />
              <div className="formations-section__horizontal-line" />
              <div className="formations-section__dot" />
              <p>{formation.year}<br/>{formation.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Button
        name={linkLabel}
        link={linkTo}
      />
    </section>
  );
};

FormationsSection.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  formations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default FormationsSection;
