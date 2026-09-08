import React from 'react';
import Container from 'react-bootstrap/Container';
import Paragraph from '../ParagraphContainer';
// import ParagraphContainer from '../ParagraphContainer';
import '../AppVanillaHtml.css';


const serviceContent = () => (
  <>
    <section className="service-group">
      <h3>Chair/Co-Chair</h3>
      {chair()}
    </section>
    <section className="service-group">
      <h3>Guest Editor</h3>
      {guest()}
    </section>
    <section className="service-group">
      <h3>Panelist</h3>
      {panel()}
    </section>
    <section className="service-group">
      <h3>Program Committee</h3>
      {pc()}
    </section>
    <section className="service-group">
      <h3>Reviewer</h3>
      {reviewer()}
    </section>
  </>
);

const Service = ({ embedded = false }) => {
  if (embedded) return <div className="embedded-service">{serviceContent()}</div>;

  return (
    <Container>
      <Paragraph>{serviceContent()}</Paragraph>
    </Container>
  );
};


const guest = () => (
    <ul>
        <li className="text-left li_padding_bottom">
            <div>Special Issue on Memory-based Malware and other Unconventional Threats at ACM Journal <a href="https://dl.acm.org/journal/dtrap">Digital Threats: Research and Practice</a></div>
        </li>
    </ul>
)

const panel = () => (
    <ul>
        <li className="text-left li_padding_bottom">
            <div> Computer and Information Science and Engineering (CISE) | NSF, 2022 - 2026</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div> National Defense Science and Engineering Graduate (NDSEG) Fellowship | DoD, 2023</div>
        </li>
    </ul>
)

const chair = () => (
    <ul>
        <li className="text-left li_padding_bottom">
            <div><a href="https://ricssworkshop.github.io/">Workshop on Re-design Industrial Control Systems with Security (RICSS)</a>, 2023-2024</div>
        </li>
    </ul>
)

const pc = () => (
    <ul>
        <li className="text-left li_padding_bottom">
            <div>USENIX Security Symposium, 2025 - 2027</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>ACM Conference on Computer and Communications Security (CCS), 2023-2027</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>Annual Computer Security Applications Conference (ACSAC), 2024 - 2026</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>Secure and Trustworthy Machine Learning (SaTML), 2026</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>The Network and Distributed System Security (NDSS), 2026, 2027</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>Information Security Conference (ISC), 2025</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>EAI International Conference on Security and Privacy in Cyber-Physical Systems and Smart Vehicles (SmartSP), 2024</div>
        </li>

        <li className="text-left li_padding_bottom">
            <div>International Conference on Computer Communictions and Networks (ICCCN), 2023</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>IEEE Secure Development Conference (SecDev), 2023</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>International Symposium on Research in Attacks, Intrusions and Defenses (RAID), 2023</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>(External) IEEE European Symposium on Security and Privacy (EuroS&P), 2021</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>(Student Program Committee) IEEE Symposium on Security and Privacy (S&P), 2019</div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>ISSRE Fast Abstract, 2018</div>
        </li>
    </ul>
)

const reviewer = () => (
    <ul>
        <li className="text-left li_padding_bottom">
            <div>IEEE Symposium on Security and Privacy (S&P), 2017 - 2021 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>USENIX Security, 2019 - 2021 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>The ACM Conference on Computer and Communications Security (CCS), 2017 - 2021 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>Annual Computer Security Applications Conference (ACSAC), 2015 - 2018 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>International Symposium on Research in Attacks, Intrusions, and Defenses (RAID), 2016 - 2017 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>International Conference on Dependable Systems and Networks (DSN), 2016 - 2017 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>ACM Conference on Human Factors in Computing Systems (CHI), 2017 </div>
        </li>
        <li className="text-left li_padding_bottom">
            <div>ACM Conference on Security and Privacy in Wireless and Mobile Networks (WiSec), 2016 </div>
        </li>
    </ul>
)

export default Service;
