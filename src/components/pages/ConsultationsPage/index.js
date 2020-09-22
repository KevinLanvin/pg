import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import CardsSection from '../../sections/CardsSection';
import ColumnSection from '../../sections/ColumnSection';
import ListSection from '../../sections/ListSection';
import Services from '../../sections/Services';

import content from '../../../data/consultations.json';

const ConsultationsPage = ({ mobile = false }) => (
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

    <BreadCrumbs breadcrumbs={content.Breadcrumbs} />
    <Introduction
      title={content.Introduction.title}
      paragraph={content.Introduction.paragraph}
      image={content.Introduction.image}
    />
    <ListSection
      title={content.ListSection.title}
      paragraph={content.ListSection.paragraph}
      elements={content.ListSection.list}
    />
    <CardsSection
      title={content.Prices.title}
      cards={content.Prices.cards}
    />
    <ColumnSection
      title={content.Details.title}
      leftColumn={content.Details.leftColumn}
      rightColumn={content.Details.rightColumn}
      linkTo={content.Details.linkTo}
      linkLabel={content.Details.linkLabel}
    />
    <Services mobile={mobile} />
  </main>
);

ConsultationsPage.propTypes= {
  mobile: PropTypes.bool,
};

export default ConsultationsPage;
