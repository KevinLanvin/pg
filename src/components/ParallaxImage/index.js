import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './parallaxImage.scss';

const ParallaxImage = ({ src, alt, className }) => (
  <Parallax y={['-100px', '100px']} className="parallax-container">
    <img src={src} alt={alt} className={className} />
  </Parallax>
);

export default ParallaxImage;
