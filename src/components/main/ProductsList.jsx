import { useProducts } from "../../context/ProductContext";


// import ProductItem from "./ProductItem";

function ProductsList() {
  const { products, isLoading } = useProducts();
  console.log(products);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="bg-red-600 w-4/5">
      {products.map((product) => (
          <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
