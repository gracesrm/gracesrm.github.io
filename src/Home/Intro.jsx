import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profImage from '../Assets/profile-NEU.jpg';
import ParagraphContainer from '../ParagraphContainer';


const Intro = () => {
    const no_col_padding = {
        paddingLeft: 0,
        paddingRight: 0,
    }
    return (
        <Container fluid id="home">
            <Row>
                <Col md={6} style={no_col_padding}>{profilePhoto()}</Col>
                <Col md={6} style={no_col_padding}>{introCard()}</Col>
                
            </Row>
            <ParagraphContainer>
                <br/>
                <p>
                I'm a Postdoctoral Research Associate in the Khoury College of Computer Sciences, working with <a href="https://www.longlu.org/">Dr. Long Lu</a>. 
        My research aims at securing ubiquitous systems (desktop, mobile, IoT/CPS).
        My recent works include PLC protection, and proprietary AI protection on the edge devices.
                </p>
            </ParagraphContainer>
        </Container>
    )
}

const introCard = () => (
    <Card style={{height: "100%"}}> 
        <Card.Body variance="left">
            <Card.Title>Ruimin Sun</Card.Title>
            <Card.Subtitle>
                Postdoctoral Research Associate <br/>
            </Card.Subtitle>
            <br/>
            <Card.Text>
                Khoury College of Computer Sciences <br/>
                Northeastern University <br/><br/>
                <b>Email:</b> r.sun at northeastern dot edu <br/>
                <b>Campus Address:</b> 634 ISEC, 805 Columbus Ave
            </Card.Text>
        </Card.Body>
        {/* <Card.Img variance="right" src={profImage} /> */}
        
    </Card>   
)

const profilePhoto = () => (
    <Image src={profImage} fluid/>
)

export default Intro;
