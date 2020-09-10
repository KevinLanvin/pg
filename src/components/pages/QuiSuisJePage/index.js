import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import Temoignages from '../../sections/Temoignages';
import ColumnSection from '../../sections/ColumnSection';
import SplittedSection from '../../sections/SplittedSection';
import FormationsSection from '../../sections/FormationsSection';
import Disclaimer from '../../sections/DisclaimerSection';

import content from '../../../data/qui-suis-je.json';

const QuiSuisJePage = ({ mobile = false }) => (
  <main>
    <BreadCrumbs breadcrumbs={content.Breadcrumbs} />
    <Introduction
      title={content.Introduction.title}
      paragraph={content.Introduction.paragraph}
      image={content.Introduction.image}
    />
    <SplittedSection
      title={content.Presentation.title}
      text={content.Presentation.paragraph}
      imageSource={content.Presentation.image.url}
      imageAlt={content.Presentation.image.alternativeText}
      linkLabel={content.Presentation.linkLabel}
      linkTo={content.Presentation.linkTo}
      isButtonAlt
      hasFlower
      altColor
    />
    <FormationsSection
      title={content.Formations.title}
      linkTo={content.Formations.linkTo}
      linkLabel={content.Formations.linkLabel}
      formations={content.Formations.formations}
    />
    <ColumnSection
      title={content.Details.title}
      leftColumn={content.Details.leftColumn}
      rightColumn={content.Details.rightColumn}
      linkTo={content.Details.linkTo}
      linkLabel={content.Details.linkLabel}
    />
    <Temoignages mobile={mobile} />
    <Disclaimer />
  </main>
);

QuiSuisJePage.propTypes= {
  mobile: PropTypes.bool,
};

export default QuiSuisJePage;
