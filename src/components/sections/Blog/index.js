import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';

import './Blog.scss';

const Blog = ({ title, articles }) => {
  return (
    <section className="blog">
      <h2 className="center">{title}</h2>
      <div className="blog__articles">
        {articles.map(article => (
          <Card
            key={article.title}
            title={article.title}
            description={article.description}
            link={article.linkTo}
            image={article.image.url}
            imageAlt={article.image.alternativeText}
          />
        ))}
      </div>
    </section>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkTo: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Blog;
