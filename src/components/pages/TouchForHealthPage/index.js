import React from 'react';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/touch-for-health.json';

const TouchForHealthPage = () => (
  <main>
    <TechniqueLayout
      introduction={content.Introduction}
      technique={content.Technique}
      details={content.Details}
      listSection={content.ListSection}
    />
  </main>
);

export default TouchForHealthPage;
