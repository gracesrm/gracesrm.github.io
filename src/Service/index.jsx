import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Paragraph from '../ParagraphContainer';
// import ParagraphContainer from '../ParagraphContainer';
import '../AppVanillaHtml.css';


const Service = () => (
    <Container>
        <Row 
            id="patents"
            className="justify-content-center row_padding_top">
            <h3>Guest Editor</h3>
        </Row>
        <Paragraph>{guest()}</Paragraph>

        <Row 
            id="panel"
            className="justify-content-center row_padding_top">
            <h3>Panelist</h3>
        </Row>
        <Paragraph>{panel()}</Paragraph>

        <Row 
            id="chair"
            className="justify-content-center row_padding_top">
            <h3>Chair/Co-Chair</h3>
        </Row>
        <Paragraph>{chair()}</Paragraph>

        <Row 
            id="program committee"
            className="justify-content-center row_padding_top">
            <h3>Program Committee</h3>
        </Row>
        <Paragraph>{pc()}</Paragraph>

        <Row 
            id="External Reviewer"
            className="justify-content-center row_padding_top">
            <h3>Reviewer</h3>
        </Row>
        <Paragraph>{reviewer()}</Paragraph>

    </Container>
);


const guest = () => (
    <ol >
        <li className="text-left li_padding_bottom">
            <div>Special Issue on Memory-based Malware and other Unconventional Threats at ACM Journal <a href="https://dl.acm.org/journal/dtrap">Digital Threats: Research and Practice</a></div>
        </li>            
    </ol>
)

const panel = () => (
    <ol >
        <li className="text-left li_padding_bottom">
            <div> Secure and Trustworthy Cyberspace (SaTC) | NSF, 2022, 2023</div>
        </li>            
    </ol>
)

const chair = () => (
    <ol >
        <li className="text-left li_padding_bottom">
            <div><a href="https://ricssworkshop.github.io/">Workshop on Re-design Industrial Control Systems with Security (RICSS)</a>, 2023</div>
        </li>            
    </ol>
)

const pc = () => (
    <ol > 
        <li className="text-left li_padding_bottom">
            <div>(External) IEEE European Symposium on Security and Privacy, 2021</div>
        </li>    
        <li className="text-left li_padding_bottom">
            <div>(Student Program Committee) IEEE Symposium on Security and Privacy (S&P), 2019</div>
        </li>   
        <li className="text-left li_padding_bottom">
            <div>ISSRE Fast Abstract, 2018</div>
        </li>    
    </ol>
)

const reviewer = () => (
    <ol >
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
    </ol>
)

export default Service;


