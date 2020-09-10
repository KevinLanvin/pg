import React from 'react';
import PropTypes from 'prop-types';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/arret-tabac.json';

const ArretTabacPage = ({ mobile = false }) => (
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

ArretTabacPage.propTypes= {
  mobile: PropTypes.bool,
};

export default ArretTabacPage;
