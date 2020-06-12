import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ParagraphContainer from '../ParagraphContainer';
import '../AppVanillaHtml.css';


const Teaching = () => (
    <Container>
        <Row
            className="justify-content-center"
            style={{paddingTop: "1.5em"}}>
                {/* <h3>Guest Lecturer</h3> */}
        </Row>
        <ParagraphContainer>
            <ol>
                <li className="text-left">
                    <dt>Cross-Layer Computer Security (EEL4930/EEL5934)</dt>
                    <li><b>Guest Lecturer</b>: 2015, 2016, 2017, 2018, 2019</li>
                    {/* <dd>Supervised Teaching: 2015, 2016 </dd> */}
                    <li>Assisted syllabus and exams: 2015, 2016</li>
                    {/* <dd><a href="https://www.ece.ufl.edu/wp-content/uploads/syllabi/Spring2017/EEL5934_Cross_Layer_Sec_Spring_2017.pdf">Syllabus</a></dd> */}
                </li>
                
                   
            </ol>
        </ParagraphContainer>
    </Container>
);


export default Teaching;
