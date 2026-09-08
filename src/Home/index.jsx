import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Intro from './Intro';
import Service from '../Service';
import Teaching from '../Teaching';
import { researchDirections } from '../content/researchDirections';
import './Home.css';

const prioritizedDirections = [...researchDirections]
  .filter((direction) => !direction.hidden)
  .sort((first, second) => first.displayOrder - second.displayOrder);

const Home = () => (
  <main className="home-page personal-home">
    <Intro />

    <section className="personal-section" id="research" aria-labelledby="personal-research-title">
      <Container>
        <div className="personal-section__heading">
          <h2 id="personal-research-title">Research</h2>
        </div>
        <div className="personal-direction-list">
          {prioritizedDirections.map((direction) => (
            <div className="personal-direction-list__item" key={direction.id}>
              <strong>{direction.title}</strong>
              <span>{direction.summary}</span>
            </div>
          ))}
        </div>
        <div className="personal-section__action">
          <Link className="home-text-button" to="/lab">
            Explore research at RiS3 Lab <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>

    <section className="personal-section" id="teaching" aria-labelledby="personal-teaching-title">
      <Container>
        <div className="personal-section__heading">
          <h2 id="personal-teaching-title">Teaching</h2>
        </div>
        <Teaching embedded />
      </Container>
    </section>

    <section className="personal-section" id="service" aria-labelledby="personal-service-title">
      <Container>
        <div className="personal-section__heading">
          <h2 id="personal-service-title">Service</h2>
        </div>
        <Service embedded />
      </Container>
    </section>
  </main>
);

export default Home;
