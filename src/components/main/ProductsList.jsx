import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";

function ProductsList() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-4/5 grid grid-cols-4 gap-2 place-items-center">
      {products.map((product) => (
          <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
