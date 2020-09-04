import React from 'react';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/one-brain.json';

const OneBrainPage = () => (
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

export default OneBrainPage;
