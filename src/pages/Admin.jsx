import { useState } from "react";

import AdminLayout from "../components/admin/AdminLayout";
import DashboardCards from "../components/admin/DashboardCards";
import ProductTable from "../components/admin/ProductTable";
import ProductModal from "../components/admin/ProductModal";

import useProducts from "../hooks/useProducts";

function Admin() {

  const {
    products,
    loading,
    loadProducts,
    removeProduct,
  } = useProducts();

  const [showModal, setShowModal] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleAdd() {

    setEditMode(false);

    setSelectedProduct(null);

    setShowModal(true);

  }

  function handleEdit(product) {

    setEditMode(true);

    setSelectedProduct(product);

    setShowModal(true);

  }

  function closeModal() {

    setShowModal(false);

    setEditMode(false);

    setSelectedProduct(null);

  }

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <AdminLayout>

      <DashboardCards />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >

        <h2>Products</h2>

        <button
          onClick={handleAdd}
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          + Add Product
        </button>

      </div>

      <ProductTable
        products={products}
        onDelete={removeProduct}
        onEdit={handleEdit}
      />

      <ProductModal
        isOpen={showModal}
        onClose={closeModal}
        onSuccess={loadProducts}
        editMode={editMode}
        productData={selectedProduct}
      />

    </AdminLayout>

  );

}

export default Admin;