import React from 'react';

import content from '../../../data/disclaimer.json';
import './disclaimerSection.scss';

const DisclaimerSection = () => (
  <section className="disclaimer-section">
    <p>{content.paragraph}</p>
  </section>
);

export default DisclaimerSection;
