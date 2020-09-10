import React from 'react';
import PropTypes from 'prop-types';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/kinesiologie.json';

const KinesiologiePage = ({ mobile = false }) => (
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

KinesiologiePage.propTypes= {
  mobile: PropTypes.bool,
};

export default KinesiologiePage;
