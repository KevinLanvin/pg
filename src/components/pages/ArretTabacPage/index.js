import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ServiceLayout from '../../layouts/ServiceLayout';
import content from '../../../data/arret-tabac.json';

const ArretTabacPage = ({ mobile = false }) => (
  <main>
    <Helmet>
      <title>{content.Head.title}</title>
      <meta name="title" content={content.Head.title} />
      <meta description={content.Head.description} />
      <meta property="og:url" content={content.Head.url} />
      <meta property="og:title" content={content.Head.title} />
      <meta property="og:description" content={content.Head.description} />
      <meta property="og:image" content={content.Head.image} />
      <meta property="twitter:url" content={content.Head.url} />
      <meta property="twitter:title" content={content.Head.title} />
      <meta property="twitter:description" content={content.Head.description} />
      <meta property="twitter:image" content={content.Head.image} />
    </Helmet>

    <ServiceLayout
      breadcrumbs={content.Breadcrumbs}
      introduction={content.Introduction}
      techniques={content.Techniques}
      listSection={content.ListSection}
      mobile={mobile}
    />
  </main>
);

ArretTabacPage.propTypes= {
  mobile: PropTypes.bool,
};

export default ArretTabacPage;
