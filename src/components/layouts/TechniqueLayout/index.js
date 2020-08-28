import React from 'react';
import PropTypes from 'prop-types';

import Introduction from '../../sections/Introduction';
import SplittedSection from '../../sections/SplittedSection';
import ColumnSection from '../../sections/ColumnSection';
import Services from '../../sections/Services';
import List from '../../sections/List';

const TechniqueLayout = ({
  introduction,
  technique,
  details,
  listSection
}) => (
  <>
    <Introduction
      title={introduction.title}
      paragraph={introduction.paragraph}
      image={introduction.image}
    />
    <SplittedSection
      title={technique.title}
      text={technique.paragraph}
      imageSource={technique.image.url}
      imageAlt={technique.image.alternative}
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
    <List
      title={listSection.title}
      paragraph={listSection.paragraph}
      elements={listSection.list}
    />
    <Services />
  </>
);

TechniqueLayout.propTypes = {
  introduction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
  }),
  techniques: PropTypes.shape({
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
