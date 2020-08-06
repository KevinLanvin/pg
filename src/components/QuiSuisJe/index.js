import React from 'react';
import Button from '../Button';
import QuiSuisJeImg from '../../img/description.jpg';
import { ReactComponent as Flower } from '../../icons/flower.svg';

import './QuiSuisJe.scss';

const QuiSuisJe = () => (
  <section className="qui-suis-je">
    <div className="qui-suis-je__grid">
      <div className="qui-suis-je__text">
        <h2>Qui suis-je ?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <Button alt name="Voir mon parcours" link="#" />
      </div>
      <div className="qui-suis-je__img">
        <img src="https://picsum.photos/300/600" alt="Qui suis je" />
      </div>
    </div>
    <Flower className="qui-suis-je__flower" />
  </section>
);

export default QuiSuisJe;
