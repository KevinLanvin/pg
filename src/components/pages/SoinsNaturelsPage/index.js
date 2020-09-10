import React from 'react';
import PropTypes from 'prop-types';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/soins-naturels.json';

const SoinsNaturelsPage = ({ mobile = false }) => (
  <main>
    <ServiceLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
      mobile={mobile}
    />
  </main>
);

SoinsNaturelsPage.propTypes= {
  mobile: PropTypes.bool,
};

export default SoinsNaturelsPage;
