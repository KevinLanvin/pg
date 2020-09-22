import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Services from '../../sections/Services';
import Button from '../../Button';

import './notFoundPage.scss';

const NotFoundPage = ({ mobile = false }) => (
  <main className="not-found">
    <Helmet>
      <title>Pauline Gorlier - Page introuvable</title>
      <meta name="title" content="Pauline Gorlier - Page introuvable" />
      <meta property="og:title" content="Pauline Gorlier - Page introuvable" />
      <meta property="twitter:title" content="Pauline Gorlier - Page introuvable" />
    </Helmet>

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
