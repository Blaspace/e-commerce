import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shirt from "./pages/Shirt";
import Jacket from "./pages/Jacket";
import Bags from "./pages/Bags";
import Dress from "./pages/Dress";
import Watch from "./pages/Watch";
import Shoes from "./pages/Shoes";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/shirt" element={<Shirt />} />
      <Route path="/jacket" element={<Jacket />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/dress" element={<Dress />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/shoe" element={<Shoes />} />
    </Routes>
  );
}

export default App;
