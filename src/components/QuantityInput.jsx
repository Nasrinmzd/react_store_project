import { useState } from "react";

function QuantityInput({ initialQuantity, onQuantityChange }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
          onQuantityChange(quantity - 1);
        }
      };

    return (
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
    )
}

export default QuantityInput
