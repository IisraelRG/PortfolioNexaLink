import React from "react";
import "./../assets/css/Hero.css";

import World from "./../assets/img/world.png";

function Hero() {
  return (
    <div className="heroContent">
      <div className="container">
        <div className="conText">
          <h1>Transformando Ideas en Experiencias Digitales</h1>
          <p>Contáctanos para tu Próximo Proyecto Web</p>
        </div>
        <a
          className="btn_Contacto"
          href="https://wa.link/egyd7n"
          target="_blank"
        >
          Contactanos
        </a>
      </div>
      <img className="imgHero" src={World} alt="" />
    </div>
  );
}

export default Hero;
