import React from 'react';
import Introduction from '../../sections/Introduction';
import CardsSection from '../../sections/CardsSection';
import ColumnSection from '../../sections/ColumnSection';
import ListSection from '../../sections/ListSection';
import Services from '../../sections/Services';

import content from '../../../data/consultations.json';

const ConsultationsPage = () => (
  <main>
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
    <Services />
  </main>
);

export default ConsultationsPage;
