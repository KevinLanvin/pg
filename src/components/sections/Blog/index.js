import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';

import './Blog.scss';

const Blog = ({ title, articles }) => {
  return (
    <section className="blog">
      <h2 className="center">title</h2>
      <div className="blog__articles">
        {articles.map(article => (
          <Card
            key={article.Title}
            title={article.Title}
            description={article.Description}
            link="#"
            image={`${process.env.REACT_APP_BACK_URL}${article.Background.url}`}
            imageAlt={article.Background.alternativeText}
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
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Link: PropTypes.string,
      Background: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Blog;
