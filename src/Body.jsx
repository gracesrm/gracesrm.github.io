import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Body = (props) => {
    return (
        // not sure how it works but no fluid here seems to scale well
        <Container>
            {React.Children.map(props.children, (child) => (<Row>{child}</Row>))}
            {/* <Row>{props.children}</Row> */}
        </Container>
    )
}

export default Body;
