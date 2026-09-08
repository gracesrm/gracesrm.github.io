import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import '../Home/Home.css';

const sponsors = [
  {
    shortName: 'NSF',
    name: 'National Science Foundation (NSF)',
    logo: 'https://www.nsf.gov/themes/custom/nsf_theme/logo-200x200.png',
  },
  {
    shortName: 'DHS',
    name: 'Department of Homeland Security (DHS)',
    logo: 'https://www.dhs.gov/themes/custom/dhs_uswds/logo.svg',
  },
  {
    shortName: 'Illinois',
    name: 'University of Illinois Urbana-Champaign',
    logo: 'https://cdn.brand.illinois.edu/logos/block-i.svg',
  },
];

const projects = [
  {
    startDate: '2026-10',
    role: 'Senior Personnel',
    sponsor: 'NSF REU SITE: ASSET',
    title: 'ASSET: Advanced Secured Sensor Enabling Technologies',
    amount: '$465K',
    period: 'October 2026 - September 2029',
    investigators: 'Principal Investigator: Niki Pissinou.',
  },
  {
    startDate: '2024-08',
    role: 'Principal Investigator',
    sponsor: 'NSF CICI',
    title: 'UCSS: Secure Machine Learning Inference in IoT-driven Analytical Scientific Infrastructure',
    amount: '$600K',
    period: 'August 2024 - July 2027',
    investigators: 'Co-Principal Investigators: Jason Liu (FIU) and Yuede Ji (UTA).',
    url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2419843',
  },
  {
    startDate: '2023-07',
    role: 'Principal Investigator',
    sponsor: 'NSF/UIUC IUCRC/CITES',
    title: 'Framework for Trustworthy Lifecycle Modeling of Cyber Physical Systems using Formal Methods',
    amount: '$75K',
    period: 'July 2023 - 2024',
    investigators: 'Co-Principal Investigator: Xueping Liang.',
  },
  {
    startDate: '2023-07',
    role: 'Co-Principal Investigator',
    sponsor: 'Department of Homeland Security',
    title: 'ADvanced education and research for Machine learning-driven critical Infrastructure REsilience (ADMIRE) Center',
    amount: '$1,000K',
    period: 'July 2023 - July 2028; completed in April 2024',
    investigators: 'Principal Investigator: Mohammadhadi Amini. Co-Principal Investigators: Gregory Reis, Leonardo Bobadilla, Stephanie Lunn, Cuong Nguyen, and Jason Liu.',
  },
  {
    startDate: '2023-03',
    role: 'Senior Personnel',
    sponsor: 'NSF REU SITE: ASSET',
    title: 'ASSET: Advanced Secured Sensor Enabling Technologies',
    amount: '$425K',
    period: 'March 2023 - February 2027',
    investigators: 'Principal Investigator: Niki Pissinou.',
  },
];

const projectsNewestFirst = [...projects]
  .sort((first, second) => second.startDate.localeCompare(first.startDate));

const Sponsor = () => (
  <main className="lab-subpage sponsor-page">
    <Container>
      <PageHeader
        title="Sponsor"
        description="RiS3 Lab gratefully acknowledges the support of the following sponsors and projects."
      />
      <div className="sponsor-mark-row" aria-label="Research sponsors">
        {sponsors.map((sponsor) => (
          <img
            className={`sponsor-logo${sponsor.shortName === 'Illinois' ? ' sponsor-logo--illinois' : ''}`}
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            key={sponsor.shortName}
          />
        ))}
      </div>
      <ul className="sponsored-project-list">
        {projectsNewestFirst.map((project) => (
          <li key={`${project.startDate}-${project.amount}-${project.title}`}>
            <div>
              <span className="sponsored-project__role">{project.role}.</span>{' '}
              <span className="sponsored-project__source">{project.sponsor}.</span>
              {' '}
              <span className="sponsored-project__title">
                {project.url ? <a href={project.url}>“{project.title}”</a> : <>“{project.title}”</>}.
              </span>
            </div>
            <div className="sponsored-project__details">
              ({project.amount}) ({project.period}).{' '}
              <span className="sponsored-project__investigators">{project.investigators}</span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </main>
);

export default Sponsor;
