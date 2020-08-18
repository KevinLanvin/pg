import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Quote } from '../../icons/guillemets.svg';
import Slider from 'react-slick';

import './Temoignages.scss';

const Temoignages = ({ temoignages }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoPlay: true,
    autoplaySpeed: 5000,
    pausoOnHover: false,
    customPaging: i => <div
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        margin: '5px',
        border: '1px solid #fff',
        cursor: 'pointer',
        transition: 'background-color .3s'
      }}
    ></div>,
  };
  return (
    <section className="temoignages">
      <div className="temoignages__text">
        <h2 className="white center">Témoignages</h2>
        <Slider {...settings} className="temoignages__carousel">
          { temoignages.map(temoignage => (
            <div key={temoignage.Author}>
              <p className="temoignages__paragraph">{temoignage.Temoignage}<br/>{temoignage.Author}</p>
            </div>
          ))}
        </Slider>
        <Quote className="temoignages__quote" />
      </div>
    </section>
  );
};

Temoignages.propTypes = {
  temoignages: PropTypes.arrayOf(PropTypes.shape({
    Temoignage: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Temoignages;
