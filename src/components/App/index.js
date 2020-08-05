import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Description from '../Description';
import Services from '../Services';

import '../../styles/index.scss';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Description />
      <Services />
    </div>
  );
}

export default App;
