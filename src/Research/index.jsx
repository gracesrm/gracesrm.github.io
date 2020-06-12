import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Paragraph from '../ParagraphContainer';
import '../AppVanillaHtml.css';


const Research = () => {
    return (
        <Container fluid>
            <Row 
                id="publications" 
                className="justify-content-center row_padding_top">
                <h3>Publications</h3>
            </Row>
            <Paragraph>{publications()}</Paragraph>

            <Row 
                id="patents"
                className="justify-content-center row_padding_top">
                <h3>Patents</h3>
            </Row>
            <Paragraph>{patents()}</Paragraph>
            
            <Row
                id="talks"
                className="justify-content-center row_padding_top">
                <h3>Talks</h3>
            </Row>
            <Paragraph>{talks()}</Paragraph>
            
            <Row 
                id="poster" 
                className="justify-content-center row_padding_top">
                <h3>Poster Presentations</h3>
            </Row>
            <Paragraph>{poster()}</Paragraph>
        </Container>
    );
}


const publications = () => (
    <ol reversed>
        <li className="text-left li_padding_bottom">
            <dt> A Praise for Defensive Programming - Leveraging Uncertainty for Effective Malware Mitigation.</dt>
            <div><b>Ruimin Sun</b>, Marcus Botacin, Nikolaos Sapountzis, Xiaoyong Yuan, Matt Bishop, Donald E Porter, 
            Xiaolin Li, Andre Gregio, Daniela Oliveira. </div>
            <div><em>IEEE Transactions on Dependable and Secure Computing (TDSC), 2020. 
            <a href="https://ieeexplore.ieee.org/abstract/document/9061034"> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> MITOS: Optimal Propagation Decisioning in Dynamic Information Flow Tracking.</dt> 
            <div>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Xuetao Wei, Yier Jin, Jedidiah R. Crandall, Daniela Oliveira. </div>
            <div><em>IEEE International Conference on Distributed Computing Systems (ICDCS), 2020. (to be appeared)</em></div>
            Acceptance rate: 105/584 = 17.9%.
        </li>
        <li className="text-left li_padding_bottom">
            <dt>DDIFT: Decentralized Dynamic Information Flow Tracking for IoT Privacy and Security.</dt>
            <div>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Daniela Oliveira. </div>
            <div><em>NDSS Decentralized IoT Systems and Security Worshop (DISS), 2019. 
            <a href="https://www.ndss-symposium.org/wp-content/uploads/diss2019_07_Sapountzis_paper.pdf"> [PDF]</a></em></div> 
        </li>
        <li className="text-left li_padding_bottom">
            <dt> Learning Fast and Slow: PROPEDEUTICA for Real-time Malware Detection.</dt> 
            <div><b>Ruimin Sun</b>, Xiaoyong Yuan, Pan He, Qile Zhu, Aokun Chen, Andre Gregio, Daniela Oliveira, Xiaolin Li. </div>
            <div><em><a href="https://arxiv.org/pdf/1712.01145.pdf"> [PDF]</a> </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> The Dose Makes the Poision - Leveraging Uncertainty for Effective Malware Detection.</dt> 
            <div><b>Ruimin Sun</b>, Xiaoyong Yuan, Andrew Lee, Matt Bishop, Don Porter, Xiaolin Li, Andre Gregio and Daniela Oliveira.</div>
            <div><em>IEEE Conference on Dependable and Secure Computing (DSC), 2017. 
            <a href="https://ieeexplore.ieee.org/document/8073803"> [PDF]</a></em></div>
        </li> 
        <li className="text-left li_padding_bottom">
            <dt>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior.</dt> 
            <div><b>Ruimin Sun</b>, Andrew Lee, Aokun Chen, Don Porter, Matt Bishop and Daniela Oliveira.</div>
            <div><em>IEEE International Symposium on Software Reliability Engineering (ISSRE), 2016. 
            <a href="https://ieeexplore.ieee.org/document/7774537"> [PDF]</a></em></div>
        </li> 
        <li className="text-left li_padding_bottom">
            <dt> The Case for Unpredictability as Deception as OS Features.</dt> 
            <div><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. </div>
            <div><em>USENIX ;login, 2015.  
            <a href="https://www.usenix.org/system/files/login/articles/login_aug15_03_sun.pdf"> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> The Case for Less Predictable Operating System Behavior.</dt> 
            <div><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. </div>
            <div><em>15th Workshop on Hot Topics in Operating Systems (HotOS), 2015.
            <a href="https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-sun.pdf"> [PDF]</a></em></div>
        </li>
    </ol>
)


const patents = () => (
    <ol >
        <li className="text-left li_padding_bottom">
            <div>An Unsupervised Event Driven Targeted Analysis Approach.</div>
            <div><b>Ruimin Sun</b>, Zhen Mo, Bin Zan, Vamsi Akkineni, Vijay Ganti. </div>
            <div><em>US Patent Application 16/242,396 </em></div>
        </li>            
        <li className="text-left li_padding_bottom">
            <dt>A Holo-Entropy Based Alarm Scoring Approach.</dt> 
            <div>Zhen Mo, Dexiang Wang, Bin Zan, Vijay Ganti, Amit Chopra, <b>Ruimin Sun</b>. </div>
            <div><em>US Patent Application 16/212,170</em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Security Protection For A Host Computer In A Computer Network Using Cross-Domain Security-Relevant Information Sharing.</dt>
            <div>David Ott, Lei Xu, <b>Ruimin Sun</b>, Vijay Ganti, Dannis Moreau. </div>
            <div><em>US Patent Application 16/255,551</em></div>
        </li>
    </ol>
)


const talks = () => (
    <ol>
        <li className="text-left">Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach, VMware, 2018</li>
        <li className="text-left">Leveraging Unpredictabilities for Real-time Malware Mitigation, Miami University, Ohio, 2018</li>
        <li className="text-left">How Diverse OS can Improve Software Reliability towards OS (Mis)Behavior, Beihang University, China, 2017</li>
        <li className="text-left">The Dose Makes the Poison - Leveraging Uncertainty for Effective Malware Detection, DSC 2017</li>
        <li className="text-left">Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, ISSRE 2016</li>
        <li className="text-left">The Case for Less Predictable Operating System Behavior, HotOS 2015</li>
    </ol>
)

const poster = () => (
    <ol>
        <li className="text-left">Learning Fast and Slow: Propedeutica for Real-time Malware Detection, FICS Conf. 2018</li>
        <li className="text-left">Adversarial Voice Commands (AdVoice) in the Physical World, FICS Conf. 2018</li>
        <li className="text-left">Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, FICS Conf. 2017 </li>
        <li className="text-left">DeepMalware: Deep Models and Mechanisms for Malware Detection, NSF-CBL 2017, FICS Conf. 2017</li>
        <li className="text-left">The Case for Less Predictable Operating System Behavior, FICS Conf. 2016</li>
    </ol>
)

export default Research;
