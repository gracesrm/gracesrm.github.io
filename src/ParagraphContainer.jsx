import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ParagraphContainer = (props) => {
    const zeroPadding = { padding: 0 };
    return (
        <Row>
            <Col lg={2} style={zeroPadding}></Col>
            <Col lg={8} style={zeroPadding}>
                {props.children}
            </Col>
            <Col lg={2} style={zeroPadding}></Col>
        </Row>
    );
}

export default ParagraphContainer;
