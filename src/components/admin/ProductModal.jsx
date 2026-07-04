import { useEffect, useState } from "react";
import "./ProductModal.css";

import { uploadImage } from "../../services/uploadService";

import {
  addProduct,
  updateProduct,
} from "../../services/productService";

function ProductModal({
  isOpen,
  onClose,
  onSuccess,
  editMode = false,
  productData = null,
}) {

  const emptyProduct = {
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
    status: "Available",
  };

  const [product, setProduct] = useState(emptyProduct);

  const [preview, setPreview] = useState("");

  const [uploading, setUploading] = useState(false);

  useEffect(() => {

    if (editMode && productData) {

      setProduct(productData);

      if (productData.image) {

        setPreview(
          `http://localhost:5000/uploads/${productData.image}`
        );

      }

    } else {

      setProduct(emptyProduct);

      setPreview("");

    }

  }, [editMode, productData]);

  function handleChange(e) {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  }

  async function handleImageChange(e) {

    const file = e.target.files[0];

    if (!file) return;

    // Preview immediately
    setPreview(URL.createObjectURL(file));

    try {

      setUploading(true);

      const data = await uploadImage(file);

      setProduct(prev => ({
        ...prev,
        image: data.filename,
      }));

    } catch (err) {

      console.error(err);

      alert("Image Upload Failed");

    } finally {

      setUploading(false);

    }

  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      if (editMode) {

        await updateProduct(product.id, product);

        alert("✅ Product Updated Successfully");

      } else {

        await addProduct(product);

        alert("✅ Product Added Successfully");

      }

      onSuccess();

      onClose();

    } catch (err) {

      console.error(err);

      alert("Operation Failed");

    }

  }

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="product-modal">

        <h2>

          {editMode ? "Edit Product" : "Add Product"}

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
          />

          <label>Product Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {uploading && (

            <p>Uploading image...</p>

          )}

          {preview && (

            <img
              src={preview}
              alt="Preview"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            />

          )}

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
          />

          <select
            name="status"
            value={product.status}
            onChange={handleChange}
          >

            <option>Available</option>

            <option>Out of Stock</option>

          </select>

          <div className="modal-actions">

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={uploading}
            >

              {uploading
                ? "Uploading..."
                : editMode
                ? "Update Product"
                : "Save Product"}

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default ProductModal;