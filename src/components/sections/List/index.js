import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Flower } from '../../../icons/flower-violet.svg';
import './list.scss';

const ListSection = ({
  title,
  paragraph,
  elements
}) => (
  <section className="list-section">
    <div className="list-section__text">
      <h2 className="list-section__title">{title}</h2>
      <p className="list-section__paragraph">{paragraph}</p>
    </div>
    <div className="list-section__list">
      <Flower className="list-section__flower" />
      <ul className="list-section__elements">
        {elements.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  </section>
);

ListSection.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default ListSection;
