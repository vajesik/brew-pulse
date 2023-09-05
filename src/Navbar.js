import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex">

      <Nav className="me-auto">
        <Nav.Link href="#home" className="mr-3">
          HOME
        </Nav.Link>
        <Nav.Link href="#link" className="mr-3">
          ABOUT US
        </Nav.Link>
        <Nav.Link href="#link" className="mr-3">
          FIND BREWERIES
        </Nav.Link>
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
