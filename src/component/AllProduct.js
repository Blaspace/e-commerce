import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function AllProduct({ items }) {
  const { prod, setProd } = useContext(CartContext);
  const handleAddToCart = (e) => {
    const cart = {
      name: e.name,
      price: e.price,
      cat: e.cat,
      num: 1,
      img: e.img,
    };
    const i = localStorage.getItem("cart");

    if (i) {
      const x = JSON.parse(i);
      const duplicate = x.filter((v) => v.img === e.img);
      if (duplicate.length) {
        alert("Already added");
      } else {
        localStorage.setItem("cart", JSON.stringify([...x, cart]));
        setProd([...prod, cart]);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([cart]));
      setProd([...prod, cart]);
    }
  };
  return (
    <div className="product">
      {items.map((value, i) => {
        return (
          <div>
            <section>
              <img src={value.img} alt="product" loading="lazy" />
            </section>
            <article>
              <p>{value.name}</p>
              <h2>
                <small>$</small>
                {value.price}.0
              </h2>
              <span></span>
              <button onClick={() => handleAddToCart(value)}>
                Add to cart
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default AllProduct;
