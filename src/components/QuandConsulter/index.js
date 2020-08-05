import React from 'react';
import QuandConsulterImg from '../../img/quand-consulter.jpg';
import Button from '../Button';

import './QuandConsulter.scss';

const QuandConsulter = () => (
  <section className="quand-consulter">
    <img src={QuandConsulterImg} alt="Quand consulter" />
    <div className="quand-consulter__text">
      <h2>Dans quel cas me consulter ?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      <Button name="Voir la liste des pathologies" link="#"></Button>
    </div>
  </section>
);

export default QuandConsulter;
