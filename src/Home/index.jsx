import React from 'react';
import Row from 'react-bootstrap/Row';
import Intro from './Intro';
import News from './News';
import Container from 'react-bootstrap/Container';


const Home = () => {
    return (
        <Container>
            <Intro></Intro>
            <News></News>
            <Row
                className="justify-content-center"
                style={{paddingTop: "5em"}}>
                    {/* <h3>Guest Lecturer</h3> */}
            </Row>
        </Container>
    )
}

export default Home;
