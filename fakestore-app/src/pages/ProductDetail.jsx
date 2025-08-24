import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Row, Col, Button, Badge, Alert } from "react-bootstrap";
import Loader from "../components/Loader.jsx";
import ErrorAlert from "../components/ErrorAlert.jsx";
import DeleteConfirmModal from "../components/DeleteConfirmModal.jsx";
import { fetchProduct, deleteProduct } from "../services/api.js";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [addedMsg, setAddedMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (e) {
        setError(e.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  async function handleDelete() {
    setDeleting(true);
    try {
      await deleteProduct(id);
      // NOTE: FakeStoreAPI responds success but does not truly delete the product (mock behavior).
      navigate("/products", { replace: true });
    } catch (e) {
      setError(e.message || "Failed to delete product");
    } finally {
      setDeleting(false);
    }
  }

  if (loading) return <Loader />;
  if (error) return <ErrorAlert message={error} />;
  if (!product) return <Alert variant="warning">Product not found.</Alert>;

  return (
    <>
      <Row className="align-items-start g-4">
        <Col md={5} className="text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{maxHeight: 380, width: "auto", objectFit: "contain"}}
            className="img-fluid"
          />
        </Col>
        <Col md={7}>
          <h3 className="mb-2">{product.title}</h3>
          <Badge bg="secondary" className="mb-3">{product.category}</Badge>
          <h4 className="fw-bold mb-3">${product.price}</h4>
          <p className="text-muted">{product.description}</p>

          {addedMsg && <Alert variant="success" className="py-2">{addedMsg}</Alert>}

          <div className="d-flex gap-2 mt-3">
            <Button variant="success" onClick={() => setAddedMsg("Added to cart (demo).")}>
              Add to Cart
            </Button>
            <Button as={Link} to={`/edit-product/${product.id}`} variant="warning">
              Edit
            </Button>
            <Button variant="danger" onClick={() => setConfirmOpen(true)}>
              Delete
            </Button>
            <Button variant="outline-secondary" as={Link} to="/products">
              Back to List
            </Button>
          </div>
        </Col>
      </Row>

      <DeleteConfirmModal
        show={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
        itemLabel={product.title}
      />
      {deleting && <Alert variant="warning" className="mt-3">Deleting...</Alert>}
    </>
  );
}