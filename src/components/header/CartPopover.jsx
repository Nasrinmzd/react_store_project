import { ShoppingCart } from "iconsax-react";
import { Link } from "react-router-dom";
import CartPopoverItem from "./CartPopoverItem";
import { useCart } from "../../context/CartContext";

function CartPopover() {
    const {cart} = useCart()

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="absolute top-full right-0 z-10 bg-white rounded-md shadow-lg w-[450px] p-6">
      <div className="p-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center">
            <ShoppingCart size="60" color="#9ca3af" />
            <p className="text-gray-500 text-center mt-5">Your cart is empty.</p>
          </div>
        ) : (
          <ul>
            {cart.map((product) => (
              <CartPopoverItem key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
      {cart.length > 0 && (
        <div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          <Link to="/shopping" className="text-center flex justify-center mt-5">
            <button
              type="button"
              className="min-w-60 px-2 py-2 text-white text-lg rounded transition-all bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
            >
              Cart
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPopover;
