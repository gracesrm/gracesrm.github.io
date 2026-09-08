import React from 'react';
import Container from 'react-bootstrap/Container';
import PageHeader from './PageHeader';
import '../Home/Home.css';
import './Resources.css';

const resourceWorkflow = 'Ideas → Literature → Contribution → Story → Review → Validation → Evaluation → Revision';

const resources = [
  {
    id: 'qian-research-ideas',
    purpose: 'Find research ideas',
    author: 'Zhiyun Qian',
    title: 'How to Look for Ideas in Computer Science Research',
    url: 'https://zhiyunq.medium.com/how-to-look-for-ideas-in-computer-science-research-7a3fa6f4696f',
  },
  {
    id: 'keshav-how-to-read-a-paper',
    purpose: 'Read papers efficiently',
    author: 'Srinivasan Keshav',
    title: 'How to Read a Paper',
    url: 'https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html',
  },
  {
    id: 'carlini-best-paper-award',
    purpose: 'Choose an important contribution',
    author: 'Nicholas Carlini',
    title: 'How to Win a Best Paper Award',
    url: 'https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html',
  },
  {
    id: 'zhong-writing-systems-papers',
    purpose: "Build the paper's story",
    author: 'Lin Zhong',
    title: 'Tips about Writing Systems Papers',
    url: 'https://linzhong.org/opinions/writing.html',
  },
  {
    id: 'levin-redell-good-systems-paper',
    purpose: 'Think like a reviewer',
    author: 'Roy Levin & David Redell',
    title: 'How (and How Not) to Write a Good Systems Paper',
    url: 'https://www.cs.columbia.edu/~nieh/teaching/e6998/papers/1_22_redell_good-paper.html',
  },
  {
    id: 'vusec-threats-to-validity',
    purpose: 'Validate security claims',
    author: 'VUSec',
    title: 'Threats to Validity and Relevance in Security Research',
    url: 'https://www.vusec.net/threats-to-validity-in-security-research/',
  },
  {
    id: 'vusec-benchmarking-crimes',
    purpose: 'Validate experiments',
    author: 'VUSec',
    title: 'Benchmarking Crimes in Systems Security',
    url: 'https://www.vusec.net/projects/benchmarking-crimes/',
  },
  {
    id: 'bertsekas-mathematical-writing',
    purpose: 'Write technical arguments clearly',
    author: 'Dimitri Bertsekas',
    title: 'Ten Simple Rules for Mathematical Writing',
    url: 'https://faculty.engineering.asu.edu/bertsekas/ten-simple-rules-for-mathematical-writing/',
  },
  {
    id: 'le-goues-writing-rules',
    purpose: 'Improve the draft',
    author: 'Claire Le Goues',
    title: 'Things I Keep Repeating About Writing',
    url: 'https://clairelegoues.com/posts/clg-writing-rules.html',
  },
  {
    id: 'schulzrinne-writing-bugs',
    purpose: 'Catch common writing mistakes',
    author: 'Henning Schulzrinne',
    title: 'Common Bugs in Writing',
    url: 'https://www.cs.columbia.edu/~hgs/etc/writing-bugs.html',
  },
];

const ResourceItem = ({ resource }) => (
  <li className="resource-item">
    <span className="resource-item__heading"><strong>{resource.purpose}</strong> — {resource.author}</span>
    <a className="resource-item__link" href={resource.url}>
      <img
        alt=""
        aria-hidden="true"
        className="resource-item__icon"
        src={`https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(resource.url)}&sz=32`}
      />
      {resource.title}
    </a>
  </li>
);

const Resources = () => (
  <main className="lab-subpage">
    <Container>
      <PageHeader title="Resources" />
      <p className="resource-workflow">{resourceWorkflow}</p>
      <ol className="resource-list">
        {resources.map((resource) => <ResourceItem resource={resource} key={resource.id} />)}
      </ol>
    </Container>
  </main>
);

export default Resources;
