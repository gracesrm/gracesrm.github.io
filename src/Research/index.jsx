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
            <Row
                className="justify-content-center"
                style={{paddingTop: "5em"}}>
            </Row>
        </Container>
    );
}



const publications = () => (
    <ol reversed>
        <li className="text-left li_padding_bottom">
            <dt>SoK: All You Need to Know About On-Device ML Model Extraction - The Gap Between Research and Practice.</dt>
            <div>Tushar Nayan, Qiming Guo, Mohammed Al Duniawi, Marcus Botacin, Selcuk Uluagac, Ruimin Sun</div>
            <div><em>USENIX Security 2024.
            <a href={"https://www.usenix.org/system/files/sec24fall-prepub-2341-nayan.pdf"}> [PDF]</a>
            <a href={"https://github.com/sys-ris3/ML_Extraction_Sok"}> [Code]</a>
            {/* <a href={""}> [Slides]</a> */}
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>SHiFT: Semi-hosted Fuzz Testing for Embedded Applications.</dt>
            <div>Alejandro Mera, Changming Liu, Ruimin Sun, Engin Kirda, Long Lu</div>
            <div><em>USENIX Security 2024.
            <a href={"https://www.usenix.org/system/files/sec24summer-prepub-88-mera.pdf"}> [PDF]</a>
            {/* <a href={""}> [Code]</a>
            <a href={""}> [Slides]</a> */}
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Privacy-Preserving Oriented Design for Multi-Modality Models using FL.</dt>
            <div>Mohammed Al Duniawi, Kemal Akkaya, Ruimin Sun</div>
            <div><em>5th IEEE International Conference on Trust, Privacy and Security in Intelligent Systems and Applications (TPS-ISA). IEEE, 2023.
            <a href={"https://drive.google.com/file/d/1_HjnBRFnCIIs7k3iwFU-BFgNIeUysxpa/view?usp=sharing"}> [PDF]</a>
            {/* <a href={""}> [Code]</a> */}
            {/* <a href={""}> [Slides]</a> */}
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Unsafe Behavior Detection with Adaptive Contrastive Learning in Industrial Control Systems.</dt>
            <div>Zheng, Xu and Wang, Tianchun and Chowdhury, Samin Yasar and Sun, Ruimin and Luo, Dongsheng</div>
            <div><em>2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW). IEEE, 2023.
            <a href={"https://drive.google.com/file/d/1aNYjXjSzhHvkVYECAaUQpD6KpGPxPMo1/view?usp=sharing"}> [PDF]</a>
            {/* <a href={""}> [Code]</a> */}
            {/* <a href={""}> [Slides]</a> */}
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>The Case for Virtual PLC-enabled Honeypot Design.</dt>
            <div>Samin Y. Chowdhury, Brandon Dudley, and Ruimin Sun. </div>
            <div><em>2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW). IEEE, 2023.         
            <a href={"https://drive.google.com/file/d/1TV8T44Ht5zUohe1ixWwpaTS-6g_tLOw3/view?usp=sharing"}> [PDF]</a>
            <a href={"https://github.com/sys-ris3/PLCHoney"}> [Code]</a>
            <a href={"https://drive.google.com/file/d/1lfbw1rhusml3ujGYg7zoYglVY56SSB5d/view?usp=sharing"}> [Slides]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>ShadowNet: A Secure and Efficient On-device Model Inference System for Convolutional Neural Networks.</dt>
            <div>Zhichuang Sun, <b>Ruimin Sun</b>, Changming Liu, Amrita Roy Chowdhury, Long Lu, Somesh Jha.</div>
            <div><em>IEEE Symposium on Security and Privacy (S&P), 2023. 
            <a href={"https://drive.google.com/file/d/1SnGFwvKgPgpy-6q29DWYoMPVjqLLMXNE/view?usp=sharing"}> [PDF]
            {/* <a href={""}> [Code] */}
            </a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Decentralizing Cyber Physical Systems for Resilience: An Innovative Case Study from A Cybersecurity Perspective.</dt>
            <div>Xueping Liang, Charalambos Konstantinou, Sachin Shetty, Eranga Bandara, <b>Ruimin Sun</b></div>
            <div><em>Computers & Security, Jan 1;124:102953, 2023. 
            <a href={"https://www.sciencedirect.com/science/article/pii/S0167404822003455"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Online Binary Models are Promising for Distinguishing Temporally Consistent Computer Usage Profiles.</dt>
            <div>Giovanini, L., Ceschin, F., Silva, M., Chen, A., Kulkarni, R., Banda, S., Lysaght, M., Qiao, H., Sapountzis, N., Sun, R. and Matthews, B.</div>
            <div><em>IEEE Transactions on Biometrics, Behavior, and Identity Science, 2022. 
            <a href={"https://drive.google.com/file/d/1yI5xtzHH4eqYhAaimsKqZXZESqksB6jP/view?usp=sharing"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>D-Box: DMA-enabled compartmentalization for embedded applications.</dt>
            <div>Alejandro Mera, Yi Hui Chen, <b>Ruimin Sun</b>, Engin Kirda, Long Lu</div>
            <div><em>29th Network and Distributed System Security Symposium (NDSS), 2022. 
            <a href={"https://www.ndss-symposium.org/wp-content/uploads/2022-53-paper.pdf"}> [PDF]</a>
            <a href={"https://github.com/RiS3-Lab/D-Box"}> [Code]</a>
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Challenges and Pitfalls in Malware Research. </dt>
            <div>Marcus Botacin, Fabricio Ceschin, <b>Ruimin Sun</b>, Daniela Oliveira, André Grégio. </div>
            <div><em>Computers & Security, Jul 1;106:102287, 2021. 
            <a href={"https://www.sciencedirect.com/science/article/pii/S0167404821001115"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses.</dt>
            <div><b>Ruimin Sun</b>, Alejandro Mera, Long Lu, David Choffnes. </div>
            <div><em>IEEE European Symposium on Security and Privacy (EuroS&P), 2021. 
            <a href={"https://drive.google.com/file/d/1w7NOg4L_VnR183n8SAo6Z528BF5hrN5a/view?usp=sharing"}> [PDF]
            <a href={"https://github.com/sys-ris3/ICS-sok-code"}>[Code]</a>
            </a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> Mind Your Weight(s): A Large-scale Study on Insufficient Machine Learning Model Protection in Mobile Apps.</dt>
            <div>Zhichuang Sun, <b>Ruimin Sun</b>, Long Lu, Alan Mislove. </div>
            <div><em>USENIX Security, 2021.
            <a href={"https://www.usenix.org/system/files/sec21-sun-zhichuang.pdf"}> [PDF]</a>
            <a href={"https://github.com/RiS3-Lab/ModelXRay"}> [Code]</a>
            </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> A Praise for Defensive Programming - Leveraging Uncertainty for Effective Malware Mitigation.</dt>
            <div><b>Ruimin Sun</b>, Marcus Botacin, Nikolaos Sapountzis, Xiaoyong Yuan, Matt Bishop, Donald E Porter, 
            Xiaolin Li, Andre Gregio, Daniela Oliveira. </div>
            <div><em>IEEE Transactions on Dependable and Secure Computing (TDSC), 2020. 
            <a href={"https://ieeexplore.ieee.org/document/9061034"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> MITOS: Optimal Propagation Decisioning in Dynamic Information Flow Tracking.</dt> 
            <div>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Xuetao Wei, Yier Jin, Jedidiah R. Crandall, Daniela Oliveira. </div>
            <div><em>IEEE International Conference on Distributed Computing Systems (ICDCS), 2020. 
            <a href={"https://ieeexplore.ieee.org/document/9355732"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>DDIFT: Decentralized Dynamic Information Flow Tracking for IoT Privacy and Security.</dt>
            <div>Nikolaos Sapountzis, <b>Ruimin Sun</b>, Daniela Oliveira. </div>
            <div><em>NDSS Decentralized IoT Systems and Security Worshop (DISS), 2019. 
            <a href={"https://www.ndss-symposium.org/wp-content/uploads/diss2019_07_Sapountzis_paper.pdf"}> [PDF]</a></em></div> 
        </li>
        <li className="text-left li_padding_bottom">
            <dt> Learning Fast and Slow: PROPEDEUTICA for Real-time Malware Detection.</dt> 
            <div><b>Ruimin Sun</b>, Xiaoyong Yuan, Pan He, Qile Zhu, Aokun Chen, Andre Gregio, Daniela Oliveira, Xiaolin Li. </div>
            <div><em>IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2021. <a href={require("../Downloads/paper/propedeutica_2018.pdf")}> [PDF]</a> </em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> The Dose Makes the Poision - Leveraging Uncertainty for Effective Malware Detection.</dt> 
            <div><b>Ruimin Sun</b>, Xiaoyong Yuan, Andrew Lee, Matt Bishop, Don Porter, Xiaolin Li, Andre Gregio and Daniela Oliveira.</div>
            <div><em>IEEE Conference on Dependable and Secure Computing (DSC), 2017. 
            <a href={"https://ieeexplore.ieee.org/document/8073803"}> [PDF]</a></em></div>
        </li> 
        <li className="text-left li_padding_bottom">
            <dt>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior.</dt> 
            <div><b>Ruimin Sun</b>, Andrew Lee, Aokun Chen, Don Porter, Matt Bishop and Daniela Oliveira.</div>
            <div><em>IEEE International Symposium on Software Reliability Engineering (ISSRE), 2016. 
            <a href={"https://ieeexplore.ieee.org/document/7774537"}> [PDF]</a></em></div>
        </li> 
        <li className="text-left li_padding_bottom">
            <dt> The Case for Unpredictability as Deception as OS Features.</dt> 
            <div><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. </div>
            <div><em>USENIX ;login, 2015.  
            <a href={"https://www.usenix.org/system/files/login/articles/login_aug15_03_sun.pdf"}> [PDF]</a></em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt> The Case for Less Predictable Operating System Behavior.</dt> 
            <div><b>Ruimin Sun</b>, Don Porter, Daniela Oliveira and Matt Bishop. </div>
            <div><em>15th Workshop on Hot Topics in Operating Systems (HotOS), 2015.
            <a href={"https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-sun.pdf"}> [PDF]</a></em></div>
        </li>
    </ol>
)


const patents = () => (
    <ol >
        <li className="text-left li_padding_bottom">
            <div>An Unsupervised Event Driven Targeted Analysis Approach.</div>
            <div><b>Ruimin Sun</b>, Zhen Mo, Bin Zan, Vamsi Akkineni, Vijay Ganti. </div>
            <div><em>US Patent 11,295,011 </em></div>
        </li>            
        <li className="text-left li_padding_bottom">
            <dt>A Holo-Entropy Based Alarm Scoring Approach.</dt> 
            <div>Zhen Mo, Dexiang Wang, Bin Zan, Vijay Ganti, Amit Chopra, <b>Ruimin Sun</b>. </div>
            <div><em>US Patent 11,258,655</em></div>
        </li>
        <li className="text-left li_padding_bottom">
            <dt>Security Protection For A Host Computer In A Computer Network Using Cross-Domain Security-Relevant Information Sharing.</dt>
            <div>David Ott, Lei Xu, <b>Ruimin Sun</b>, Vijay Ganti, Dannis Moreau. </div>
            <div><em>US Patent 11,316,879</em></div>
        </li>
    </ol>
)


const talks = () => (
    <ol>
        <li className="text-left"><b>A Hands-on Workshop on Cybersecurity of Critical Infrastructures</b>, ADMIRE Day, FIU, 2024</li>
        <li className="text-left"><b>Security and privacy in critical applications and services</b>, West Virginia University; Washington State University; Drexel University; University of Houston; University of Notre Dame; Florida International University, 2022</li>
        <li className="text-left"><b>SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses</b>, EuroS&P, 2021</li>
        <li className="text-left"><b>SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses</b>, University of Wisconsin - Madison, 2020</li>
        <li className="text-left"><b>Leveraging Unpredictability to Improve System Security and Reliability</b>, Northeastern University, 2019 </li>
        <li className="text-left"><b>Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach</b>, VMware, 2018</li>
        <li className="text-left"><b>Leveraging Unpredictabilities for Real-time Malware Mitigation</b>, Miami University, Ohio, 2018</li>
        {/* <li className="text-left"><b>How Diverse OS can Improve Software Reliability towards OS (Mis)Behavior</b>, Beihang University, China, 2017</li> */}
        <li className="text-left"><b>The Dose Makes the Poison - Leveraging Uncertainty for Effective Malware Detection</b>, DSC 2017</li>
        <li className="text-left"><b>Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior</b>, ISSRE 2016</li>
        <li className="text-left"><b>The Case for Less Predictable Operating System Behavior</b>, HotOS 2015</li>
    </ol>
)

const poster = () => (
    <ol>
        <li className="text-left">The Achilles Heel of Extended Reality Apps: Probing Availability Vulnerability in Artificial Intelligence Components, USENIX Security 2023</li>
        <li className="text-left">Learning Fast and Slow: Propedeutica for Real-time Malware Detection, FICS Conf. 2018</li>
        <li className="text-left">Adversarial Voice Commands (AdVoice) in the Physical World, FICS Conf. 2018</li>
        <li className="text-left">Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior, FICS Conf. 2017 </li>
        <li className="text-left">DeepMalware: Deep Models and Mechanisms for Malware Detection, NSF-CBL 2017, FICS Conf. 2017</li>
        <li className="text-left">The Case for Less Predictable Operating System Behavior, FICS Conf. 2016</li>
    </ol>
)

export default Research;
