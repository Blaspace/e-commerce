import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function DropDown({ toggle, setToggle, ulRef }) {
  useEffect(() => {
    if (toggle) {
      ulRef.current.style.height = "80vh";
    } else {
      ulRef.current.style.height = "0";
    }
  }, [toggle]);
  return (
    <div className="drop-down" ref={ulRef}>
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"/product"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Products</li>
      </NavLink>
      <NavLink
        to={"/shirt"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Shirts</li>
      </NavLink>
      <NavLink
        to={"/bags"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Bags</li>
      </NavLink>
      <NavLink
        to={"/dress"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Dress</li>
      </NavLink>
      <NavLink
        to={"/watch"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Watch</li>
      </NavLink>
      <NavLink
        to={"/shoe"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Shoes</li>
      </NavLink>
      <NavLink
        to={"/jacket"}
        style={({ isActive }) => ({
          color: "black",
          textDecoration: "none",
        })}
      >
        <li>Jacket</li>
      </NavLink>
    </div>
  );
}

export default DropDown;
