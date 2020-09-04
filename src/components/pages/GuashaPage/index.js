import React from 'react';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/guasha.json';

const GuashaPage = () => (
  <main>
    <TechniqueLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      technique={content.Technique}
      details={content.Details}
      listSection={content.ListSection}
    />
  </main>
);

export default GuashaPage;
