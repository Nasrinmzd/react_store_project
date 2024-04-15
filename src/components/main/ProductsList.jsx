import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

function ProductsList() {
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const filter = category
      ? products.filter((product) => product.category?.toString() === category)
      : products;

      setFilteredProducts(filter)
  }, [category, products]);

  if (isLoading) {
    return <div>loading</div>;
  }

  // console.log(filteredProducts);

  return (
    <div className="w-4/5 grid grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
