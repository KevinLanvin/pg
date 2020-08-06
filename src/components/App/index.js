import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Description from '../Description';
import Services from '../Services';
import QuandConsulter from '../QuandConsulter';
import QuiSuisJe from '../QuiSuisJe';
import Temoignages from '../Temoignages';

import '../../styles/index.scss';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Description />
      <Services />
      <QuandConsulter />
      <QuiSuisJe />
      <Temoignages />
    </div>
  );
}

export default App;
