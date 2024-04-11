import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../service/config";
import {toast} from "react-toastify"

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await instance.get("/products")
        setProducts(res.products);
      } catch(error) {
        toast.error('There was an error loading data...')
      }finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);



  useEffect(function () {
    async function fetchProductCategores() {
      try {
        setIsLoading(true);
        const res = await instance.get("/products/categories")
        setCategories(res);
      } catch(error) {
        toast.error('There was an error loading data...')
      }finally {
        setIsLoading(false);
      }
    }
    fetchProductCategores();
  }, []);





  return (
    <ProductContext.Provider value={{products, isLoading, categories}}>{children}</ProductContext.Provider>
  );
}

function useProducts(){
    const context = useContext(ProductContext)
    if(context === undefined) throw new Error("ProductContext was used outside the ProductProvider")
    return context
}

export { ProductProvider, useProducts };

