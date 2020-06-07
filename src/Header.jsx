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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#research">Research</Nav.Link>
                <Nav.Link href="#vita">Vita</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default Navigation;
