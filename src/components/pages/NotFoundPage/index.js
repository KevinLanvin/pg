import React from 'react';
import PropTypes from 'prop-types';

import Services from '../../sections/Services';
import Button from '../../Button';

import './notFoundPage.scss';

const NotFoundPage = ({ mobile = false }) => (
  <main className="not-found">
    <h1>Page introuvable</h1>
    <p className="not-found__message">La page que vous tentez de consulter n'existe pas ou est introuvable</p>
    <Button
      name="Retour à l'accueil"
      link="/"
      alt
    />
    <Services mobile={mobile} />
  </main>
);

NotFoundPage.propTypes= {
  mobile: PropTypes.bool,
};

export default NotFoundPage;
