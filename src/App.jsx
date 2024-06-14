import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Inicio from "./Pages/Inicio";
import Proyectos from "./Pages/Proyectos";
import Servicios from "./Pages/Servicios";
import Nosotros from "./Pages/Nosotros";
import Comunidad from "./Pages/Comunidad";
import Contacto from "./Pages/Contacto";
import Get_Into from "./Pages/Get_Into";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="proyectos" element={<Proyectos />}></Route>
          <Route path="servicios" element={<Servicios />}></Route>
          <Route path="nosotros" element={<Nosotros />}></Route>
          <Route path="comunidad" element={<Comunidad />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          <Route path="getInto" element={<Get_Into />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
