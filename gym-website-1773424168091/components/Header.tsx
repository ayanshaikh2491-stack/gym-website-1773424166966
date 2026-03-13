import Link from 'next/link';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Gym Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/membership" className="nav-link">
              Membership
            </Link>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;