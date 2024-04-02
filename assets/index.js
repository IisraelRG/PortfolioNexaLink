const btnuI = document.getElementById("btnuI");
const btnuX = document.getElementById("btnuX");
const btndesarrollo = document.getElementById("btndesarrollo");
const btnprogramcion = document.getElementById("btnprogramcion");
const btnconsultoria = document.getElementById("btnconsultoria");

const uI = document.querySelector(".uI");
const uX = document.querySelector(".uX");
const desarrollo = document.querySelector(".desarrollo");
const programacion = document.querySelector(".programacion");
const consultoria = document.querySelector(".consultoria");

let valor = 0;
btnuI.addEventListener("click", () => {
  /*gsap.to(".uI", {
    duration: 1, 
    y: 100,
    ease: "power1.out", 
  });*/

  uI.classList.remove("uIShow");
  uI.classList.add("uI");

  uX.classList.add("uX");
  uX.classList.remove("uXShow");

  desarrollo.classList.remove("desarrolloShow");
  desarrollo.classList.add("desarrollo");

  programacion.classList.remove("programacionShow");
  programacion.classList.add("programacion");

  consultoria.classList.remove("consultoriaShow");
  consultoria.classList.add("consultoria");
});
btnuX.addEventListener("click", () => {
  uI.classList.add("uIShow");

  uX.classList.remove("uX");
  uX.classList.add("uXShow");

  desarrollo.classList.remove("desarrolloShow");
  desarrollo.classList.add("desarrollo");

  programacion.classList.remove("programacionShow");
  programacion.classList.add("programacion");

  consultoria.classList.remove("consultoriaShow");
  consultoria.classList.add("consultoria");
});
btndesarrollo.addEventListener("click", () => {
  console.log("btndesarrollo mundo");
  uI.classList.add("uIShow");

  uX.classList.remove("uXShow");
  uX.classList.add("uX");

  desarrollo.classList.remove("desarrollo");
  desarrollo.classList.add("desarrolloShow");

  programacion.classList.remove("programacionShow");
  programacion.classList.add("programacion");

  consultoria.classList.remove("consultoriaShow");
  consultoria.classList.add("consultoria");
});
btnprogramcion.addEventListener("click", () => {
  console.log("btnprogramcion mundo");
  uI.classList.add("uIShow");

  uX.classList.remove("uXShow");
  uX.classList.add("uX");

  desarrollo.classList.remove("desarrolloShow");
  desarrollo.classList.add("desarrollo");

  programacion.classList.remove("programacion");
  programacion.classList.add("programacionShow");

  consultoria.classList.remove("consultoriaShow");
  consultoria.classList.add("consultoria");
});
btnconsultoria.addEventListener("click", () => {
  console.log("btnconsultoria mundo");
  uI.classList.add("uIShow");

  uX.classList.remove("uXShow");
  uX.classList.add("uX");

  desarrollo.classList.remove("desarrolloShow");
  desarrollo.classList.add("desarrollo");

  programacion.classList.remove("programacionShow");
  programacion.classList.add("programacion");

  consultoria.classList.remove("consultoria");
  consultoria.classList.add("consultoriaShow");
});
