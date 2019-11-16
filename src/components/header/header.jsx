import React from 'react'
import {Link} from 'react-router-dom'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './header.css'


function header() {
  return (
  
      <Navbar default collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">MarketPlace</Link>
        </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          
            <NavDropdown title="Menu" id="basic-nav-dropdown">
           <Link to="/login" className="dropdown-item">Login</Link>
              <NavDropdown.Item><Link to="/register">Register</Link></NavDropdown.Item>

              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>

  );
}

export default header;