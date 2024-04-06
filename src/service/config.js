import axios from "axios";
// import { useEffect } from "react";
// import useNavigate from "react-router-dom" 

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

// function AxiosInterceptor({ children }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const resInterceptor = (response) => {
//       return response.data;
//     };
//     const errInterceptor = (error) => {
//       if (error.response.status === 401) {
//         navigate('/login');
//     }
//       return Promise.reject(error);
//     };

//     const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

//     return () => instance.interceptors.response.eject(interceptor);


//   }, [navigate]);

//   return children;
// }
// export default instance;
// export {AxiosInterceptor}

instance.interceptors.request.use((config) => {

  return config;
});

instance.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}

);
