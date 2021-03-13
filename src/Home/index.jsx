import React from 'react';
import Intro from './Intro';
import News from './News';
import Container from 'react-bootstrap/Container';

const Home = () => {
    return (
        <Container>
            <Intro></Intro>
            <News></News>
        </Container>
    )
}

export default Home;
