import React from 'react';
import DescriptionPicture from '../../img/description.jpg';

import './Description.scss';

const Description = () => (
  <section className="description">
    <div className="description__picture">
      <img src={DescriptionPicture} alt="Zen tower" />
    </div>
    <div className="description__text">
      <h2>Une approche globale</h2>
      <p>Je vous propose différents types de soins : naturels, énergétiques ou encore de la kinésiologie, adaptés aux adultes ainsi qu'aux enfants. Mes soins ont pour but d'apporter une aide à différents niveaux : aussi bien physique, émotionnel et énergétique.</p>
    </div>
  </section>
);

export default Description;
