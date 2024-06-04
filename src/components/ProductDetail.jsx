import { Star } from "iconsax-react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, removeFromCart } = useCart();
  const [isProductAdded, setIsProductAdded] = useState(false);

  const product = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
    setIsProductAdded(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsProductAdded(false);
  };

  return (
    <div className="font-[sans-serif] bg-gray-700">
      <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="bg-gray-800 px-4 py-5 rounded-xl">
              <img
                src={product.images[0]}
                alt="Product"
                className="w-102 h-102 m-auto rounded object-fit object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold mb-12 text-white">
              {product.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-indigo-500 text-4xl font-bold">
                ${product.price}
              </p>
              <p className="text-gray-400 text-xl">
                {product.discountPercentage}%
              </p>
              <div></div>
            </div>
            <div className="flex items-center mt-4">
              <Star size="30" color="#facc15" variant="Bold" />
              <p className="text-gray-400 ml-2">{product.rating}</p>
            </div>

            <div className="mt-10 flex flex-col">
              <h3 className="text-lg font-bold text-indigo-500">Details:</h3>
              <span className="space-y-3 list-disc mt-3 text-sm text-white">
                {product.description}
              </span>
              <p className="mt-6 text-white capitalize">
                Category:{" "}
                <span className="text-gray-400">{product.category}</span>
              </p>
              <p className="text-white">
                Brand: <span className="text-gray-400">{product.brand}</span>
              </p>
            </div>
            <button
              onClick={isProductAdded ? handleRemoveFromCart : handleAddToCart}
              type="button"
              className={`min-w-full px-4 py-2.5 mt-8 border text-sm font-bold rounded transition-all ${
                isProductAdded
                  ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                  : "border-indigo-600 bg-transparent text-indigo-400 hover:text-white hover:bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
              }`}
            >
              {isProductAdded ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
