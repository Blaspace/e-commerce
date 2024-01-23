import React from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import SecondSection from "../component/SecondSection";
import FeaturedProducts from "../component/FeaturedProducts";

function Home() {
  return (
    <div>
      <Nav />
      <Header text={"products"} />
      <SecondSection />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
