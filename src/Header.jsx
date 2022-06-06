import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { NavLink } from 'react-router-dom';
// import cv from './Downloads/CV/2021_ruimin-cv.pdf'
// import hiring from './Downloads/hiring/PhD_openings_fall22.pdf'


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
                <Nav.Link style={padding} as={NavLink} to="/"><b>Home</b></Nav.Link>
                <Nav.Link style={padding} as={NavLink} to="/research"><b>Research</b></Nav.Link>
                <Nav.Link style={padding} as={NavLink} to="/teaching"><b>Teaching</b></Nav.Link>
                <Nav.Link style={padding} as={NavLink} to="/service"><b>Service</b></Nav.Link>
                <Nav.Link style={padding} as={NavLink} to="/students"><b>Students</b></Nav.Link>

                {/* <Nav.Link style={padding} as={NavLink} to="/media"><b>Media Coverage</b></Nav.Link> */}
                {/* <Nav.Link href={cv} style={padding}><b>Vita</b></Nav.Link> */}
                {/* <Nav.Link href={hiring} style={padding}><b>Hiring</b></Nav.Link> */}

            </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default Navigation;
