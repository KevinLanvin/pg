import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './breadcrumbs.scss';

const BreadCrumbs = ({ breadcrumbs }) => (
  <nav className="breadcrumbs">
    {breadcrumbs.map((link, index) => (
      <span key={link.linkLabel} className="breadcrumbs__element">
        <Link to={link.linkTo}>{link.linkLabel}</Link>
        {index < breadcrumbs.length - 1 && <span>></span>}
      </span>
    ))}
  </nav>
);

BreadCrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      linkLabel: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BreadCrumbs;

