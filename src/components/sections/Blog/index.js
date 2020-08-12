import React from 'react';
import Card from '../../Card';

import './Blog.scss';

const Blog = () => {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <section className="blog">
      <h2 className="center">Retrouvez les derniers articles</h2>
      <div className="blog__articles">
        <Card title="Une approche globale" description={description} link="#" alt="Voir plus" image="https://picsum.photos/300/303" />
        <Card title="Une approche globale" description={description} link="#" alt="Voir plus" image="https://picsum.photos/300/302" />
        <Card title="Une approche globale" description={description} link="#" alt="Voir plus" image="https://picsum.photos/300/301" />
      </div>
    </section>
  );
};

export default Blog;
