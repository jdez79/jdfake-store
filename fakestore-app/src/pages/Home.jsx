import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container className="text-center my-5">
      <h1 className="mb-3">Welcome to FakeStore 🏬</h1>
      <p className="text-muted">
        Explore products, view details, and simulate creating, updating, and deleting items via FakeStoreAPI.
      </p>
      <Button variant="primary" onClick={() => navigate("/products")}>
        Browse Products
      </Button>
    </Container>
  );
}