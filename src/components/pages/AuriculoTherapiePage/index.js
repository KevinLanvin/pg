import React from 'react';
import PropTypes from 'prop-types';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/auriculo-therapie.json';

const AuriculoTherapiePage = ({ mobile = false }) => (
  <main>
    <TechniqueLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      technique={content.Technique}
      details={content.Details}
      listSection={content.ListSection}
      mobile={mobile}
    />
  </main>
);

AuriculoTherapiePage.propTypes= {
  mobile: PropTypes.bool,
};

export default AuriculoTherapiePage;
