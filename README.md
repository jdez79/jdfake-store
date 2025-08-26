#  FakeStore E-Commerce App

A single-page React application that simulates a functional e-commerce store using the [FakeStoreAPI](https://fakestoreapi.com/). Developed with React, React Router, and React Bootstrap, this app allows users to view, create, update, and delete products dynamically.

##  Key Features

- **Browse Products**: View a list of products retrieved from the FakeStore API.
- **Product Details**: Click on a product to view its detailed information.
- **Add Product**: Use a form to POST a new product to the API (mock behavior—API returns success but does not persist).
- **Edit Product**: Update existing products via a pre-filled form.
- **Delete Product**: Remove a product with a confirmation modal (mock behavior).
- **Navigation**: Utilizes React Router for smooth, single-page navigation.
- **Responsive UI**: Styled using React Bootstrap for mobile-friendly layout.
- **Loading & Error Handling**: Includes spinners and alerts for better UX during fetch operations.

##  Project Structure

src/
├── components/
│ ├── Navigation.jsx
│ ├── ProductCard.jsx
│ ├── ProductForm.jsx
│ ├── Loader.jsx
│ ├── ErrorAlert.jsx
│ └── DeleteConfirmModal.jsx
├── pages/
│ ├── Home.jsx
│ ├── ProductList.jsx
│ ├── ProductDetail.jsx
│ ├── AddProduct.jsx
│ └── EditProduct.jsx
├── services/
│ └── api.js
├── App.jsx
└── index.jsx

markdown
Copy
Edit

- **components/** — reusable UI components (cards, forms, modals, load/error indicators).
- **pages/** — view components for routing: Home, Product List, Product Detail, Add, and Edit.
- **services/api.js** — centralized functions for `GET`, `POST`, `PUT`, and `DELETE` operations with FakeStoreAPI.
- **App.jsx** — main app logic with React Router setup and state orchestration.
- **index.jsx** — app entry point with React and React Router initialization.

##  Prerequisites

- [Node.js](https://nodejs.org/) installed (LTS recommended).

##  Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/jdez79/jdfake-store.git
cd jdfake-store
