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
                <li className='text-left li_padding_bottom'> Samin Yasar Chowdhury (Spring'23 - present)</li>
                <li className="text-left li_padding_bottom"> Mohammed Al Duniawi (Fall'23 - present)</li>     
                <li className="text-left li_padding_bottom"> Qiming Guo (Fall'23 - present) </li>       
            </ol>
        </Paragraph>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
        </Row>
        <Paragraph>
            <ol >
            <h3>Master Students</h3>
                <li className='text-left li_padding_bottom'> Tushar Nayan (Summer'23 - present) </li>
                <li className='text-left li_padding_bottom'> Sai Siva Prabhu Teja Kondapalli (Fall'23)</li>
                <li className="text-left li_padding_bottom"> Srimant Kumar Mohanty (Summer'23) </li>    
            </ol>
        </Paragraph>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
        </Row>
        <Paragraph>
            <ol >
            <h3>Undergraduate Students</h3>
                <li className="text-left li_padding_bottom"> Adonis Paulino (Summer'23) </li> 
                <li className="text-left li_padding_bottom"> Danielle Leon (Fall'23) </li> 
            </ol>
        </Paragraph>
        <Row className="justify-content-center" style={{paddingTop: "1.5em"}}>
        </Row>
        <Paragraph>
            <ol >
            <h3>K-12 Students</h3>
                <li className="text-left li_padding_bottom"> Eric Xu (Summer'23) </li> 
            </ol>
        </Paragraph>
        {/* <ParagraphContainer>
            <ol>
                
                
                   
            </ol>
        </ParagraphContainer> */}
    </Container>
);


export default Students;
