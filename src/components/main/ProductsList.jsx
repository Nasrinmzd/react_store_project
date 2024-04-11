import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";

function ProductsList() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="w-4/5 grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} >
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
