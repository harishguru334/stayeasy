import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 👈 ye Vite proxy use karega
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
