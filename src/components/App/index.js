import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Description from '../Description';
import Services from '../Services';
import SplittedSection from '../sections/SplittedSection';
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
      <SplittedSection
        title="Une approche globale"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSource="https://picsum.photos/400/600"
        imageAlt="Description"
        isTextOnRight
        roundedImage
      />
      <Services />
      <SplittedSection
        title="Dans quel cas me consulter ?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        linkLabel="Voir la liste des pathologies"
        linkTo="#"
        imageSource="https://picsum.photos/400/600"
        imageAlt="Quand consulter"
        isTextOnRight
        isButtonAlt
      />
      <SplittedSection
        title="Qui suis-je ?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        linkLabel="Voir mon parcours"
        linkTo="#"
        imageSource="https://picsum.photos/400/600"
        imageAlt="Qui suis-je"
        isButtonAlt
        hasFlower
        altColor
      />
      <Temoignages />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
