import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Header from "../component/Header";
import AllProduct from "../component/AllProduct";
import { products } from "../data/Item";

function Product() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const i = products.sort((x, y) => {
      return 0.5 - Math.random();
    });
    setItems(i);
  }, []);
  return (
    <div>
      <Nav />
      <Header text={"products"} />
      <div className="third">
        <div className="third-con">
          <AllProduct items={items} />
        </div>
      </div>
    </div>
  );
}

export default Product;
