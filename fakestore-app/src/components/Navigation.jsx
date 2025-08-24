import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">FakeStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}