import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import News from '../Home/News';
import { ResearchDirectionCard } from '../components';
import { publications } from '../content/publications';
import { researchDirections } from '../content/researchDirections';
import { site } from '../content/site';
import '../Home/Home.css';

const prioritizedDirections = [...researchDirections]
  .filter((direction) => !direction.hidden)
  .sort((first, second) => first.displayOrder - second.displayOrder);

const Lab = () => (
  <main className="home-page lab-page">
    <section className="home-hero" aria-labelledby="lab-title">
      <Container>
        <div className="home-hero__content">
          <h1 id="lab-title">
            <span>{site.labName}</span>
            <span className="home-hero__expansion" aria-label="Research in Security">
              <span aria-hidden="true"> · </span>
              <span className="lab-acronym__mark">R</span>esearch{' '}
              <span className="lab-acronym__mark">i</span>n{' '}
              <span className="lab-acronym__mark">Se</span>curity
            </span>
          </h1>
          <p className="home-hero__mission">
            RiS3 Lab focuses on securing AI-enabled and cyber-physical systems at the boundary between
            software, hardware, and the physical world, with current emphasis on on-device AI security
            and domain-aware system security.
          </p>
          <p className="home-hero__hiring">
            <strong>We are recruiting.</strong> Students interested in systems, security, and AI can
            learn more through the{' '}
            <a href="https://www.cis.fiu.edu/academics/degrees/graduate/doctor-of-philosophy-in-computer-science/">
              FIU PhD program
            </a>.
          </p>
        </div>
      </Container>
    </section>

    <section className="home-section" id="research-directions" aria-labelledby="research-title">
      <Container>
        <div className="home-section__heading">
          <h2 id="research-title">Research</h2>
        </div>
        <div className="research-direction-stack">
          {prioritizedDirections.map((direction) => (
            <ResearchDirectionCard
              direction={direction}
              publications={publications}
              key={direction.id}
            />
          ))}
        </div>
        <div className="home-section__action">
          <Link to="/publication">Browse all publications <span aria-hidden="true">→</span></Link>
        </div>
      </Container>
    </section>

    <News limit={10} />
  </main>
);

export default Lab;
