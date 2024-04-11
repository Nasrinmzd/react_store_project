import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";


function ProductItem({ product }) {
  return (
    <Link>
      <div
        className="max-w-xs
     bg-white border border-gray-200 rounded-lg shadow h-full"
      >
        <div className="w-40 h-40">
        <img
          className="object-cover p-3"
          src={product.images[0]}
          alt={product.title}
        />
        </div>
        <div className="flex flex-col gap-3 px-5 pb-5">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            {product.title}
          </h3>
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
