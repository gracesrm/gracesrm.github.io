import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Education = () => {
    return (
        <Container id="education">
            <Row><h1>Education <a href="#education">[CV]</a></h1></Row>
            <Row>
                <ul>
                    <li>Doctor of Philosophy, Aug 2014 - May 2019</li>
                    <a href="http://www.ece.ufl.edu/">Electrical and Computer Engineering</a>,
                    <a href="http://www.ufl.edu/">University of Florida</a>, US<br />

                    <li>Master of Science, Aug 2012 - May 2014</li>
                    <a href="http://www.ece.ufl.edu/">Electrical and Computer Engineering</a>,
                    <a href="http://www.ufl.edu/">University of Florida</a>, US<br />

                    <li>Bachelor of Science, Aug 2008 - June 2012</li>
                    Thesis: Wireless Pulse Signal Measurement and Analysis System. <b><a href="paper/undergrad-thesis.pdf"> [PDF]</a></b><br/>
                    <a href="http://ins.seu.edu.cn/">Instrument Science and Engineering</a>,
                    <a href="http://www.seu.edu.cn/">Southeast University</a>, China<br /><br/>
                </ul>
            </Row>
        </Container>
    );
}

export default Education;
