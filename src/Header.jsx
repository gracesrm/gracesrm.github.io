import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import './App.css';

const labPaths = ['/lab', '/team', '/publication', '/sponsor', '/awards', '/talks'];

const Navigation = () => {
  const { pathname } = useLocation();
  const labNavigation = labPaths.includes(pathname);

  return (
    <Navbar className="site-navbar" expand="lg" variant="light" bg="light">
      <Container fluid>
        {labNavigation && (
          <Navbar.Brand as={NavLink} to="/lab">RiS3 Lab</Navbar.Brand>
        )}
        <Navbar.Toggle className={labNavigation ? '' : 'ml-auto'} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {labNavigation ? (
            <Nav className="ml-auto">
              <Nav.Link className="site-nav-link" as={NavLink} to="/team"><b>Team</b></Nav.Link>
              <Nav.Link className="site-nav-link" as={NavLink} to="/publication"><b>Publication</b></Nav.Link>
              <Nav.Link className="site-nav-link" as={NavLink} to="/sponsor"><b>Sponsor</b></Nav.Link>
              <Nav.Link className="site-nav-link" as={NavLink} to="/awards"><b>Awards</b></Nav.Link>
              <Nav.Link className="site-nav-link" as={NavLink} to="/talks"><b>Talks</b></Nav.Link>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link className="site-nav-link" exact as={NavLink} to="/home"><b>Home</b></Nav.Link>
              <Nav.Link className="site-nav-link site-nav-link--lab" as={NavLink} to="/lab"><b>RiS3 Lab</b></Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
