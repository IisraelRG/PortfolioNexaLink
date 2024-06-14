import React from "react";
import Img_1 from "./../../assets/img/diseno-muebleria-ui-nexalinkpro-home.jpg";

function Proyectos() {
  return (
    <>
      <div className="card">
        <img src={Img_1} alt="" />
        <div className="conText">
          <div className="text">
            <h3>Task App</h3>
            <p>
              Diseño UI de aplicacion móvil para la venta de segunda de autos
            </p>
          </div>
          <div className="conTags">
            <a href="" className="tags">
              UX
            </a>
            <a href="" className="tags">
              UI
            </a>
          </div>
          <div className="contButtons">
            <a href="#" className="btn_Figma btn_Card">
              Figma
            </a>
            <a href="#" className="btn_Behance btn_Card">
              Behance
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proyectos;
