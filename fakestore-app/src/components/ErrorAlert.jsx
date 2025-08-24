import { Alert } from "react-bootstrap";
export default function ErrorAlert({ message = "Something went wrong. Please try again." }) {
  return <Alert variant="danger" className="my-3">{message}</Alert>;
}