import React from "react";
import Header from "./../Components/Header";
// Importación de imágenes
import Cards_Proyects from "../Components/Cards_Proyects";
import Rectangulo_01 from "./../assets/img/diseno-muebleria-ui-nexalinkpro-home.jpg";
import Rectangulo_02 from "./../assets/img/ecommerce-productos-industriales-ui-nexalinkpro-home.jpg";
import Rectangulo_03 from "./../assets/img/landing-page-constructora-ui-nexalinkpro-home.jpg";
import Rectangulo_04 from "./../assets/img/landing-page-arte-pop-mexico-ui-nexalinkpro.jpg";
import Rectangulo_05 from "./../assets/img/Rectangle_5.jpg";
import Rectangulo_06 from "./../assets/img/Rectangle_6.jpg";
import Rectangulo_07 from "./../assets/img/Rectangle_7.jpg";
import Rectangulo_08 from "./../assets/img/Rectangle_8.jpg";
import Rectangulo_09 from "./../assets/img/Rectangle_9.jpg";
import Rectangulo_10 from "./../assets/img/Rectangle_10.jpg";
import Rectangulo_11 from "./../assets/img/Rectangle_11.jpg";
import Rectangulo_12 from "./../assets/img/Rectangle_12.jpg";
const proyectos = [
  {
    imgSrc: Rectangulo_01,
    title: "Task App",
    description:
      "Diseño UI de aplicación móvil para la venta de segunda de autos",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_02,
    title: "Fitness App",
    description: "Diseño UI de aplicación móvil para Gimnasios",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_03,
    title: "Food App",
    description: "Diseño UI de aplicación móvil para negocios de comida",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_04,
    title: "Tianguis del Auto",
    description:
      "Diseño UI de aplicación móvil para la venta de segunda de autos",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_05,
    title: "TodoHerramienta",
    description: "Diseño UI de ecommerce para tienda ferretera",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_06,
    title: "Academia 3D",
    description: "Diseño UI de pagina educativa dirigida al diseño 3D",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_07,
    title: "Muebleria Espacio Ligero",
    description: "Diseño UI de pagina web para muebleria",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_08,
    title: "Constructora ARomero",
    description: "Diseño UI de Landing Page para empresa Constructora",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_09,
    title: "Arte Pop México",
    description: "Diseño UI de Landing Page Evento de arte",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_10,
    title: "Ecommerce Bandaranga",
    description:
      "Diseño UI de Ecommerce para la venta de artículos de Stand Up",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_11,
    title: "Agencia de Viajes",
    description: "Diseño UI de pagina web para agencia de viajes",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_12,
    title: "Retro Art",
    description: "Diseño UI de una Landing Page para evento de arte retro",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_13,
    title: "Secure solutions",
    description:
      "Diseño UI de Ecommerce para la venta de artículos de seguridad",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_14,
    title: "Wildrave",
    description: "Diseño UI de pagina web para conciertos musicales",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_15,
    title: "Beans Estudios",
    description: "Diseño UI de sitio web para empresa de videojuegos",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
  {
    imgSrc: Rectangulo_16,
    title: "Mariachi App",
    description:
      "Diseño UI de aplicación móvil para la contratación de mariachis",
    tags: ["UX", "UI"],
    links: {
      figma: "#",
      behance: "#",
    },
  },
];

function Proyectos() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="menu_Categories">
          <a href="">Todos</a>
          <a href="">Diseño UX/UI</a>
          <a href="">Desarrollo Web</a>
          <a href="">Desarrollo Móviles</a>
          <a href="">Laboratorio</a>
        </div>
        <div className="contentCards">
          <Cards_Proyects proyectos={proyectos} />
        </div>
      </main>
    </>
  );
}

export default Proyectos;
