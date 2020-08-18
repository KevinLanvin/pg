import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import HomePage from '../pages/HomePage';

import '../../styles/index.scss';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
