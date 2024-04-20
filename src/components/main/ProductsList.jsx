import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Loader from "../Loader";

function ProductsList({ searchTerm }) {
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log(products)
  useEffect(() => {
    let filtered = category
      ? products.filter((product) => product.category?.toString() === category)
      : products;


      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProducts(filtered)
  }, [category, products, searchTerm]);


  if (isLoading) return <Loader />


  return (
    <div className="w-3/4 grid grid-cols-4 gap-4 mx-3">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
