import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom hook for easy usage
export function Usecart() {
  return useContext(CartContext);
}

// Provider component
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const value = {
    cartCount,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
