import { useCart } from "../context/CartContext";
import { CloseSquare } from "iconsax-react";
import QuantityController from "./QuantityController";
import { useState } from "react";

function ShoppingCartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const productPrice = product.price * quantity;

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <li className="flex flex-col border-b last:border-b-0 space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="mx-auto">
        <img
          className="w-[220px] h-[160px] rounded-lg object-contain"
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <p className="text-lg font-bold text-gray-900">{product.title}</p>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-lg font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              ${productPrice}
            </p>
            <QuantityController
              initialQuantity={quantity}
              onQuantityChange={(newQuantity) => {
                setQuantity(newQuantity);
                updateQuantity(product.id, newQuantity);
              }}
              size="normal"
            />
          </div>
        </div>
      </div>
      <div className="relative" onClick={handleRemove}>
        <CloseSquare
          className="absolute -top-24 -right-2 md:top-32 md:right-5"
          size="26"
          color="#6366f1"
        />
      </div>
    </li>
  );
}

export default ShoppingCartItem;
