import React, {useRef} from 'react';

import Banner from '../../sections/Banner';
import Services from '../../sections/Services';
import SplittedSection from '../../sections/SplittedSection';
import Temoignages from '../../sections/Temoignages';

import content from '../../../data/homepage.json';

const HomePage = () => {
  const descriptionEl = useRef('description');
  return (
    <main>
      <Banner
        image={content.MainTitle.Banner.url}
        imageAlt={content.MainTitle.Banner.alternativeText}
        title={content.MainTitle.title}
        onClick={() => window.scrollTo(0, descriptionEl.current.offsetTop - 114)}
      />
      <div ref={descriptionEl}>
      <SplittedSection
        title={content.Description.title}
        text={content.Description.paragraph}
        citation={content.Description.citation}
        imageSource={content.Description.image.url}
        imageAlt={content.Description.image.alternativeText}
        isTextOnRight
        roundedImage
      />
      </div>
      <Services
        title={content.Services.title}
        services={content.Services.services}
      />
      <SplittedSection
        title={content.QuandConsulter.title}
        text={content.QuandConsulter.paragraph}
        linkLabel={content.QuandConsulter.linkLabel}
        linkTo={content.QuandConsulter.linkTo}
        imageSource={content.QuandConsulter.image.url}
        imageAlt={content.QuandConsulter.image.alternativeText}
        isTextOnRight
        isButtonAlt
      />
      <SplittedSection
        title={content.QuiSuisJe.title}
        text={content.QuiSuisJe.paragraph}
        linkLabel={content.QuiSuisJe.linkLabel}
        linkTo={content.QuiSuisJe.linkTo}
        imageSource={content.QuiSuisJe.image.url}
        imageAlt={content.QuiSuisJe.image.alternativeText}
        isButtonAlt
        hasFlower
        altColor
      />
      <Temoignages />
    </main>
  );
};

export default HomePage;
