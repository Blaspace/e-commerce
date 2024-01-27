import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from "react-icons/fa";
import CartContext from "../context/CartContext";
import StripeConfig from "./StripeConfig";

function Cart({ prod, cart, setProd }) {
  const { amount, setAmount } = useContext(CartContext);
  const [pay, setPay] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    if (cart) {
      if (window.innerWidth >= 780) {
        cartRef.current.style.width = "40%";
      } else {
        cartRef.current.style.width = "100%";
      }
    } else {
      cartRef.current.style.width = "0";
    }
  }, [cart]);
  const handleAdd = (e) => {
    const i = prod.map((value) => {
      if (value.img === e) {
        value.num += 1;
      }
      return value;
    });
    setProd(i);
    localStorage.setItem("cart", JSON.stringify(i));
  };
  const handleReduce = (e) => {
    const i = prod.map((value) => {
      if (value.img === e.img && e.num > 1) {
        value.num -= 1;
      }
      return value;
    });
    setProd(i);
    localStorage.setItem("cart", JSON.stringify(i));
  };
  const handleRemove = (e) => {
    const i = prod.filter((v) => v.img !== e);
    setProd(i);
    localStorage.setItem("cart", JSON.stringify(i));
  };
  useEffect(() => {
    setAmount(0);
    let j = 0;
    for (let i = 0; i < prod.length; i++) {
      const x = prod[i].price * prod[i].num;
      j += x;
    }
    setAmount(j);
  }, [prod]);
  return (
    <div className="cart" ref={cartRef}>
      {pay && <StripeConfig setPay={setPay} />}
      <br />
      <h2>Your Cart</h2>
      <br />
      <div className="cart-con">
        {prod.length ? (
          prod.map((value, i) => {
            return (
              <div key={i}>
                <span>
                  <img src={value.img} alt="cart items" />
                </span>
                <section>
                  <p>{value.name}</p>
                  <br />
                  <p>
                    <b>
                      <small>$</small>
                      {value.price * value.num}.0
                    </b>
                  </p>
                  <br />
                  <p style={{ fontSize: "20px" }}>
                    {value.num}{" "}
                    <FaPlusSquare
                      size={30}
                      onClick={() => handleAdd(value.img)}
                    />{" "}
                    <FaMinusSquare
                      size={30}
                      onClick={() => handleReduce(value)}
                    />
                  </p>
                  <br />
                  <FaTrashAlt
                    size={30}
                    color="red"
                    onClick={() => handleRemove(value.img)}
                  />
                </section>
              </div>
            );
          })
        ) : (
          <h3 style={{ borderBottom: "1px solid grey" }}>Your cart is empty</h3>
        )}
        <br />
        {prod.length && (
          <div style={{ justifyContent: "spaceAround" }}>
            {" "}
            <button onClick={() => setPay(true)}>Check Out</button>{" "}
            <h2>Total: ${amount}</h2>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Cart;
