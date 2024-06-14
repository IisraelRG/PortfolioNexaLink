import { Link } from "react-router-dom";
import "./../assets/css/Header.css";

import Menu from "./../assets/img/menu.png";
import Logo from "./../assets/img/Logo.png";
import { useState } from "react";
function Header() {
  const [navBar, setNavBarShow] = useState(false);
  let effectNavBarShow = () => {
    setNavBarShow(!navBar);
  };
  return (
    <div>
      <header className="header">
        <img src={Logo} className="logoImg" alt="Logo" />
        <nav className={navBar ? "navBarShow " : "navBar"}>
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/comunidad">Comunidad</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <a href="#" onClick={effectNavBarShow} className="btn_Menu">
          <img src={Menu} alt="Menu" />
        </a>
      </header>
    </div>
  );
}

export default Header;
