import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import ParagraphContainer from '../ParagraphContainer';
import '../App.css';


const News = () => {
    const [showText, setShowText] = useState(false);

    return (
        <Container id="news">
            <Row className="justify-content-center row_padding_top">
                <h3>News</h3>
            </Row>
            <ParagraphContainer>
                <ul className='ul_margin_bottom'>
                    <li className="text-left">[Dec. 2024] Tushar's poster won the 1st place at the <a href="https://iot.institute.ufl.edu/iot-conference-24/">Warren B. Nelms Annual IoT Conference and the Best Poster Award</a>. </li>
                    <li className="text-left">[Dec. 2024] I gave a signature talk at the <a href="https://iot.institute.ufl.edu/iot-conference-24/">Warren B. Nelms Annual IoT Conference 2024</a> in Gainesville, Florida.</li> 
                    <li className="text-left">[Nov. 2024] I co-chaired the <a href="https://ricssworkshop.github.io/">RICSS workshop</a> co-located with CCS.</li> 
                    <li className="text-left">[June. 2024] Our proposal <i><a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2419843">Secure Machine Learning Inference in IoT-driven Analytical Scientific Infrastructure</a></i> is funded by NSF CICI. </li> 
                    <li className="text-left"><b className="label_news ">CFP</b>&nbsp;[June. 2024] I'm chairing the <a href="https://ricssworkshop.github.io/">Re-design Industrial Control Systems with Security (RICSS) Workshop</a>, happening on Oct. 14, 2024, in Salt Lake City, Utah, 
                    co-located with ACM CCS 2024. Consider submit your paper <a href="https://ricssworkshop.github.io/">CFP</a>. </li> 
                    <li className='text-left'><b className="label_news ">Paper</b>&nbsp;[Mar. 2024] Our paper "SoK: All You Need to Know About On-Device ML Model Extraction - The Gap Between Research and Practice" is accepted by Usenix Security 2024. Congratulations Tushar!</li>
                    <li className='text-left'><b className="label_news ">Paper</b>&nbsp;[Mar. 2024] Our paper "SHiFT: Semi-hosted Fuzz Testing for Embedded Applications" is accepted by Usenix Security 2024. Congratulations Alejandro!</li>
                </ul>
                <Collapse in={!showText}>
                    <div onClick={() => setShowText(!showText)} style={{'margin_bottom': '5em'}}>[<b><u>See more</u></b>]</div>
                </Collapse>
                <Collapse in={showText}>
                <ul>
                    <li className='text-left'>[Jul. 2023] Our <i>ADvanced education and research for Machine learning-driven critical Infrastructure REsilience (ADMIRE) Center</i> (PI: Hadi Amini) is Awarded by DHS. Congratulations to the team!</li>
                    <li className='text-left'>[Jul. 2023] Our paper <a href="https://www.computer.org/csdl/proceedings-article/eurospw/2023/272000a351/1OFtfz6r864">The Case for Virtual PLC-enabled Honeypot Design</a> has been awarded the <b className="label_news ">Best Paper Award</b>&nbsp; by RICSS @EuroS&P. Congratulations to Samin and Brandon!</li>
                    <li className='text-left'>[Jul. 2023] Our paper <a href="https://www.computer.org/csdl/proceedings-article/eurospw/2023/272000a363/1OFtfAJLVx6">Unsafe Behavior Detection with Adaptive Contrastive Learning in Industrial Control Systems</a> has been accepted by RICSS @EuroS&P. Congratulations to the team!</li>
                    <li className='text-left'>[Mar. 2023] I'm serving on the PC of CCS, RAID, SecDev, and ICCCN. Consider submit your paper.</li>
                    <li className="text-left"><b className="label_news ">CFP</b>&nbsp;[Jan. 2023] I'm chairing the 1st <a href="https://ricssworkshop.github.io/">workshop on Re-design Industrial Control Systems with Security (RICSS)</a>, happening on July 7, 2023, in Delft, Netherlands, co-located with IEEE EuroS&P 2023. Consider submit your paper <a href="https://ricssworkshop.github.io/cfp.html">CFP</a>. </li> 
                    <li className="text-left">[Jan. 2023] Our proposal <i>Trustworthy Lifecycle Modeling of CPS using Formal Methods</i> is funded by NSF CITES. </li>
                    <li className="text-left">[Dec. 2022] Our work <a href="https://www.arxiv.org/abs/2011.05905">ShadowNet: A Secure and Efficient On-device Model Inference System for Convolutional Neural Networks</a> is going to appear in IEEE S&P 2023. </li>

                    <li className="text-left">[June 2022] Our work <a href="https://ieeexplore.ieee.org/document/9786768">Online Binary Models are Promising for Distinguishing Temporally Consistent Computer Usage Profiles</a> is accepted by IEEE Transactions on Biometrics, Behavior, and Identity Science.</li>
                    <li className="text-left"><b className="label_news ">CFP</b>&nbsp;[May 2022] I'm serving as Guest Editor at Special Issue on Memory-based Malware and other Unconventional Threats at ACM Journal <a href="https://dl.acm.org/journal/dtrap">Digital Threats: Research and Practice</a>.</li>
                    <li className="text-left">[April 2022] Our work <a href="https://www.ndss-symposium.org/ndss-paper/auto-draft-258/"> D-Box: DMA-enabled compartmentalization for embedded applications </a> is presented at NDSS 2022.</li>
                    <li className="text-left">[Mar 2022] I'm going to join FIU as a tenure-track assistant professor. Send me an email if you are interested in security research.</li>
                    <li className="text-left">[Dec 2021] Our work D-Box: DMA-enabled compartmentalization for embedded applications is accepted by <a href="https://www.ndss-symposium.org/ndss2022/">NDSS'22</a>. </li>
                    <li className="text-left">[Mar 2021] I'm going to teach CS 3740 - Systems Security at Northeastern University. </li>
                    <li className="text-left">[Mar 2021] Our <a href={require("../Downloads/paper/sok_preprint.pdf")}>Sok study</a> on PLC attacks and formal verifiation-based protection is to appear at <a href="http://www.ieee-security.org/TC/EuroSP2021/">EuroS&P'21</a>. </li>
                    <li className="text-left">[Jan 2021] Our <a href="https://arxiv.org/pdf/2002.07687.pdf">large-scale study</a> on the (in)security of on-device machine learning models is to appear at <a href="https://www.usenix.org/conference/usenixsecurity21">USENIX Security'21.</a>. </li>
                    <li className="text-left">[June 2020] Our work on Mind Your Weight(s): A Large-scale Study on Insufficient Machine Learning Model Protection in Mobile Apps is presented at webinar of Future of Privacy Forum <a href="https://fpf.org/">(FPF)</a>. </li>
                    <li className="text-left">[May 2020] Our work on praise for defensive programing is accepted by <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8858">TDSC</a>. </li>
                    <li className="text-left">[May 2020] Our work on MITOS: Optimal Decisioning for the Indirect Flow Propagation Dilemma in Dynamic Information Flow Tracking is accepted by <a href="https://icdcs2020.sg/">ICDCS</a>. </li>
                    <li className="text-left">[Aug 2019] I'm excited to Join NEU as a Postdoctoral Research Associate. </li>
                    <li className="text-left">[Jan 2019] I'm selected as Student Program Committee of  <a href="
                        https://www.ieee-security.org/TC/SP2019/">S&P 2019</a>. </li>
                    <li className="text-left">[Aug 2018] I'm invited as Program Committee of <a href="http://2018.issre.net/">ISSRE 2018</a> Fast Abstract Track. </li>
                    <li className="text-left">[Aug 2018] I give my talk Sherlock: An AI-based Event-driven System Behavior Diagnosing Approach at VMware </li>
                    <li className="text-left">[May 2018] I'll start my internship researching on malware detection with AI at <a href="https://www.vmware.com/products/appdefense.html">VMware</a>. </li>
                    <li className="text-left">[Feb 2018] I'm happy to give my talk - Leveraging Unpredictabilities for Real-time Malware Mitigation at Miami University, Ohio. </li>
                    <li className="text-left">[Feb 2018] I'm invited to be a reviewer of IEEE Transactions on Information Forensics and Security <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206">(TIFS)</a>. </li>   
                    <li className="text-left">[Oct 2017]I attend <a href="https://ghc.anitab.org/"> Grace Hopper Celebration conference</a> as a scholar. </li>
                    <li className="text-left">[Aug 2017]I presented at the <a href="https://dsc17.cs.nctu.edu.tw/program"> DSC</a> conference in Taipei, Taiwan. </li>
                    <li className="text-left">[Aug 2017]I'm giving my talk at Beihang University for my work Understanding Application Sensitivity towards OS (mis)Behavior and How Diverse Environments Improve Software Availability. </li>
                    <li className="text-left">[May 2017]I received the Scholarship for 2017 Grace Hopper Celebration of Women in Computing.</li>
                    <li className="text-left">[May 2017]Our paper The Dose Makes the Poision - Leveraging Uncertainty for Effective Malware Detection is accepted by DSC 2017.</li>
                    <li className="text-left">[Aug 2016]Our paper Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior is accepted by ISSRE 2016.</li>
                    <li className="text-left">[2015]Chameleon story got published on <a href="http://www.alligator.org/news/campus/article_b28dc956-c31d-11e5-a1f9-03ae15b38446.html">Alligator</a>.</li>
                    <li className="text-left">[2015]Our paper "The Case for Unpredictability as Deception as OS Features" will appear in the August issue of <a href="https://www.usenix.org/blog/login-magazine-usenix-gets-makeover">;login</a>.</li>
                    <li className="text-left">[2015]I receive the <a href="http://www.ieee-security.org/grepsec/">GREPSEC II Travel Award</a>.</li>
                    <li className="text-left">[2015]Our paper <em>The Case for Less Predictable Operating System Behavior</em> is accepted by <a href="https://www.usenix.org/conference/hotos15">HotOS 2015</a>.</li><br/>
                </ul>
                </Collapse>
                <Collapse in={showText}>
                    <div onClick={() => setShowText(!showText)} style={{'margin_bottom': '5em'}}> [<b><u>See less</u></b>]</div>
                </Collapse>
            </ParagraphContainer>
        </Container>
    );

}

export default News;
