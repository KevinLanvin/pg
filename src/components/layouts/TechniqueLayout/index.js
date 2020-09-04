import React from 'react';
import PropTypes from 'prop-types';

import Introduction from '../../sections/Introduction';
import SplittedSection from '../../sections/SplittedSection';
import ColumnSection from '../../sections/ColumnSection';
import Services from '../../sections/Services';
import ListSection from '../../sections/ListSection';
import Disclaimer from '../../sections/DisclaimerSection';

const TechniqueLayout = ({
  introduction,
  technique,
  details,
  listSection
}) => (
  <>
    <Introduction
      {...introduction}
    />
    <SplittedSection
      title={technique.title}
      text={technique.paragraph}
      citation={technique.citation}
      imageSource={technique.image.url}
      imageAlt={technique.image.alternativeText}
      key={technique.title}
      linkLabel={technique.linkLabel}
      linkTo={technique.linkTo}
      isButtonAlt
    />
    <ColumnSection
      title={details.title}
      leftColumn={details.leftColumn}
      rightColumn={details.rightColumn}
      linkTo={details.linkTo}
      linkLabel={details.linkLabel}
    />
    <ListSection
      title={listSection.title}
      paragraph={listSection.paragraph}
      elements={listSection.list}
    />
    <Services />
    <Disclaimer />
  </>
);

TechniqueLayout.propTypes = {
  introduction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
  }),
  technique: PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
      linkTo: PropTypes.string,
      linkLabel: PropTypes.string,
    }).isRequired,
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    leftColumn: PropTypes.string.isRequired,
    rightColumn: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    linkLabel: PropTypes.string.isRequired,
  }).isRequired,
  listSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TechniqueLayout;
