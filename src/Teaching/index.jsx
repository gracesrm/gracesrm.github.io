import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Teaching = () => (
    <Container>
        <Row className="justify-content-center"><h1>Teaching</h1></Row>
        <Row>
            <ul className="list-unstyled">
                <li>
                    Supervised Teaching: Cross-Layer Computer Security (EEL4930/EEL5934), Spring 2016
                </li>
                <li>
                    Supervised Teaching: Cross-Layer Computer Security (EEL4930/EEL5934), Spring 2015, 
                    <a href="src/4930-5934-syllabus-Sp16.pdf">Syllabus</a>.
                </li>    
            </ul>
        </Row>
    </Container>
);


export default Teaching;
