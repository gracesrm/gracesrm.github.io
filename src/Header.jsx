import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { NavLink } from 'react-router-dom';
import cv from './Assets/ruimin-neu-cv.pdf'


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
                <Nav.Link href={cv} style={padding}><b>Vita</b></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default Navigation;
