import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import CategoriesItem from "./CategoriesItem";
import Loader from "../Loader";

function CategoriesList() {
  const { categories, isLoading } = useProducts();
  const navigate = useNavigate();

  const handleAllProducts = ()=> {
    navigate("/");

  }

  if (isLoading) return <Loader />


  return (
    <div className="border-gray-200 rounded-lg shadow max-h-100">
      <h3 className="p-2 font-bold text-xl">Categories</h3>
      <ul className="flex flex-col gap-2">
        <span className="mx-2 border-b cursor-pointer" onClick={handleAllProducts}>All Products</span>
        {categories.map((category, index) => (
          <CategoriesItem category={category} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
