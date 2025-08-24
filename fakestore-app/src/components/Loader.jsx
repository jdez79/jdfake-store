import { Spinner } from "react-bootstrap";
export default function Loader() {
  return (
    <div className="py-5 text-center">
      <Spinner animation="border" role="status" />
    </div>
  );
}