import axios from "axios";

const API = "http://localhost:5000/api/upload";

export async function uploadImage(file) {

  const formData = new FormData();

  formData.append("image", file);

  const response = await axios.post(
    API,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;

}