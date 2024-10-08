// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className = "px-5">Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className = "px-5 justify-content-end" id="basic-navbar-nav ">
      <Nav activeKey="/home">
      
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    
  );
};

export default NavBar;
