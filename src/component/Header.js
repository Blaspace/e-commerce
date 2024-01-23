import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ text }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-con">
        <div>
          <h1>
            Shop for the
            <br /> best <span>{text}</span>
          </h1>
          <button onClick={() => navigate("../../product")}>
            All Products
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
