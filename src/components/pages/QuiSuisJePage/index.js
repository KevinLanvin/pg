import React from 'react';
import Introduction from '../../sections/Introduction';
import Temoignages from '../../sections/Temoignages';
import ColumnSection from '../../sections/ColumnSection';
import SplittedSection from '../../sections/SplittedSection';
import FormationsSection from '../../sections/FormationsSection';
import Disclaimer from '../../sections/DisclaimerSection';

import content from '../../../data/qui-suis-je.json';

const QuiSuisJePage = () => (
  <main>
    <Introduction
      title={content.Introduction.title}
      paragraph={content.Introduction.paragraph}
      image={content.Introduction.image}
    />
    <SplittedSection
      title={content.Presentation.title}
      text={content.Presentation.paragraph}
      imageSource={content.Presentation.image.url}
      imageAlt={content.Presentation.image.alternative}
      linkLabel={content.Presentation.linkLabel}
      linkTo={content.Presentation.linkTo}
      isButtonAlt
      hasFlower
      altColor
    />
    <FormationsSection />
    <ColumnSection
      title={content.Details.title}
      leftColumn={content.Details.leftColumn}
      rightColumn={content.Details.rightColumn}
      linkTo={content.Details.linkTo}
      linkLabel={content.Details.linkLabel}
    />
    <Temoignages />
    <Disclaimer />
  </main>
);

export default QuiSuisJePage;
