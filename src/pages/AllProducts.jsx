import CategoriesList from "../components/main/CategoriesList";
import ProductsList from "../components/main/ProductsList";

function AllProducts({ searchTerm }) {
  return (
    <main className="flex flex-col justify-center md:flex-row m-2 h-full">
        <CategoriesList />
        <ProductsList searchTerm={searchTerm} />
    </main>
  );
}

export default AllProducts;
