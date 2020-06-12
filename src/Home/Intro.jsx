import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profImageVeritcal from '../Assets/profile_s.jpg';
import ParagraphContainer from '../ParagraphContainer';


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
            </ParagraphContainer>
        </Container>
    )
}

const intro = () => (
    <Container>
        <Row style={{paddingTop: "0.5em"}} className="h3">Ruimin Sun (孙睿敏)</Row>
        <Row className="h6"><em>Postdoctoral Research Associate</em></Row>
        <Row style={{paddingTop: "1.5em"}}/>
        <Row>Khoury College of Computer Sciences</Row>
        <Row>Northeastern University</Row>
        <Row style={{paddingTop: "1.5em"}}/>
        <Row><b>Email:</b> r.sun@northeastern.edu <br/></Row>
        {/* <Row><b>Campus Address:</b> 634 ISEC, 805 Columbus Ave</Row> */}
        <Row style={{paddingTop: "1em"}}/>
    </Container>
)

const profilePhoto = () => (
    <Image src={profImageVeritcal} fluid/>
)

export default Intro;
