import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ParagraphContainer = (props) => {
    return (
        <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
                {props.children}
            </Col>
            <Col lg={2}></Col>
        </Row>
    );
}

export default ParagraphContainer;
