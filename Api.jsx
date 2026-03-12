import axios from "axios";

const api = axios.create({
  baseURL: "https://stayeasy-black.vercel.app/api/user/login", // 👈 ye Vite proxy use karega
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
