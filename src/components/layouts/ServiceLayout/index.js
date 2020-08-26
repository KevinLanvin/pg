import React from 'react';
import PropTypes from 'prop-types';

import Introduction from '../../sections/Introduction';
import SplittedSection from '../../sections/SplittedSection';
import Services from '../../sections/Services';
import List from '../../sections/List';

const ServiceLayout = ({
  introduction,
  techniques,
  listSection,
  services
}) => (
  <>
    <Introduction title={introduction.title} paragraph={introduction.paragraph} />
    { techniques.map((technique, index) => (
      <SplittedSection
        title={technique.title}
        text={technique.paragraph}
        imageSource={technique.image.url}
        imageAlt={technique.image.alternative}
        isTextOnRight={index % 2 === 0}
        key={technique.title}
      />
    ))}
    <List
      title={listSection.title}
      paragraph={listSection.paragraph}
      elements={listSection.list}
    />
    <Services
      title={services.title}
      services={services.services}
    />
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
  services: PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alternativeText: PropTypes.string.isRequired,
        }).isRequired,
        examples: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ServiceLayout;
