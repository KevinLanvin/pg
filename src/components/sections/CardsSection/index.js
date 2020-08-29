import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';

import './cardsSection.scss';

const CardsSection = ({ title, cards }) => {
  return (
    <section className="cards-section">
      <h2 className="center">{title}</h2>
      <div className="cards__cards">
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            linkTo={card.linkTo}
            image={card.image.url}
            imageAlt={card.image.alternativeText}
            price={card.price}
            linkLabel={card.linkLabel}
          />
        ))}
      </div>
    </section>
  );
};

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkTo: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default CardsSection;
