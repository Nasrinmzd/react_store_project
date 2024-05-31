import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

function CategoryHeader({ category }) {
  return (
    <div className="flex justify-between items-center mt-4 mx-7 md:mx-28">
      <span>{category}</span>
      <div className="flex justify-between items-center">
        <Link to={`/products?category=${category}`}>
          Show all {category} Categories
        </Link>
        <ArrowRight size="20" color="#000" className="ml-1" />
      </div>
    </div>
  );
}

export default CategoryHeader;
