import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

instance.interceptors.request.use((config) => {

  return config;
});

instance.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
});

