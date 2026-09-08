import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import { NewsItem } from '../components';
import '../Home/Home.css';

const talks = [
  { id: 'talk-admire-day-2024', date: '2024', type: 'talk', title: 'A Hands-on Workshop on Cybersecurity of Critical Infrastructures, ADMIRE Day, FIU' },
  { id: 'talk-critical-applications-2022', date: '2022', type: 'talk', title: 'Security and privacy in critical applications and services, West Virginia University; Washington State University; Drexel University; University of Houston; University of Notre Dame; Florida International University' },
  { id: 'talk-ics-eurosp-2021', date: '2021', type: 'talk', title: 'SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses, EuroS&P' },
  { id: 'talk-ics-wisconsin-2020', date: '2020', type: 'talk', title: 'SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses, University of Wisconsin - Madison' },
  { id: 'talk-unpredictability-northeastern-2019', date: '2019', type: 'talk', title: 'Leveraging Unpredictability to Improve System Security and Reliability, Northeastern University' },
  { id: 'talk-sherlock-vmware-2018', date: '2018', type: 'talk', title: 'Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach, VMware' },
  { id: 'talk-malware-mitigation-miami-2018', date: '2018', type: 'talk', title: 'Leveraging Unpredictabilities for Real-time Malware Mitigation, Miami University, Ohio' },
  { id: 'talk-dose-dsc-2017', date: '2017', type: 'talk', title: 'The Dose Makes the Poison - Leveraging Uncertainty for Effective Malware Detection, DSC' },
  { id: 'talk-bear-issre-2016', date: '2016', type: 'talk', title: 'Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, ISSRE' },
  { id: 'talk-unpredictable-os-hotos-2015', date: '2015', type: 'talk', title: 'The Case for Less Predictable Operating System Behavior, HotOS' },
];

const Talks = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader
        title="Talks"
        description="Selected invited talks, workshops, and research presentations."
      />
      <div className="home-news-list">
        {talks.map((talk) => <NewsItem item={talk} showType={false} key={talk.id} />)}
      </div>
    </Container>
  </main>
);

export default Talks;
