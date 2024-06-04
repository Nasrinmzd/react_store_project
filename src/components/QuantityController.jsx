import { useState } from "react";

function QuantityController({ initialQuantity, onQuantityChange, size="normal" }) {
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

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "h-4 px-2 py-1 text-xs";
      case "normal":
        return "h-8 px-4 py-1.5 text-sm";
      default:
        return "h-8 px-4 py-1.5 text-sm";
    }
  };

  return (
    <div className="sm:order-1">
      <div className={`mx-auto flex items-stretch text-gray-600 ${getSizeStyles()}`}>
        <button
          onClick={handleDecrement}
          className={`flex items-center justify-center rounded-l-md bg-indigo-200 transition hover:bg-black hover:text-white ${getSizeStyles()}`}
        >
          -
        </button>
        <div className={`flex w-full items-center justify-center bg-indigo-100 uppercase transition ${getSizeStyles()}`}>
          {quantity}
        </div>
        <button
          onClick={handleIncrement}
          className={`flex items-center justify-center rounded-r-md bg-indigo-200 transition hover:bg-black hover:text-white ${getSizeStyles()}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityController;
