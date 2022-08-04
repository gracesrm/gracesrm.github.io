import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profImageVeritcal from '../Assets/profile_s.jpg';
import ParagraphContainer from '../ParagraphContainer';
import hiring from '../Downloads/hiring/PhD_openings_fall22.pdf'
import '../App.css';

const Intro = () => {
    return (
        <Container fluid id="home">
            <ParagraphContainer>
                <Row style={{paddingTop: "1.5em"}}>
                    <Col md={4}>{profilePhoto()}</Col>
                    <Col md={8} className="text-left">{intro()}</Col>
                </Row>
            </ParagraphContainer>
            <ParagraphContainer>
                <Container className="text-left" style={{paddingTop: "1em"}}>
                Ruimin Sun joined <a href="https://www.cis.fiu.edu/">Florida International University</a> as an assistant professor in 2022. 
                Prior to joining FIU, she worked as a Postdoctoral Researcher at the <a href="https://seclab.nu/"> seclab </a>of <a href="https://www.northeastern.edu/">Northeastern University</a>. 
                She earned her Ph.D. from <a href="https://fics.institute.ufl.edu/">FICS</a> at the <a href="https://www.ufl.edu/">University of Florida</a> in 2019 under the supervisory of <a href="https://danielaseabraoliveira.com/">Dr. Daniela Oliveira</a>. 
                </Container>
                <Container className="text-left" style={{paddingTop: "0.5em"}}>
                <b className="h7">Ruimin's research aims at securing ubiquitous systems and devices. </b>
                Recent work has included the investigation of control logic modification attacks in programmable logic controllers, 
                proprietary AI privacy protection on mobile devices, and memory management issues in embedded devices. 
                Some of the other research interests include malware detection and mitigation, and software reliability improvement. 
                </Container>
                {/* <Container className="text-left" style={{paddingTop: "0.5em"}}>
                Ruimin is a recipient of the Grace Hopper Award, IEEE S&P Travel Award, GREPSEC II Travel Award, and Wilson and Marie Collins Graduate Fellowship from University of Florida.
                </Container> */}
                <Container className="text-left" style={{paddingTop: "1em"}}>
                {/* We are always looking for talented and self-motivated students interested in security and doing inspiring work with real-world impact.  */}
                <b className="news">[Hiring!]</b>&nbsp; Talented and self-motivated students with skills in software engineering, machine learning, mobile security, embedded systems are always welcomed.  
                If you are <i>&nbsp;not a student of FIU </i>and are interested in my research, please <a href="https://www.cis.fiu.edu/academics/degrees/graduate/doctor-of-philosophy-in-computer-science/">apply</a> to our program!
                </Container>

            </ParagraphContainer>
        </Container>
    )
}

const intro = () => (
    <Container>
        <Row className="h3">Ruimin Sun</Row>
        <Row style={{paddingTop: "0.2em"}}/>
        <Row className="h7">Assistant Professor</Row>
        <Row className="h7">School of Computing and Information Science</Row>
        <Row className="h7">Florida International University</Row>
        <Row style={{paddingTop: "1em"}}/>
        <Row><b className="h7">Email:</b> &nbsp;r.sun AT fiu dot edu </Row>
        <Row><b className="h7">Office:</b> &nbsp; CASE 317</Row>
        <Row><b className="h7">Address:</b> &nbsp; 11200 SW 8th Street, Miami, FL, USA 33199 <br/> </Row>
        <Row style={{paddingTop: "1.5em"}}/>
    </Container>
)

const profilePhoto = () => (
    <Image src={profImageVeritcal} fluid/>
)

export default Intro;
