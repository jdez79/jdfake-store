import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

export default function App() {
  return (
    <>
      <Navigation />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Container>
    </>
  );
}