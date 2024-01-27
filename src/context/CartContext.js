import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);
  const [amount, setAmount] = useState(0);
  //const uri = "http://localhost:5000";
  const uri = "https://stripeapi-vuet.onrender.com";
  return (
    <CartContext.Provider
      value={{
        prod,
        setProd,
        amount,
        setAmount,
        uri,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
