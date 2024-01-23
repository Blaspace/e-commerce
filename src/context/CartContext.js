import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);
  return (
    <CartContext.Provider value={{ prod, setProd }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
