import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profImageVeritcal from '../Assets/profile_s.jpg';
import ParagraphContainer from '../ParagraphContainer';
import hiring from '../Downloads/hiring/PhD_openings_fall22.pdf'


const Intro = () => {
    return (
        <Container fluid id="home">
            <ParagraphContainer>
                <Row style={{paddingTop: "1em"}}>
                    <Col md={4}>{profilePhoto()}</Col>
                    <Col md={8} className="text-left">{intro()}</Col>
                </Row>
            </ParagraphContainer>
            <ParagraphContainer>
                <Container className="text-left" style={{paddingTop: "1em"}}>
                <b>Bio: </b>I'm a Postdoctoral Research Associate in the Khoury College of Computer Sciences, working with <a href="https://www.longlu.org/">Dr. Long Lu</a>. 
        My research aims at securing ubiquitous systems (desktop, mobile, IoT/CPS).
        My recent works include PLC protection, and proprietary AI protection on the edge devices.

                </Container>
                <Container className="text-left" style={{paddingTop: "1em"}}>
                <b><font color="red">[News!] I'm going to join FIU as a tenure-track assistant professor. </font></b>
                If you are interested in security research, please send your CV, transcript, and test scores to <a href="mailto:r.sun.fiu@gmail.com">r.sun.fiu@gmail.com</a>.
                More hiring information can be found <a href={hiring}>here</a>.
                </Container>

            </ParagraphContainer>
        </Container>
    )
}

const intro = () => (
    <Container>
        <Row style={{paddingTop: "0.5em"}} className="h3">Ruimin Sun (孙睿敏)</Row>
        <Row style={{paddingTop: "0.5em"}}/>
        <Row>Postdoctoral Research Associate</Row>
        <Row>Khoury College of Computer Sciences</Row>
        <Row>Northeastern University</Row>
        <Row><b>Email:</b> r.sun AT northeastern.edu <br/></Row>
        <Row style={{paddingTop: "1.5em"}}/>
        <Row className="h6">Assistant Professor, joining FIU fall'22 </Row>
        {/* <Row className="h6">joining FIU fall'22</Row> */}

        {/* <Row><b>Campus Address:</b> 634 ISEC, 805 Columbus Ave</Row> */}
        <Row style={{paddingTop: "1em"}}/>
    </Container>
)

const profilePhoto = () => (
    <Image src={profImageVeritcal} fluid/>
)

export default Intro;
