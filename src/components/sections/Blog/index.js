import React from 'react';
import Card from '../../Card';

import './Blog.scss';

const Blog = () => {
  const description = 'Eo adducta re per lsauriam, rege Persarum bellis finitimis inligato repellenteque.';
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
