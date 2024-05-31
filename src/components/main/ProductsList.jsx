import { useSearchParams  } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Loader from "../Loader";

function ProductsList({ searchTerm }) {
  const { products, isLoading } = useProducts();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const category = searchParams.get("category");


  useEffect(() => {
    let filtered = category ? products.filter((product) => product.category === category) : products;

      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProducts(filtered)

  }, [category, products, searchTerm]);
 
  console.log(filteredProducts);


  if (isLoading) return <Loader />


  return (
    <div className="w-[100%] lg:w-[85%] flex flex-wrap justify-center gap-3">
      {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
