import React from 'react';
import { ReactComponent as Quote } from '../../../icons/guillemets.svg';
import Slider from 'react-slick';
import { ParallaxBanner } from 'react-scroll-parallax';

import content from '../../../data/temoignages.json';

import './Temoignages.scss';

const Temoignages = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
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
      <ParallaxBanner
        layers={[{
          image: `${process.env.REACT_APP_BACKEND_URL}/img/temoignages.jpg`,
            amount: 0.5,
        }]}
        style={{
          height: '100%',
        }}
      >
        <div className="temoignages__text">
          <h2 className="white center">{content.title}</h2>
          <Slider {...settings} className="temoignages__carousel">
            { content.testimonials.map(temoignage => (
              <div key={temoignage.author}>
                <p className="temoignages__paragraph">{temoignage.paragraph}<br/>{temoignage.author}</p>
              </div>
            ))}
          </Slider>
          <Quote className="temoignages__quote" />
        </div>
      </ParallaxBanner>
    </section>
  );
};

export default Temoignages;
