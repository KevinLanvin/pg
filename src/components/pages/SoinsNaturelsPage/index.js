import React from 'react';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/soins-naturels.json';

console.log(content);

const SoinsNaturelsPage = () => {
  return (
  <main>
    <ServiceLayout
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
      services={content.Services}
    />
  </main>
);
};

export default SoinsNaturelsPage;
