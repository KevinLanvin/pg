import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

import HomePage from '../pages/HomePage';
import SoinsNaturels from '../pages/SoinsNaturelsPage';
import SoinsEnergetiques from '../pages/SoinsEnergetiquesPage';
import Kinesiologie from '../pages/KinesiologiePage';
import ArretTabac from '../pages/ArretTabacPage';
import Ventouses from '../pages/VentousesPage';
import Moxibustion from '../pages/MoxibustionPage';
import Guasha from '../pages/GuashaPage';
import AuriculoTherapie from '../pages/AuriculoTherapiePage';
import OneBrain from '../pages/OneBrainPage';
import TouchForHealth from '../pages/TouchForHealthPage';
import Consultations from '../pages/ConsultationsPage';
import Contact from '../pages/ContactPage';
import QuiSuisJe from '../pages/QuiSuisJePage';

import '../../styles/index.scss';
import './app.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/soins-naturels" exact>
            <SoinsNaturels />
          </Route>
          <Route path="/kinesiologie" exact>
            <Kinesiologie />
          </Route>
          <Route path="/arret-tabac" exact>
            <ArretTabac />
          </Route>
          <Route path="/soins-energetiques" exact>
            <SoinsEnergetiques />
          </Route>
          <Route path="/moxibustion" exact>
            <Moxibustion />
          </Route>
          <Route path="/guasha" exact>
            <Guasha />
          </Route>
          <Route path="/auriculo-therapie" exact>
            <AuriculoTherapie />
          </Route>
          <Route path="/one-brain" exact>
            <OneBrain />
          </Route>
          <Route path="/touch-for-health" exact>
            <TouchForHealth />
          </Route>
          <Route path="/ventouses" exact>
            <Ventouses />
          </Route>
          <Route path="/consultations" exact>
            <Consultations />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/qui-suis-je" exact>
            <QuiSuisJe />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
