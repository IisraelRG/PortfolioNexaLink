import React from "react";
import Header from "./../Components/Header";
import Cards_Proyects from "../Components/proyects/Cards_Proyects";
import "./../assets/css/Proyectos.css";
function Proyectos() {
  return (
    <>
      <main className="main">
        <div className="contentCards">
          <Cards_Proyects />
        </div>
      </main>
    </>
  );
}

export default Proyectos;
