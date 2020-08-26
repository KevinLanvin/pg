import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SoinsNaturels from '../pages/SoinsNaturelsPage';

import '../../styles/index.scss';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/soins-naturels" exact>
            <SoinsNaturels />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
