import React, { useContext, useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../context/CartContext";
import DropDown from "./DropDown";

function Nav() {
  const { prod, setProd } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    if (!prod.length) {
      const i = localStorage.getItem("cart");
      if (i) {
        setProd(JSON.parse(i));
      }
    }
  }, []);

  return (
    <nav className="nav">
      <div className="nav-con">
        <Cart prod={prod} cart={cart} setProd={setProd} />
        <h2>ShopSmart</h2>
        <ul>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/product"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to={"/shirt"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Shirts</li>
          </NavLink>
          <NavLink
            to={"/bags"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Bags</li>
          </NavLink>
          <NavLink
            to={"/dress"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Dress</li>
          </NavLink>
          <NavLink
            to={"/watch"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Watch</li>
          </NavLink>
          <NavLink
            to={"/shoe"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Shoes</li>
          </NavLink>
          <NavLink
            to={"/jacket"}
            style={({ isActive }) => ({
              color: "black",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Jacket</li>
          </NavLink>
        </ul>
        <div>
          <span onClick={() => setCart(!cart)}>
            <article>{prod.length}</article>
            <TiShoppingCart />
          </span>
          <span className="menu">
            {!toggle ? (
              <MdOutlineMenu onClick={() => setToggle(!toggle)} />
            ) : (
              <b onClick={() => setToggle(!toggle)}>&times;</b>
            )}
          </span>
        </div>
        <DropDown toggle={toggle} setToggle={setToggle} ulRef={ulRef} />
      </div>
    </nav>
  );
}

export default Nav;
