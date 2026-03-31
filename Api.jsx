import axios from "axios";

const Api = axios.create({
  baseURL: "https://staybackend-gcj8.onrender.com"
});

export default Api;