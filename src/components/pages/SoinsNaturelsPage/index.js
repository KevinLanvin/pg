import React from 'react';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/soins-naturels.json';

const SoinsNaturelsPage = () => (
  <main>
    <ServiceLayout
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
    />
  </main>
);

export default SoinsNaturelsPage;