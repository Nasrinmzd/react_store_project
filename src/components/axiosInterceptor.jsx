import axios from "axios";



axios.interceptors.request.use((config) =>{
    const token = Cookies.get('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export default axios;
