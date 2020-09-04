import React from 'react';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/arret-tabac.json';

const ArretTabacPage = () => (
  <main>
    <ServiceLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
    />
  </main>
);

export default ArretTabacPage;
