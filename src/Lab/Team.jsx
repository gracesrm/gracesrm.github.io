import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PageHeader from './PageHeader';
import { PersonCard } from '../components';
import { people } from '../content/people';
import '../Home/Home.css';

const byDisplayOrder = (first, second) => (first.displayOrder || 0) - (second.displayOrder || 0);
const faculty = people.filter(({ status }) => status === 'faculty').sort(byDisplayOrder);
const currentMembers = people.filter(({ status }) => status === 'current').sort(byDisplayOrder);
const alumni = people.filter(({ status }) => status === 'alumni').sort(byDisplayOrder);

const MemberGrid = ({ members }) => (
  <Row className="lab-member-grid">
    {members.map((person) => (
      <Col md={6} lg={4} className="lab-member-grid__column" key={person.id}>
        <PersonCard person={person} />
      </Col>
    ))}
  </Row>
);

const Team = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Team"
        description="Researchers working across systems, security, artificial intelligence, and application domains."
      />
      <section className="lab-subpage__section" aria-labelledby="faculty-heading">
        <h2 id="faculty-heading">Faculty Director</h2>
        <MemberGrid members={faculty} />
      </section>
      <section className="lab-subpage__section" aria-labelledby="current-members-heading">
        <h2 id="current-members-heading">Current Members</h2>
        <MemberGrid members={currentMembers} />
      </section>
      <section className="lab-subpage__section" aria-labelledby="alumni-heading">
        <h2 id="alumni-heading">Former Students</h2>
        <MemberGrid members={alumni} />
      </section>
    </Container>
  </main>
);

export default Team;
