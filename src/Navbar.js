import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

function NavbarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex">
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link className="mr-3">HOME</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link className="mr-3">ABOUT US</Nav.Link>
        </LinkContainer>
        <NavDropdown
          title="FEATURED BREWERIES"
          href="/featured_breweries"
          className="mr-3"
        >
          <LinkContainer to="/featured_towns">
            <NavDropdown.Item>FEATURED TOWNS</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/featured_towns/Portland">
            <NavDropdown.Item>PORTLAND, OR</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/featured_towns/Vancouver">
            <NavDropdown.Item>VANCOUVER, WA</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/featured_towns/Estes Park">
            <NavDropdown.Item>ESTES PARK, CO</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/featured_towns/Ouray">
            <NavDropdown.Item>OURAY/RIDGWAY, CO</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/search">
          <Nav.Link className="mr-3">FIND BREWERIES NEAR YOU</Nav.Link>
        </LinkContainer>
      </Nav>

      <Navbar.Brand href="#home" className="ml-auto">
        <img
          src="/brewpulselogo.png"
          alt="Brew Pulse Logo"
          height="75"
          className="d-inline-block"
          width="95"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

export default NavbarNav;
