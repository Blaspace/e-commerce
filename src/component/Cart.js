import React, { useEffect, useRef } from "react";
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from "react-icons/fa";

function Cart({ prod, cart, setProd }) {
  const cartRef = useRef();
  useEffect(() => {
    if (cart) {
      console.log(window.innerWidth);
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
    console.log(i);
    setProd(i);
    localStorage.setItem("cart", JSON.stringify(i));
  };
  return (
    <div className="cart" ref={cartRef}>
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
        {prod.length && <button>Check Out</button>}
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
