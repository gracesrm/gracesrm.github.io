import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Research = () => {
    return (
        <Container>
            <Row id="publications" className="justify-content-center"><h1>Publications</h1></Row>
            <Row>{publications()}</Row>
            <Row id="patents" className="justify-content-center"><h1>Patents</h1></Row>
            <Row>{patents()}</Row>
            <Row id="talks" className="justify-content-center"><h1>Talks</h1></Row>
            <Row>{talks()}</Row>
        </Container>
    );
}


const publications = () => (
    <ul className="list-unstyled">
        <li><b>Ruimin Sun</b>, Marcus Botacin, Nikolaos Sapountzis, Xiaoyong Yuan, Matt Bishop, Donald E Porter, 
            Xiaolin Li, Andre Gregio, Daniela Oliveira. <b> A Praise for Defensive Programming - Leveraging Uncertainty 
            for Effective Malware Mitigation.</b>TDSC, 2020. 
            <a href="https://ieeexplore.ieee.org/abstract/document/9061034">[PDF]</a> 
            <a href="">[Slides]</a>.
        </li>
        <li>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Xuetao Wei, Yier Jin, Jedidiah R. Crandall, Daniela Oliveira. <b> MITOS: Optimal Propagation Decisioning in Dynamic Information Flow Tracking.</b> ICDCS, 2020. <a href="">[PDF]</a></li>
        <li>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Daniela Oliveira. <b>DDIFT: Decentralized Dynamic Information Flow Tracking for IoT Privacy and Security</b>. DISS, 2019. <a href="https://www.ndss-symposium.org/wp-content/uploads/diss2019_07_Sapountzis_paper.pdf">[PDF]</a> </li>
        <li><b>Ruimin Sun</b>, Xiaoyong Yuan, Pan He, Qile Zhu, Aokun Chen, Andre Gregio, Daniela Oliveira, Xiaolin Li. <b> Learning Fast and Slow: PROPEDEUTICA for Real-time Malware Detection </b> <a href="paper/making-deep-learning.pdf">[PDF]</a> <a href="">[Slides]</a>. </li>
        <li><b>Ruimin Sun</b>, Xiaoyong Yuan, Andrew Lee, Matt Bishop, Don Porter, Xiaolin Li, Andre Gregio and Daniela Oliveira. <b> The Dose Makes the Poision - Leveraging Uncertainty for Effective Malware Detection.</b> DSC 2017. Taipei, Taiwan, Aug. 7-10 2017. <a href="paper/DSC-no-copyright.pdf">[PDF]</a> <a href="">[Slides]</a></li> 
        <li><b>Ruimin Sun</b>, Andrew Lee, Aokun Chen, Don Porter, Matt Bishop and Daniela Oliveira. <b>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior.</b> ISSRE 2016. Ottawa, Canada, Oct. 23-27 2016. <a href="paper/issre-camera-ready.pdf">[PDF]</a> <a href="">[Slides]</a></li> 
        <li><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. <b> The Case for Unpredictability as Deception as OS Features.</b> Usenix ;login, Aug 2015. (Invited Paper) <a href="paper/login_aug15_03_sun.pdf">[PDF]</a> <a href="">[Slides]</a></li>
        <li><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. <b> The Case for Less Predictable Operating System Behavior.</b> 15th Workshop on Hot Topics in Operating Systems. Kartause Ittingen, Switzerland, May 18-20 2015. <a href="paper/hotos-final.pdf">[PDF]</a> <a href="">[Slides]</a></li>
    </ul>
)


const patents = () => (
    <ul className="list-unstyled">
        <li><b>Ruimin Sun</b>, Zhen Mo, Bin Zan, Vamsi Akkineni, Vijay Ganti. <b>An Unsupervised Event Driven Targeted Analysis Approach.</b> US Patent Application 16/242,396</li>            
        <li>Zhen Mo, Dexiang Wang, Bin Zan, Vijay Ganti, Amit Chopra, <b>Ruimin Sun</b>.  <b>A Holo-Entropy Based Alarm Scoring Approach.</b> US Patent Application 16/212,170</li>
        <li>David Ott, Lei Xu, <b>Ruimin Sun</b>, Vijay Ganti, Dannis Moreau. <b>Security Protection For A Host Computer In A Computer Network Using Cross-Domain Security-Relevant Information Sharing.</b> US Patent Application 16/255,551</li>
    </ul>
)


const talks = () => (
    <ul className="list-unstyled">
        <li>Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach, VMware, 2018</li>
        <li>Leveraging Unpredictabilities for Real-time Malware Mitigation, Miami University, Ohio, 2018</li>
        <li>How Diverse OS can Improve Software Reliability towards OS (Mis)Behavior, Beihang University, China, 2017</li>
        <li>The Dose Makes the Poison - Leveraging Uncertainty for Effective Malware Detection, DSC 2017</li>
        <li>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, ISSRE 2016</li>
        <li>The Case for Less Predictable Operating System Behavior, HotOS 2015</li>
        <ul><b>Poster Presentations</b></ul>
        <li>Learning Fast and Slow: Propedeutica for Real-time Malware Detection, FICS Conf. 2018</li>
        <li>Adversarial Voice Commands (AdVoice) in the Physical World, FICS Conf. 2018</li>
        <li>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, FICS Conf. 2017 </li>
        <li>DeepMalware: Deep Models and Mechanisms for Malware Detection, NSF-CBL 2017, FICS Conf. 2017</li>
        <li>The Case for Less Predictable Operating System Behavior, FICS Conf. 2016</li>
    </ul>
)

export default Research;
