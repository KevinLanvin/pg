import React from 'react';

import Banner from '../../sections/Banner';
import Services from '../../sections/Services';
import SplittedSection from '../../sections/SplittedSection';
import Temoignages from '../../sections/Temoignages';
import Blog from '../../sections/Blog';

import content from '../../../data/homepage.json';

const HomePage = () => (
  <main>
    <Banner
      image={content.MainTitle.Banner.url}
      imageAlt={content.MainTitle.Banner.alternativeText}
      title={content.MainTitle.title}
    />
    <SplittedSection
      title={content.Description.title}
      text={content.Description.paragraph}
      imageSource={content.Description.image.url}
      imageAlt={content.Description.image.alternativeText}
      isTextOnRight
      roundedImage
    />
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
    <Temoignages
      title={content.Temoignages.title}
      testimonials={content.Temoignages.testimonials}
    />
    <Blog
      title={content.Blog.title}
      articles={content.Blog.articles}
    />
  </main>
);

export default HomePage;
