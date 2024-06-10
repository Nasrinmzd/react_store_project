import axios from "axios";
// import { useEffect } from "react";
// import useNavigate from "react-router-dom" 

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
});


instance.interceptors.request.use((config) => {

  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
}

);
