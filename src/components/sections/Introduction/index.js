import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import BlockQuote from '../../BlockQuote';
import './introduction.scss';

const Introduction = ({
  title,
  paragraph,
  image,
  citation,
}) => (
  <header className="introduction">
    <h1>{title}</h1>
    <p>{paragraph}</p>
    {!!citation && <BlockQuote text={citation} bordered />}
    {!!image &&
      <ParallaxBanner
        layers={[{
          image: `${process.env.REACT_APP_BACKEND_URL}${image.url}`,
          amount: 0.5,
        }]}
        style={{
          width: "100%",
          height: "calc(100vw / 3)",
        }}
      >
      </ParallaxBanner>
    }
  </header>
);

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }),
  citation: PropTypes.string,
};

export default Introduction;
