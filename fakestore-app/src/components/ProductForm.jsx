import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const defaultValues = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "https://via.placeholder.com/300x300?text=Product",
};

export default function ProductForm({ initialValues, onSubmit, submitting }) {
  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    if (initialValues) {
      setValues({ ...defaultValues, ...initialValues });
    }
  }, [initialValues]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: values.title.trim(),
      price: Number(values.price),
      description: values.description.trim(),
      category: values.category.trim(),
      image: values.image || defaultValues.image,
    };
    onSubmit(payload);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Col md={6}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" value={values.title} onChange={handleChange} required />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" value={values.price} onChange={handleChange} required min="0" step="0.01" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" value={values.category} onChange={handleChange} required />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} name="description" value={values.description} onChange={handleChange} required />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group controlId="image">
            <Form.Label>Image URL (optional)</Form.Label>
            <Form.Control name="image" value={values.image} onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Button type="submit" variant="success" disabled={submitting}>
            {submitting ? "Saving..." : "Save"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}