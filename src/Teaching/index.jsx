import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ParagraphContainer from '../ParagraphContainer';


const Teaching = () => (
    <Container>
        <Row
            className="justify-content-center"
            style={{paddingTop: "1.5em"}}>
                <h3>Teaching</h3>
        </Row>
        <ParagraphContainer>
            <ul>
                <li className="text-left">
                    Supervised Teaching: Cross-Layer Computer Security (EEL4930/EEL5934), Spring 2016
                </li>
                <li className="text-left">
                    Supervised Teaching: Cross-Layer Computer Security (EEL4930/EEL5934), Spring 2015, 
                    <a href="src/4930-5934-syllabus-Sp16.pdf">Syllabus</a>.
                </li>    
            </ul>
        </ParagraphContainer>
    </Container>
);


export default Teaching;
