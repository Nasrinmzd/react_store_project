import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div
        className="max-w-xs 
     bg-white border border-gray-200 rounded-lg shadow h-full"
      >
          <img
            className="w-101 h-101 m-auto object-fit object-contain p-3 "
            src={product.images[0]}
            alt={product.title}
          />
        <div className="flex flex-col gap-3 px-5 pb-5">
          <span className="text-sm font-extrabold tracking-tight capitalize text-gray-900">
            {product.title}
          </span>
          <span className="text-xs">{product.brand}</span>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 m-3">
                {product.rating}
              </span>
              <Heart size="20" color="#555555" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
