import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import { PublicationItem } from '../components';
import { publications } from '../content/publications';
import '../Home/Home.css';

const years = [...new Set(publications.map(({ year }) => year))]
  .sort((first, second) => second - first);

const Publication = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Publication"
        description="Peer-reviewed publications and research artifacts from RiS3 Lab."
      />
      <div className="lab-publication-list">
        {years.map((year) => (
          <section className="lab-subpage__section" aria-labelledby={`publications-${year}`} key={year}>
            <h2 id={`publications-${year}`}>{year}</h2>
            {publications
              .filter((publication) => publication.year === year)
              .map((publication) => <PublicationItem publication={publication} key={publication.id} />)}
          </section>
        ))}
      </div>
    </Container>
  </main>
);

export default Publication;
