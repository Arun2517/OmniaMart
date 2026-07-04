import axios from "axios";

const API = "http://localhost:5000/api/products";

function getAuthHeader() {

  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

}

export async function getProducts() {

  const response = await axios.get(API);

  return response.data;

}

export async function getProduct(id) {

  const response = await axios.get(`${API}/${id}`);

  return response.data;

}

export async function addProduct(product) {

  const response = await axios.post(
    API,
    product,
    getAuthHeader()
  );

  return response.data;

}

export async function updateProduct(id, product) {

  const response = await axios.put(
    `${API}/${id}`,
    product,
    getAuthHeader()
  );

  return response.data;

}

export async function deleteProduct(id) {

  const response = await axios.delete(
    `${API}/${id}`,
    getAuthHeader()
  );

  return response.data;

}