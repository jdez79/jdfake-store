import { Modal, Button } from "react-bootstrap";

export default function DeleteConfirmModal({ show, onClose, onConfirm, itemLabel = "this product" }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {itemLabel}? This will call the API and then redirect you to the list.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}