import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PageHeader from './PageHeader';
import { PersonCard } from '../components';
import { people } from '../content/people';
import '../Home/Home.css';

const byDisplayOrder = (first, second) => (first.displayOrder || 0) - (second.displayOrder || 0);
const newestRoleStart = (person) => (person.roles || [])
  .reduce((latest, role) => (role.startDate > latest ? role.startDate : latest), '');
const byNewestFirst = (first, second) => (
  newestRoleStart(second).localeCompare(newestRoleStart(first)) || byDisplayOrder(first, second)
);
const faculty = people.filter(({ status }) => status === 'faculty').sort(byDisplayOrder);
const currentMembers = people.filter(({ status }) => status === 'current').sort(byNewestFirst);
const alumni = people.filter(({ status }) => status === 'alumni').sort(byNewestFirst);

const alumniGroups = [
  { title: 'PhD Students', roleTitle: 'PhD Student' },
  { title: 'Master’s Students', roleTitle: 'Master Student' },
  { title: 'Undergraduate Students', roleTitle: 'Undergraduate Student' },
  { title: 'K–12 Students', roleTitle: 'K-12 Student' },
];

const MemberGrid = ({ members, cardProps = {} }) => (
  <Row className="lab-member-grid">
    {members.map((person) => (
      <Col md={6} lg={4} className="lab-member-grid__column" key={person.id}>
        <PersonCard person={person} {...cardProps} />
      </Col>
    ))}
  </Row>
);

const AlumniLists = () => (
  <div className="alumni-groups">
    {alumniGroups.map((group) => {
      const members = alumni.filter((person) => (
        (person.roles || []).some(({ title }) => title === group.roleTitle)
      ));

      return (
        <section className="alumni-group" key={group.roleTitle}>
          <h3>{group.title}</h3>
          {members.length > 0 ? (
            <ul>
              {members.map((person) => {
                const role = person.roles.find(({ title }) => title === group.roleTitle);

                return (
                  <li key={person.id}>
                    <span className="alumni-entry__name">{person.name}</span>
                    {role.institution && <span>, {role.institution}</span>}
                    <span> ({role.periodLabel})</span>
                    {person.highlight && <span className="alumni-entry__highlight"> · {person.highlight}</span>}
                    {person.firstEmployment && <span> · {person.firstEmployment}</span>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="alumni-group__empty">None listed.</p>
          )}
        </section>
      );
    })}
  </div>
);

const Team = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Team"
        description="Researchers working on the security across systems, artificial intelligence, and application domains."
      />
      <section className="lab-subpage__section" aria-labelledby="faculty-heading">
        <h2 id="faculty-heading">Faculty Director</h2>
        <MemberGrid members={faculty} cardProps={{ showHighlight: false, showLinks: false }} />
      </section>
      <section className="lab-subpage__section" aria-labelledby="current-members-heading">
        <h2 id="current-members-heading">Current Members</h2>
        <MemberGrid members={currentMembers} cardProps={{ showLinks: false }} />
      </section>
      <section className="lab-subpage__section" aria-labelledby="alumni-heading">
        <h2 id="alumni-heading">Alumni</h2>
        <AlumniLists />
      </section>
    </Container>
  </main>
);

export default Team;
