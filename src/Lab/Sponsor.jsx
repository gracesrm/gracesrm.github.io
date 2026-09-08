import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import '../Home/Home.css';

const sponsors = [
  {
    shortName: 'NSF',
    name: 'National Science Foundation (NSF)',
    logo: 'https://www.nsf.gov/themes/custom/nsf_theme/logo-200x200.png',
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
    shortName: 'DHS',
    name: 'Department of Homeland Security (DHS)',
    logo: 'https://www.dhs.gov/themes/custom/dhs_uswds/logo.svg',
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
      <div className="sponsor-mark-row" aria-label="Research sponsors">
        {sponsors.map((sponsor) => (
          <img
            className="sponsor-logo"
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            key={sponsor.shortName}
          />
        ))}
      </div>
      <ul className="sponsored-project-list">
        {sponsors.flatMap((sponsor) => sponsor.projects.map((project) => (
          <li key={project.title}>
            <span className="sponsored-project__source">{sponsor.shortName} · {project.program}</span>
            {project.url ? <a href={project.url}>{project.title}</a> : project.title}
          </li>
        )))}
      </ul>
    </Container>
  </main>
);

export default Sponsor;
