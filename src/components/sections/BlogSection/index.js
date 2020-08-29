import React from 'react';
import CardsSection from '../../sections/CardsSection';

import content from '../../../data/blog.json';

const BlogSection = () => (
  <CardsSection
    title={content.title}
    cards={content.articles}
  />
);

export default BlogSection;
