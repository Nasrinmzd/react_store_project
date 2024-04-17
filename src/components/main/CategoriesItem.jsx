import { ArrowRight } from "iconsax-react";
import { Link, useSearchParams } from "react-router-dom";


function CategoriesItem({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();


  const handleClick = () => {
    searchParams.set('category', category)
    setSearchParams(searchParams)
  }


  return (
      <li className="p-2 capitalize flex items-center border-b" onClick={handleClick}>
        <span className="mr-2">{category}</span>
        <ArrowRight size="18" color="#000000" />
      </li>
  );
}

export default CategoriesItem;
