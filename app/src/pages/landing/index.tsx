import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "./style.css";

import LogoBrand from "../../images/logo-brand.svg";

function Landing() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={LogoBrand} alt="Happy Brand" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <a href="" className="enter-btn">
          <FiArrowRight size={"1.6rem"} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
