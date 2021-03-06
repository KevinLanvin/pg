import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumbs from '../../BreadCrumbs';
import Introduction from '../../sections/Introduction';
import SplittedSection from '../../sections/SplittedSection';
import Services from '../../sections/Services';
import ListSection from '../../sections/ListSection';
import Disclaimer from '../../sections/DisclaimerSection';

const ServiceLayout = ({
  breadcrumbs,
  introduction,
  techniques,
  listSection,
  mobile = false,
}) => (
  <>
    <BreadCrumbs breadcrumbs={breadcrumbs} />
    <Introduction title={introduction.title} paragraph={introduction.paragraph} image={introduction.image} citation={introduction.citation} />
    { techniques.map((technique, index) => (
      <SplittedSection
        title={technique.title}
        text={technique.paragraph}
        citation={technique.citation}
        imageSource={technique.image.url}
        imageAlt={technique.image.alternativeText}
        isTextOnRight={index % 2 === 0 && !mobile}
        linkTo={technique.linkTo}
        linkLabel={technique.linkLabel}
        key={technique.title}
        isButtonAlt
      />
    ))}
    <ListSection
      title={listSection.title}
      paragraph={listSection.paragraph}
      elements={listSection.list}
    />
    <Services mobile={mobile} />
    <Disclaimer />
  </>
);

ServiceLayout.propTypes = {
  introduction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
  }),
  techniques: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
      linkTo: PropTypes.string,
      linkLabel: PropTypes.string,
    }).isRequired,
  ).isRequired,
  listSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  mobile: PropTypes.bool,
};

export default ServiceLayout;
