import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  

  const updateTotalItems = (newQuantity) => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(totalQuantity + newQuantity);
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

  const addToCart = (product, quantity = 1) => {
    updateTotalItems(true);
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );

      setCart(updatedCart);
      updateTotalItems(quantity);
      updateLocalStorage(updatedCart);
      toast.error("The Product is Available in the Shopping Cart...");
    } else {
      const newCart = [...cart, { ...product, quantity }];

      setCart(newCart);
      updateLocalStorage(newCart);
      updateTotalItems(quantity); 
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
    const removedProduct = cart.find((item) => item.id === id);
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    updateTotalItems(-removedProduct.quantity); // کاهش تعداد حذف شده از totalItems
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
