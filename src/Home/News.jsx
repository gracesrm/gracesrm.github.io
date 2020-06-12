import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ParagraphContainer from '../ParagraphContainer';
import '../App.css';

const News = () => {
    return (
        <Container id="news">
            <Row className="justify-content-center row_padding_top">
                <h3>News</h3>
            </Row>
            <ParagraphContainer>
                <ul>
                    <li className="text-left">[May 2020] Our work on praise for defensive programing is accepted by <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8858">TDSC</a>. </li>
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
            </ParagraphContainer>
        </Container>
    );

}

export default News;
