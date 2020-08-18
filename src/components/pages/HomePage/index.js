import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Banner from '../../Banner';
import Services from '../../Services';
import SplittedSection from '../../sections/SplittedSection';
import Temoignages from '../../Temoignages';
import Blog from '../../sections/Blog';

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState({});
  const homePageQuery = `
query HomePageContent {
  homePage {
    MainTitle {
      title,
      Banner {
        url,
        alternativeText,
      }
    },
    Description {
      Title,
      Paragraph,
      Image {
        url,
        alternativeText,
      }
    },
    ServicesTitle,
    Services {
      title,
      link,
      image {
        url,
        alternativeText,
      },
      Examples {
        Label
      }
    },
    QuandConsulter {
      Title,
      Paragraph,
      Link,
      LinkLabel,
      Image {
        url,
        alternativeText,
      }
    },
    QuiSuisJe {
      Title,
      Paragraph,
      Link,
      LinkLabel,
      Image {
        url,
        alternativeText,
      }
    },
    Temoignages {
      Temoignage,
      Author
    },
    BlogTitle,
    BlogCards {
      Title,
      Description,
      Link,
      Background {
        url,
        alternativeText,
      }
    }
  }
}
  `;

  useEffect( () => {
    axios({
      url: 'http://localhost:1337/graphql',
      method: 'post',
      data: {
        query: homePageQuery
      }
    }).then((response) => {
      setContent(response.data.data.homePage);
      setLoaded(true);
    });
  }, []);

  return (
    <>
      { loaded && <main>
        <Banner
          image={`${process.env.REACT_APP_BACK_URL}${content.MainTitle.Banner.url}`}
          imageAlt={content.MainTitle.Banner.alternativeText}
          title={content.MainTitle.title}
        />
        <SplittedSection
          title={content.Description.Title}
          text={content.Description.Paragraph}
          imageSource={`${process.env.REACT_APP_BACK_URL}${content.Description.Image.url}`}
          imageAlt={content.Description.Image.alternativeText}
          isTextOnRight
          roundedImage
        />
        <Services
          title={content.ServicesTitle}
          services={content.Services}
        />
        <SplittedSection
          title={content.QuandConsulter.Title}
          text={content.QuandConsulter.Paragraph}
          linkLabel={content.QuandConsulter.LinkLabel}
          linkTo="#"
          imageSource={`${process.env.REACT_APP_BACK_URL}${content.QuandConsulter.Image.url}`}
          imageAlt={content.QuandConsulter.Image.alternativeText}
          isTextOnRight
          isButtonAlt
        />
        <SplittedSection
          title={content.QuiSuisJe.Title}
          text={content.QuiSuisJe.Paragraph}
          linkLabel={content.QuiSuisJe.LinkLabel}
          linkTo="#"
          imageSource={`${process.env.REACT_APP_BACK_URL}${content.QuiSuisJe.Image.url}`}
          imageAlt={content.QuiSuisJe.Image.alternativeText}
          isButtonAlt
          hasFlower
          altColor
        />
        <Temoignages temoignages={content.Temoignages} />
        <Blog
          title={content.BlogTitle}
          articles={content.BlogCards}
        />
      </main>}
    </>
  );
};

export default HomePage;
