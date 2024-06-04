import { ArrowRight2 } from "iconsax-react";
import { useSearchParams } from "react-router-dom";

function CategoriesItem({ category, selectedCategory, onCategoryClick }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    onCategoryClick(category);
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  const isSelected = selectedCategory === category;

  return (
    <li
      className={`p-2 capitalize flex items-center justify-between border-b last:border-b-0 cursor-pointer ${
        isSelected ? "bg-indigo-400" : "hover:bg-indigo-100"
      }`}
      onClick={handleClick}
    >
      <span className="mr-2">{category}</span>
      <ArrowRight2 size="22" color="#000" />
    </li>
  );
}

export default CategoriesItem;
