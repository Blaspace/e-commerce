import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Header from "../component/Header";
import AllProduct from "../component/AllProduct";
import { products } from "../data/Item";

function Shoes() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const i = products.sort((x, y) => {
      return 0.5 - Math.random();
    });
    const x = i.filter((v) => v.cat === "Shoe");
    setItems(x);
  }, []);
  return (
    <div>
      <Nav />
      <Header text={"shoes"} />
      <div className="third">
        <div className="third-con">
          <AllProduct items={items} />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
