import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <div className="p-3 d-flex align-items-center justify-content-center" style={{height: 240}}>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{maxHeight: 220, width: "auto", objectFit: "contain"}}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="fw-bold mb-3">${product.price}</Card.Text>
        <Button as={Link} to={`/products/${product.id}`} variant="primary" className="mt-auto">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}