import { useSearchParams } from "react-router-dom";

function CategoriesItem({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  return (
    <li
      className="p-2 capitalize flex items-center border-b cursor-pointer hover:bg-indigo-50"
      onClick={handleClick}
    >
      <span className="mr-2">{category}</span>
    </li>
  );
}

export default CategoriesItem;
