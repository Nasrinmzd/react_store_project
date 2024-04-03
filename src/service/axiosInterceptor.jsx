import axios from "axios";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  
  return response.data;
});

export default instance;
