import React from 'react'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


function header() {
  return (
  
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">MarketPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>

              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
   
  );
}

export default header;