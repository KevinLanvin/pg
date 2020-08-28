import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import './columnSection.scss'

const ColumnSection = ({
  title,
  leftColumn,
  rightColumn,
  linkTo,
  linkLabel,
}) => (
  <section class="column-section">
    <h2 className="center">{title}</h2>
    <div className="column-section__text">
      <p>{leftColumn}</p>
      <div>
        <p>{rightColumn}</p>
      </div>
    </div>
    <div className="column-section__button">
      <Button name={linkLabel} link={linkTo} alt />
    </div>
  </section>
);

ColumnSection.propTypes = {
  title: PropTypes.string.isRequired,
  leftColumn: PropTypes.string.isRequired,
  rightColumn: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired
};

export default ColumnSection;
