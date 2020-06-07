import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Ruimin Sun</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/research">Research</Nav.Link>
                <Nav.Link href="/teaching">Teaching</Nav.Link>
                <Nav.Link href="https://gracesrm.github.io/paper/Ruimin-CV.pdf">Vita</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default Navigation;
