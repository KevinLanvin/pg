import React from 'react';
import PropTypes from 'prop-types';

import './introduction.scss';

const Introduction = ({ title, paragraph, image }) => (
  <header className="introduction">
    <h1>{title}</h1>
    <p>{paragraph}</p>
    {!!image && <div class="introduction__banner">
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
};

export default Introduction;
