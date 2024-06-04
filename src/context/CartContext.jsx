import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  

  const updateTotalItems = (shouldIncrement) => {
    if (cart.length === 0) {
      setTotalItems(1);
    } else {
      if (shouldIncrement) {
        setTotalItems((prevTotalItems) => prevTotalItems + 1);
      } else {
        setTotalItems((prevTotalItems) =>
          prevTotalItems > 0 ? prevTotalItems - 1 : 0
        );
      }
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setTotalItems(
        parsedCart.reduce((total, item) => total + (item.quantity || 0), 0)
      );
    }
  }, []);

  const updateLocalStorage = (cart) => {
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
      updateLocalStorage(updatedCart);
      toast.error("The Product is Available in the Shopping Cart...");
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];

      setCart(newCart);
      updateLocalStorage(newCart);
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
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
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
