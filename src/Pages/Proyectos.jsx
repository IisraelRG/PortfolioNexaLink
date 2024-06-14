import React from "react";
import Header from "./../Components/Header";
import Cards_Proyects from "../Components/Cards_Proyects";
import "./../assets/css/Proyectos.css";
function Proyectos() {
  return (
    <>
      <Header />
      <main class="main">
        <div class="contentCards">
          <Cards_Proyects />
        </div>
      </main>
    </>
  );
}

export default Proyectos;
