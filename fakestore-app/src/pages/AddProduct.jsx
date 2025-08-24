import { useState } from "react";
import { Alert } from "react-bootstrap";
import ProductForm from "../components/ProductForm.jsx";
import { createProduct } from "../services/api.js";

export default function AddProduct() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState("");
  const [error, setError]           = useState("");

  async function handleCreate(payload) {
    setSubmitting(true);
    setSuccess(""); setError("");
    try {
      await createProduct(payload);
      // Note: FakeStoreAPI returns success but does not persist new products permanently.
      setSuccess("Product created (mock). The FakeStoreAPI confirms receipt, but it won't persist.");
    } catch (e) {
      setError(e.message || "Failed to create product");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <h2 className="mb-3">➕ Add Product</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <ProductForm onSubmit={handleCreate} submitting={submitting} />
    </>
  );
}