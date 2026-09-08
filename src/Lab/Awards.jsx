import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import { NewsItem } from '../components';
import { news } from '../content/news';
import '../Home/Home.css';

const labAwards = news.filter(({ type }) => type === 'award');

const Awards = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Awards"
        description="Selected recognition earned by RiS3 Lab members and research projects."
      />
      <ul className="home-news-list">
        {labAwards.map((item) => <NewsItem item={item} showType={false} key={item.id} />)}
      </ul>
    </Container>
  </main>
);

export default Awards;
