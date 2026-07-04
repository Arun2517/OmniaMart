import axios from "axios";

const API = "http://localhost:5000/api/auth";

export async function registerUser(userData) {
  const response = await axios.post(
    `${API}/register`,
    userData
  );

  return response.data;
}

export async function loginUser(userData) {
  const response = await axios.post(
    `${API}/login`,
    userData
  );

  return response.data;
}