import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

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
        <LinkContainer to="/featured_breweries">
          <Nav.Link className="mr-3">FEATURED BREWERIES</Nav.Link>
        </LinkContainer>
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
