import { useEffect, useState } from "react";

import {
  getProducts,
  deleteProduct,
} from "../services/productService";

export default function useProducts() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadProducts() {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadProducts();

  }, []);

  async function removeProduct(id) {

    await deleteProduct(id);

    loadProducts();

  }

  return {

    products,

    loading,

    loadProducts,

    removeProduct,

  };

}