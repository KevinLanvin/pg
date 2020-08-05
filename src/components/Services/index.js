import React from 'react';
import Tmp from '../../img/description.jpg';

import './Services.scss';

const Services = () => (
  <section className="services">
    <h2 className="services__title center">Mes services</h2>
    <div className="services__grid">
      <div className="services__service">
        <div className="service__image">
          <img src={Tmp} alt="Soins Naturels" />
          <div className="service__title">
            <h4 className="white center">Soins Naturels</h4>
          </div>
          <div className="overlay" />
        </div>
        <div className="service__text">
          <h3>Soins Naturels</h3>
          <ul>
            <li>Ventouses</li>
            <li>Moxibustion</li>
            <li>Guasha</li>
            <li>Auriculo-thérapie</li>
          </ul>
        </div>
      </div>
      <div className="services__service">
        <div className="service__image">
          <img src={Tmp} alt="Soins Energetiques" />
          <div className="service__title">
          <h4 className="white center">Soins Énergétiques</h4>
          </div>
          <div className="overlay" />
        </div>
        <div className="service__text">
          <h3>Soins Énergétiques</h3>
          <ul>
            <li>
              Reiki
            </li>
          </ul>
        </div>
      </div>
      <div className="services__service">
        <div className="service__image">
          <img src={Tmp} alt="Kinesiologie" />
          <div className="service__title">
          <h4 className="white center">Kinésiologie</h4>
          </div>
          <div className="overlay" />
        </div>
        <div className="service__text">
          <h3>Kinésiologie</h3>
          <ul>
            <li>Touch for health</li>
            <li>One brain</li>
          </ul>
        </div>
      </div>
      <div className="services__service">
        <div className="service__image">
          <img src={Tmp} alt="Arret du Tabac" />
          <div className="service__title">
          <h4 className="white center">Arrêt du Tabac</h4>
          </div>
          <div className="overlay" />
        </div>
        <div className="service__text">
          <h3>Spécial Arrêt du Tabac</h3>
          <ul>
            <li>Hypnose</li>
            <li>Auriculo-thérapie</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
