import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import '../Home/Home.css';

const talks = [
  'A Hands-on Workshop on Cybersecurity of Critical Infrastructures, ADMIRE Day, FIU, 2024',
  'Security and privacy in critical applications and services, West Virginia University; Washington State University; Drexel University; University of Houston; University of Notre Dame; Florida International University, 2022',
  'SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses, EuroS&P, 2021',
  'SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses, University of Wisconsin - Madison, 2020',
  'Leveraging Unpredictability to Improve System Security and Reliability, Northeastern University, 2019',
  'Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach, VMware, 2018',
  'Leveraging Unpredictabilities for Real-time Malware Mitigation, Miami University, Ohio, 2018',
  'The Dose Makes the Poison - Leveraging Uncertainty for Effective Malware Detection, DSC 2017',
  'Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, ISSRE 2016',
  'The Case for Less Predictable Operating System Behavior, HotOS 2015',
];

const Talks = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Talks"
        description="Selected invited talks, workshops, and research presentations."
      />
      <ol className="lab-talk-list">
        {talks.map((talk) => <li key={talk}>{talk}</li>)}
      </ol>
    </Container>
  </main>
);

export default Talks;
