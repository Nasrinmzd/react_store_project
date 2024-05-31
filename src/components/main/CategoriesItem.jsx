import { ArrowRight2 } from "iconsax-react";
import { useSearchParams } from "react-router-dom";

function CategoriesItem({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleClick = () => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };


  return (
    <li
      className="p-2 capitalize flex items-center justify-between border-b last:border-b-0 cursor-pointer hover:bg-indigo-100"
      onClick={handleClick}
    >
      <span className="mr-2">{category}</span>
      <ArrowRight2 size="22" color="#000" />
    </li>
  );
}

export default CategoriesItem;
