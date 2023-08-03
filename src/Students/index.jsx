import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Paragraph from '../ParagraphContainer';
import '../AppVanillaHtml.css';


const Students = () => (
    <Container>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
                <h3>PhD Students</h3>
        </Row>
        <Paragraph>
            <ol >
                <li className='text-left li_padding_bottom'> Samin Yasar Chowdhury </li>
                <li className="text-left li_padding_bottom"> Mohammed Al Duniawi </li>     
                <li className="text-left li_padding_bottom"> Qiming Guo </li>       
            </ol>
        </Paragraph>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
                <h3>Master Students</h3>
        </Row>
        <Paragraph>
            <ol >
                {/* <li className="text-left li_padding_bottom"> Mohammed Al Duniawi </li>     
                <li className="text-left li_padding_bottom"> Qiming Guo </li>        */}
            </ol>
        </Paragraph>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
                <h3>Undergraduate Students</h3>
        </Row>
        <Paragraph>
            <ol >
                {/* <li className="text-left li_padding_bottom"> Mohammed Al Duniawi </li>     
                <li className="text-left li_padding_bottom"> Qiming Guo </li>        */}
            </ol>
        </Paragraph>
        {/* <ParagraphContainer>
            <ol>
                
                
                   
            </ol>
        </ParagraphContainer> */}
    </Container>
);


export default Students;
