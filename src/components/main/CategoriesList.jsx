import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import CategoriesItem from "./CategoriesItem";
import Loader from "../Loader";
import { useState } from "react";
import { CloseSquare, FilterRemove, FilterSearch } from "iconsax-react";

function CategoriesList() {
  const { categories, isLoading } = useProducts();
  const navigate = useNavigate();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleAllProducts = () => {
    navigate("/products");
  };

  const handleClose = () => {
    setIsCategoryOpen(false);
  };

  if (isLoading) return <Loader />;

  return (
    <aside>
      {/* category System */}
      <div className="hidden md:block">
        <div className="border-gray-200 rounded-lg shadow max-h-[65.2rem]">
          <h3 className="p-2 font-bold text-xl">Categories</h3>
          <ul className="flex flex-col gap-2">
            <span
              className="mx-2 border-b cursor-pointer"
              onClick={handleAllProducts}
            >
              All Products
            </span>
            {categories.map((category, index) => (
              <CategoriesItem category={category} key={index} />
            ))}
          </ul>
        </div>
      </div>
      {/* filter button */}
      <div className="md:hidden">
        <button
          className="flex items-center justify-center gap-1 m-2 border p-2 rounded-3xl"
          onClick={toggleCategory}
          type="button"
        >
          {isCategoryOpen === true ? (
            <FilterRemove size="18" color="#ef4444" />
          ) : (
            <FilterSearch size="18" color="#000" />
          )}
          <span className={isCategoryOpen ? "text-red-500" : "text-black"}>
            Filter
          </span>
        </button>
      </div>
      {isCategoryOpen && (
        <div className="md:hidden" onClick={handleClose}>
          <div className="border-gray-300 rounded-lg shadow max-h-[65.2rem] bg-indigo-200/90 fixed inset-0 right-[55%]">
            <div className="flex justify-between items-center">
              <h3 className="p-2 font-bold text-xl">Categories</h3>
              <CloseSquare
                onClick={handleClose}
                className="m-2"
                size="25"
                color="#000"
              />
            </div>
            <ul className="flex flex-col gap-2">
              <span
                className="mx-2 border-b cursor-pointer"
                onClick={handleAllProducts}
              >
                All Products
              </span>
              {categories.map((category, index) => (
                <CategoriesItem category={category} key={index} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
}

export default CategoriesList;
