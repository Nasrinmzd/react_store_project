import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import CategoriesItem from "./CategoriesItem";
import Loader from "../Loader";
import { useState } from "react";
import { CloseSquare, FilterRemove, FilterSearch } from "iconsax-react";
import useOutsideClick from "../../hooks/useOutsideClick";

function CategoriesList() {
  const { categories, isLoading } = useProducts();
  const navigate = useNavigate();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = () => {
    console.log('oooo');
    setIsCategoryOpen(!isCategoryOpen);
  };
  const handleAllProducts = () => {
    navigate("/products");
    setSelectedCategory("all");
  };

  const handleClose = () => {
    setIsCategoryOpen(false);
  };

  const categoryRef = useOutsideClick(handleClose);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) return <Loader />;

  return (
    <aside className="w-[15%]">
      {/* category System */}
      <div
        ref={categoryRef}
        onClick={handleClose}
        className={`fixed md:left-0 md:opacity-100 transition-all ease-in-out duration-300 z-40 ${
          isCategoryOpen
            ? "left-0 top-0 bg-indigo-200/90"
            : "sm:-left-full md:static opacity-0"
        }`}
      >
        <div className="border-gray-200 rounded-lg shadow w-[230px] lg:w-[190px]">
          <div className="flex justify-between items-center">
            <h3 className="p-2 font-bold text-xl">Categories</h3>
            <CloseSquare
              onClick={handleClose}
              className="m-2 md:hidden"
              size="25"
              color="#000"
            />
          </div>
          <ul className="flex flex-col gap-2">
            <span
              className={`border-b cursor-pointer p-2 ${
                selectedCategory === "all" ? "bg-indigo-400" : ""
              }`}
              onClick={handleAllProducts}
            >
              All Products
            </span>
            {categories.map((category, index) => (
              <CategoriesItem
                category={category}
                key={index}
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick}
              />
            ))}
          </ul>
        </div>
        {/* filter button */}
      </div>
      <div className="md:hidden flex justify-center items-center min-w-96">
        <button
          className={`flex items-center justify-center gap-1 border-b-4 m-2 p-2 rounded-xl ${isCategoryOpen === true ? "z-0" : "z-50"}`}
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

      <div
        className={`fixed inset-0  opacity-50 transition-opacity duration-300 md:hidden ${
          isCategoryOpen
            ? "bg-black opacity-80"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </aside>
  );
}

export default CategoriesList;
