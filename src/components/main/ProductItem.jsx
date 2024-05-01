import { Heart, Star } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked-${product.id}`, JSON.stringify(newLiked));
  };

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked-${product.id}`);
    if (storedLiked !== null) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [product.id]);

  return (
    <Link to={`/products/${product.id}`} className="max-w-[310px]">
      <div
        className="
     bg-white border border-gray-200 rounded-lg shadow h-full"
      >
        <img
          className="w-[320px] h-[250px] m-auto object-contain p-3"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="flex flex-col gap-3 px-5 pb-5">
          <span className="text-xl font-bold capitalize text-gray-900 truncate">
            {product.title}
          </span>
          <span className="text-xs">{product.brand}</span>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 m-3">
                <Star size="20" color="#facc15" variant="Bold" className="mr-1" />
                {product.rating}
              </span>
              <button onClick={toggleLike}>
                <Heart
                  size="20"
                  color={liked ? "#ff0000" : "#555555"}
                  variant={liked ? "Bold" : ""}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
