import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NewsItem } from '../components';
import { news } from '../content/news';
import './Home.css';

const News = ({ limit = 10 }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? news : news.slice(0, limit);
  const hasMore = news.length > limit;

  return (
    <section className="home-section" id="news" aria-labelledby="news-title">
      <Container>
        <div className="home-section__heading">
          <h2 id="news-title">News</h2>
        </div>
        <ul className="home-news-list" id="home-news-list">
          {visibleNews.map((item) => <NewsItem item={item} showType={false} key={item.id} />)}
        </ul>
        {hasMore && (
          <div className="home-section__action">
            <button
              className="home-text-button"
              type="button"
              aria-expanded={showAll}
              aria-controls="home-news-list"
              onClick={() => setShowAll((currentValue) => !currentValue)}
            >
              {showAll ? 'Show recent news only' : 'View all news'}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default News;
