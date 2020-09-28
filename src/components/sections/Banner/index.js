import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { ParallaxBanner } from 'react-scroll-parallax';

import './Banner.scss';

const Banner = ({
  title,
  image,
  imageAlt,
  onClick,
}) => (
  <section className="banner">
    <ParallaxBanner
      layers={[{
        image: `${process.env.REACT_APP_BACKEND_URL}${image}`,
          amount: 0.5,
      }]}
      style={{
        height: 'calc(100vh-6rem)',
      }}
    >
      <div className="banner__content">
        <h1 className="white">{title}</h1>
        <Button name="En savoir plus" onClick={onClick} />
      </div>
    </ParallaxBanner>
      {/* bgImage={} */}
      {/* bgImageAlt={imageAlt} */}
  </section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Banner;
