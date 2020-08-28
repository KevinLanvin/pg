import React from 'react';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/soins-energetiques.json';

const SoinsEnergetiquesPage = () => (
  <main>
    <TechniqueLayout
      introduction={content.Introduction}
      technique={content.Technique}
      details={content.Details}
      listSection={content.ListSection}
    />
  </main>
);

export default SoinsEnergetiquesPage;