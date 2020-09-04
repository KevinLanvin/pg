import React from 'react';

import Services from '../../sections/Services';
import Button from '../../Button';

import './notFoundPage.scss';

const NotFoundPage = () => (
  <main className="not-found">
    <h1>Page introuvable</h1>
    <p className="not-found__message">La page que vous tentez de consulter n'existe pas ou est introuvable</p>
    <Button
      name="Retour à l'accueil"
      link="/"
      alt
    />
    <Services />
  </main>
);

export default NotFoundPage;
