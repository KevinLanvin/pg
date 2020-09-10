import React from 'react';
import PropTypes from 'prop-types';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/soins-energetiques.json';

const SoinsEnergetiquesPage = ({ mobile = false }) => (
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

SoinsEnergetiquesPage.propTypes= {
  mobile: PropTypes.bool,
};

export default SoinsEnergetiquesPage;
