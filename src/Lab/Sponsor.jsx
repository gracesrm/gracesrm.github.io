import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import '../Home/Home.css';

const sponsors = [
  {
    name: 'National Science Foundation (NSF)',
    projects: [
      {
        title: 'Secure Machine Learning Inference in IoT-driven Analytical Scientific Infrastructure',
        program: 'CICI',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2419843',
      },
      {
        title: 'Trustworthy Lifecycle Modeling of CPS using Formal Methods',
        program: 'CITES',
      },
    ],
  },
  {
    name: 'Department of Homeland Security (DHS)',
    projects: [
      {
        title: 'ADvanced education and research for Machine learning-driven critical Infrastructure REsilience (ADMIRE) Center',
        program: 'ADMIRE',
      },
    ],
  },
];

const Sponsor = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Sponsor"
        description="RiS3 Lab research has been supported by NSF and DHS."
      />
      <div className="lab-sponsor-list">
        {sponsors.map((sponsor) => (
          <section className="content-card lab-sponsor" key={sponsor.name}>
            <h2>{sponsor.name}</h2>
            <ul>
              {sponsor.projects.map((project) => (
                <li key={project.title}>
                  {project.url ? <a href={project.url}>{project.title}</a> : project.title}
                  <span>{project.program}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  </main>
);

export default Sponsor;
