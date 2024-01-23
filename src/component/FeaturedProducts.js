import React, { useEffect, useState } from "react";
import { products } from "../data/Item";
import AllProduct from "./AllProduct";

function FeaturedProducts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const i = products.sort((x, y) => {
      return 0.5 - Math.random();
    });
    setItems(i.slice(0, 12));
  }, []);
  return (
    <div className="third">
      <div className="third-con">
        <h1>Featured Products</h1>
        <br />
        <AllProduct items={items} />
        <br />

        <br />
      </div>
    </div>
  );
}

export default FeaturedProducts;
