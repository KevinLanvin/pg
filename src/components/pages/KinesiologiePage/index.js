import React from 'react';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/kinesiologie.json';

const KinesiologiePage = () => (
  <main>
    <ServiceLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
    />
  </main>
);

export default KinesiologiePage;
