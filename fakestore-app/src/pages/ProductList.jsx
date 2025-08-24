import { useEffect, useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../components/ProductCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorAlert from "../components/ErrorAlert.jsx";
import { fetchProducts } from "../services/api.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        setError(e.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <>
      <h2 className="mb-3">🛍 Products</h2>
      {products.length === 0 ? (
        <Alert variant="info">No products found.</Alert>
      ) : (
        <Row className="g-3">
          {products.map((p) => (
            <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={p} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}