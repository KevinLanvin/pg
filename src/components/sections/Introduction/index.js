import React from 'react';
import PropTypes from 'prop-types';

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
    {!!image && <div className="introduction__banner">
      <img src={image.url} alt={image.alternativeText} />
    </div>}
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
