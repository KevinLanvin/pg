import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Description from '../Description';
import Services from '../Services';
import QuandConsulter from '../QuandConsulter';
import QuiSuisJe from '../QuiSuisJe';
import Temoignages from '../Temoignages';
import Blog from '../sections/Blog';
import Footer from '../Footer';

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
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
