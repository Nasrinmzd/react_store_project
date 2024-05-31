import { CloseSquare } from "iconsax-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function CartPopoverItem({product}) {
  const [quantity, setQuantity] = useState(1);
  const { cart, removeFromCart, updateQuantity } = useCart();

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

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <li key={product.id} className="py-2 text-gray-950 border-b">
      <div className="flex items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-[100px] h-[100px] mr-4 object-contain"
        />
        <p className="font-semibold">{product.title}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="sm:order-1">
          <div className="mx-auto flex h-4 items-stretch text-gray-600">
            <button
              onClick={handleDecrement}
              className="flex items-center justify-center rounded-l-md bg-indigo-200 px-2 py-1 transition hover:bg-black hover:text-white"
            >
              -
            </button>
            <div className="flex w-full items-center justify-center bg-indigo-100 px-2 text-xs uppercase transition">
              {quantity}
            </div>
            <button
              onClick={handleIncrement}
              className="flex items-center justify-center rounded-r-md bg-indigo-200 px-2 transition hover:bg-black hover:text-white"
            >
              +
            </button>
          </div>
        </div>
        <p className="ml-28">
          Price:
          <p className="text-sm font-bold">
            ${productPrice}
          </p>
        </p>
      </div>

      <div className="relative" onClick={handleRemove}>
        <CloseSquare
          className="absolute -top-24 right-0"
          size="26"
          color="#6366f1"
        />
      </div>
    </li>
  );
}

export default CartPopoverItem;
