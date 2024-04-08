import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../service/config";
import {toast} from "react-toastify"

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await instance.get("/products")
        console.log(res.data.products);
        setProducts(res.data.products);
      } catch(error) {
        toast.error('There was an error loading data...')
      }finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products, isLoading}}>{children}</ProductContext.Provider>
  );
}

function useProducts(){
    const context = useContext(ProductContext)
    if(context === undefined) throw new Error("ProductContext was used outside the ProductProvider")
    return context
}

export { ProductProvider, useProducts };

