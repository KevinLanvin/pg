import React, {useEffect, useState} from 'react';
import axios from 'axios';

const QuiSuisJePage = () => {
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState({});

  return (
    <>
      { loaded && <main>
        <Breadcrumbs />
        <IntroductionSection />
        <SplittedSection />
        <FormationsSection />
        <SplittedTextSection />
        <Temoignages />
        <Disclaimer />
      </main>
      }
    </>
  )
}
