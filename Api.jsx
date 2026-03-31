import axios from "axios";

const Api = axios.create({
  baseURL: "https://your-backend.onrender.com"
});

export default Api;