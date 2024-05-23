import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);


  const updateTotalItems = (shouldIncrement) => {
    if (shouldIncrement) {
      setTotalItems((prevTotalItems) => prevTotalItems + 1);
    } else {
      setTotalItems((prevTotalItems) => (prevTotalItems > 0 ? prevTotalItems - 1 : 0));
    }
  };


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setTotalItems(parsedCart.reduce((total, item) => total + (item.quantity || 0), 0));
    }
    console.log(savedCart);
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.error("The Product is Available in the Shopping Cart...");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("The Product has been Added to the Shopping Cart...");
      updateTotalItems(true);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    updateTotalItems(false);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
