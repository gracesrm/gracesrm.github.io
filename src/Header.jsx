import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


const Navigation = () => {
    const padding = { paddingLeft: "4em", paddingRight: "4em"};
    return (
        <Navbar 
            collapseOnSelect 
            expand="lg" 
            variant="dark"
            className="neu_bg_red py-1"
        >
            {/* <Navbar.Brand href="#home">Ruimin Sun</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="/" style={padding}><b>Home</b></Nav.Link>
                <Nav.Link href="/research" style={padding}><b>Research</b></Nav.Link>
                <Nav.Link href="/teaching" style={padding}><b>Teaching</b></Nav.Link>
                <Nav.Link href="https://gracesrm.github.io/paper/Ruimin-CV.pdf" style={padding}><b>Vita</b></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default Navigation;
