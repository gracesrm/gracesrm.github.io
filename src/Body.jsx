import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Body = (props) => {
    return (
        <Container>
            {React.Children.map(props.children, (child) => (<Row>{child}</Row>))}
        </Container>
    )
}

export default Body;
