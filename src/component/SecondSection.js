import React from "react";
import model1 from "../public/model (1).jpeg";
import model2 from "../public/model (2).jpeg";
import model3 from "../public/model (3).jpeg";
import { useNavigate } from "react-router-dom";

function SecondSection() {
  const navigate = useNavigate();
  return (
    <div className="second">
      <div className="second-con">
        <div style={{ backgroundImage: `url(${model1})` }}>
          <h2>
            20% OFF ON
            <br /> JACKETS
          </h2>
          <br />
          <p>Note that the development</p>
          <br />
          <button onClick={() => navigate("../../shirt")}>Get Tops</button>
        </div>
        <div style={{ backgroundImage: `url(${model2})` }}>
          <h2>
            20% OFF ON
            <br /> BAGS
          </h2>
          <br />
          <p>Note that the development</p>
          <br />
          <button onClick={() => navigate("../../bags")}>Get Bags</button>
        </div>
        <div style={{ backgroundImage: `url(${model3})` }}>
          <h2>
            20% OFF ON
            <br /> DRESS
          </h2>
          <br />
          <p>Note that the development</p>
          <br />
          <button onClick={() => navigate("../../Dress")}>Get Dress</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
