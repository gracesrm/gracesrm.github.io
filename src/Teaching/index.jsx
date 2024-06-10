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
                <li className="text-left li_padding_bottom">
                    <dt>Principles of Cybersecurity (CIS 5370)</dt>
                    Florida International University
                    <div><b>Lecturer</b>: fall'22, spring'23, fall'23, fall'24</div>
                    {/* <dd><a href="https://www.ece.ufl.edu/wp-content/uploads/syllabi/Spring2017/EEL5934_Cross_Layer_Sec_Spring_2017.pdf">Syllabus</a></dd> */}
                </li>
                <li className="text-left li_padding_bottom">
                    <dt>Systems Security (CY 3740)</dt>
                    Northeastern University
                    <div><b>Lecturer</b>: summer'21</div>
                    {/* <dd><a href="https://www.ece.ufl.edu/wp-content/uploads/syllabi/Spring2017/EEL5934_Cross_Layer_Sec_Spring_2017.pdf">Syllabus</a></dd> */}
                </li>
                <li className="text-left">
                    <dt>Cross-Layer Computer Security (EEL4930/EEL5934)</dt>
                    University of Florida
                    <div><b>Guest Lecturer</b>: 2015 - 2019</div>
                    {/* <dd>Supervised Teaching: 2015, 2016 </dd> */}
                    <div>Assisted syllabus and exams: 2015, 2016</div>
                    {/* <dd><a href="https://www.ece.ufl.edu/wp-content/uploads/syllabi/Spring2017/EEL5934_Cross_Layer_Sec_Spring_2017.pdf">Syllabus</a></dd> */}
                </li>
                
                   
            </ol>
        </ParagraphContainer>
    </Container>
);


export default Teaching;
