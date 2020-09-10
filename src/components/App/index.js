import React, { useEffect, useState } from 'react';
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
import Consultations from '../pages/ConsultationsPage';
import Contact from '../pages/ContactPage';
import QuiSuisJe from '../pages/QuiSuisJePage';
import MentionsLegales from '../pages/MentionsLegalesPage';
import NotFound from '../pages/NotFoundPage';

import '../../styles/index.scss';
import './app.scss';

function App() {
  const [ mobile, setMobile ] = useState(window.innerWidth <= 1150);
  const updateSize = () => {
    setMobile(window.innerWidth <= 1150);
  }
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header mobile={mobile} />
        <div className="App__content">
          <Switch>
            <Route path="/" exact>
              <HomePage mobile={mobile} />
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
            <Route path="/mentions-legales" exact>
              <MentionsLegales />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer mobile={mobile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
