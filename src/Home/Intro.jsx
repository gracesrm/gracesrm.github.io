import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { people } from '../content/people';
import { site } from '../content/site';
import './Home.css';

const profile = people.find(({ id }) => id === 'ruimin-sun');

const socialProfiles = [
  { label: 'LinkedIn', url: '', icon: 'linkedin' },
  { label: 'X', url: '', icon: 'x' },
  { label: 'GitHub', url: '', icon: 'github' },
];

const SocialIcon = ({ icon }) => {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.3 7.4A2.1 2.1 0 1 0 5.3 3a2.1 2.1 0 0 0 0 4.3ZM3.5 21h3.6V9.5H3.5V21Zm5.8 0h3.6v-5.7c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1V21h3.6v-6.3c0-3.1-.7-5.5-4.3-5.5-1.7 0-2.9 1-3.4 1.9h-.1V9.5H9.3V21Z" />
      </svg>
    );
  }

  if (icon === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.2 2.3h3.3l-7.2 8.2 8.5 11.2h-6.7L11 14.9l-6 6.8H1.7l7.7-8.8L1.2 2.3h6.9l4.7 6.2 5.4-6.2Zm-1.1 17.5h1.8L7.1 4.1H5.2l11.9 15.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.6 8.5c-.1-.3-.5-1.3.1-2.8 0 0 .8-.3 2.8 1.1a9.6 9.6 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
};

const Intro = () => (
  <section className="personal-intro" id="home" aria-labelledby="personal-name">
    <Container>
      <Row className="personal-intro__identity">
        <Col md={4} lg={3}>
          <img className="personal-intro__photo" src={profile.photo} alt="Portrait of Ruimin Sun" />
        </Col>
        <Col md={8} lg={9}>
          <h1 id="personal-name">Ruimin Sun</h1>
          <div className="personal-intro__position">
            <strong>Assistant Professor</strong>
            <span>{site.school}</span>
            <span>{site.institution}</span>
          </div>
          <dl className="personal-intro__contact">
            <div><dt>Email</dt><dd>rsun AT fiu dot edu</dd></div>
            <div><dt>Office</dt><dd>CASE 360</dd></div>
            <div className="personal-intro__address">
              <dt>Address</dt><dd>11200 SW 8th Street, Miami, FL, USA 33199</dd>
            </div>
          </dl>
          <nav className="personal-intro__socials" aria-label="Social profiles">
            {socialProfiles.map(({ label, url, icon }) => (
              <a
                className={`personal-intro__social-link personal-intro__social-link--${icon}`}
                href={url}
                aria-label={`${label} profile link coming soon`}
                title={`${label} link coming soon`}
                onClick={(event) => !url && event.preventDefault()}
                key={label}
              >
                <SocialIcon icon={icon} />
              </a>
            ))}
          </nav>
        </Col>
      </Row>

      <div className="personal-intro__bio">
        <p>
          <strong className="personal-intro__bio-label">Brief Biography.</strong>{' '}
          Ruimin Sun is an Assistant Professor in the{' '}
          <a href={site.schoolUrl}>{site.school}</a> at{' '}
          <a href={site.institutionUrl}>{site.institution}</a> (FIU). Before joining FIU in 2022, she
          was a Postdoctoral Research Associate at the <a href="https://https://seclab.nu/">SecLab</a> in the Khoury College of Computer Sciences at{' '}
          <a href="https://www.northeastern.edu/">Northeastern University</a>. She received her Ph.D.
          in Electrical and Computer Engineering from the{' '}
          <a href="https://www.ufl.edu/">University of Florida</a> in 2019, advised by{' '}
          <a href="https://danielaseabraoliveira.com/">Prof. Daniela Oliveira</a>.
        </p>
        <p>
          Ruimin Sun's research focuses on <strong>system and AI security</strong>, with a particular emphasis
          on securing on-device AI. Her work investigates security and privacy threats to AI models,
          data, and execution on edge and embedded devices and develops practical defenses against
          these threats. She also works on cyber-physical and domain-specific security, including
          the security of embedded and industrial control systems, with emerging interests in
          healthcare and advanced manufacturing. Ruimin was the founding chair for the Workshop on Re-design Industrial Control Systems with Security (<a href="https://ricssworkshop.github.io/">RICSS</a>).
          Her research has been supported by the{' '}
          <span className="personal-intro__funder">National Science Foundation</span> and the{' '}
          <span className="personal-intro__funder">U.S. Department of Homeland Security</span>.
        </p>
        <nav className="personal-section-nav" aria-label="Personal page sections">
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="#service">Service</a>
        </nav>
      </div>
    </Container>
  </section>
);

export default Intro;
