import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

import './header.css'


function header() {
  return (


    <div className="navbar-fixed">
 
      <nav className="green accent-3 ">
        <div className="container">
          <div className="nav-wrapper left">
            <Link to="/"className="brand-logo ">MarketPlace</Link>
          </div>
          <div className="right">
            <ul id="nav-mobile" className="" >
              {/* <li><Link to="/">Home</Link></li> */}
         
              <li><Link to ="/" className="dropdown-trigger" data-target="id_drop">Menu
                 <i className="material-icons right">person_outline</i></Link></li>
            </ul>
            <ul className="dropdown-content" id="id_drop">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
          </div>
        </div>
      </nav>
      
    </div>
    // <Navbar default collapseOnSelect>
    //   <Navbar.Brand>
    //     <Link to="/">MarketPlace</Link>
    //   </Navbar.Brand>

    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link><Link to="/">Home</Link></Nav.Link>

    //       <NavDropdown title="Menu" id="basic-nav-dropdown">
    //      <Link to="/login" className="dropdown-item">Login</Link>
    //         <NavDropdown.Item><Link to="/register">Register</Link></NavDropdown.Item>

    //         <NavDropdown.Divider />

    //       </NavDropdown>
    //     </Nav>

    //   </Navbar.Collapse>
    // </Navbar>

  );
}

export default header;