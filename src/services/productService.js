import axios from "axios";

const API = "http://localhost:5000/api/products";

export async function getProducts() {
  const response = await axios.get(API);
  return response.data;
}

export async function addProduct(product) {
  const response = await axios.post(API, product);
  return response.data;
}

export async function updateProduct(id, product) {
  const response = await axios.put(
    `${API}/${id}`,
    product
  );
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axios.delete(
    `${API}/${id}`
  );
  return response.data;
}