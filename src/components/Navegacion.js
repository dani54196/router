import React, { Component } from "react";
import './navegacion.css';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class Navegacion extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container-xl">
            <Navbar.Brand href="#home">React-Router</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link><Link to="/" className="link">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="/acercade" className="link">Acerca de</Link></Nav.Link>
                <NavDropdown title="Nose" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/contacto" className="link">Contacto</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
