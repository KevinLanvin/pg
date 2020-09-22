import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import TechniqueLayout from '../../layouts/TechniqueLayout';
import content from '../../../data/soins-energetiques.json';

const SoinsEnergetiquesPage = ({ mobile = false }) => (
  <main>
    <Helmet>
      <title>{content.Head.title}</title>
      <meta name="title" content={content.Head.title} />
      <meta name="description" content={content.Head.description} />
      <meta property="og:url" content={content.Head.url} />
      <meta property="og:title" content={content.Head.title} />
      <meta property="og:description" content={content.Head.description} />
      <meta property="og:image" content={content.Head.image} />
      <meta property="twitter:url" content={content.Head.url} />
      <meta property="twitter:title" content={content.Head.title} />
      <meta property="twitter:description" content={content.Head.description} />
      <meta property="twitter:image" content={content.Head.image} />
    </Helmet>

    <TechniqueLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      technique={content.Technique}
      details={content.Details}
      listSection={content.ListSection}
      mobile={mobile}
    />
  </main>
);

SoinsEnergetiquesPage.propTypes= {
  mobile: PropTypes.bool,
};

export default SoinsEnergetiquesPage;
