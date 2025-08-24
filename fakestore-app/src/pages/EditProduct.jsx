import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ProductForm from "../components/ProductForm.jsx";
import { fetchProduct, updateProduct } from "../services/api.js";

export default function EditProduct() {
  const { id } = useParams();
  const [initial, setInitial]     = useState(null);
  const [loading, setLoading]     = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]     = useState("");
  const [error, setError]         = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProduct(id);
        setInitial({
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
        });
      } catch (e) {
        setError(e.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  async function handleUpdate(payload) {
    setSubmitting(true);
    setSuccess(""); setError("");
    try {
      await updateProduct(id, payload);
      // Note: FakeStoreAPI responds success, but changes won't persist after refresh.
      setSuccess("Product updated (mock). FakeStoreAPI confirms, but it won't persist.");
    } catch (e) {
      setError(e.message || "Failed to update product");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error)   return <Alert variant="danger">{error}</Alert>;
  if (!initial) return <Alert variant="warning">Product not found.</Alert>;

  return (
    <>
      <h2 className="mb-3">✏️ Edit Product</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <ProductForm initialValues={initial} onSubmit={handleUpdate} submitting={submitting} />
    </>
  );
}