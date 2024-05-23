import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CloseSquare } from "iconsax-react";

function ShoppingCartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { updateQuantity, removeFromCart } = useCart();

  const productPrice = product.price * quantity;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove= () =>{
    removeFromCart(product.id)
  }
  

  return (
    <li className="flex flex-col border-b last:border-b-0 space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div>
        <img
          className="w-[250px] h-[160px] rounded-lg object-contain"
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <p className="text-xl font-bold text-gray-900">{product.title}</p>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-lg font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              ${productPrice}
            </p>

            <div className="sm:order-1">
              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                <button
                  onClick={handleDecrement}
                  className="flex items-center justify-center rounded-l-md bg-indigo-200 px-4 py-1.5 transition hover:bg-black hover:text-white"
                >
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-indigo-100 px-4 text-xs uppercase transition">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center rounded-r-md bg-indigo-200 px-4 transition hover:bg-black hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative" onClick={handleRemove}>
        <CloseSquare
          className="absolute top-32 right-5"
          size="26"
          color="#6366f1"
        />
      </div>
    </li>
  );
}

export default ShoppingCartItem;
