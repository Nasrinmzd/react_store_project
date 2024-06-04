import { CloseSquare } from "iconsax-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import QuantityController from "../QuantityController";

function CartPopoverItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const { removeFromCart, updateQuantity } = useCart();

  const productPrice = product.price * quantity;

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
        <QuantityController
          initialQuantity={quantity}
          onQuantityChange={(newQuantity) => {
            setQuantity(newQuantity);
            updateQuantity(product.id, newQuantity);
          }}
          size="small"
          />
        <p className="ml-28 flex items-center">
          Price:
          <p className="text-sm font-bold ml-2">${productPrice}</p>
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
