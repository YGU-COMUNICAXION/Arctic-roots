const es = {
  header: {
    logoAlt: "Logotipo de Arctic Roots",
    ariaLabel: "Navegación principal",
    nav: {
      home: "Inicio",
      eclipse: "Vive el eclipse",
      about: "Quiénes somos",
      travelTypes: "Tipos de viaje",
      agents: "Soy agente",
      contact: "Contacto",
    },
  },
  hero: {
    title: "Explora Islandia y Groenlandia a tu manera",
    subtitle:
      "Islandia y Groenlandia no se visitan. Se recorren, se saborean, se sienten y nunca se olvidan.",
  },
  home: {
    highlights: {
      hero: {
        title: "Islandia y Groenlandia: la<br/> tierra del hielo y fuego",
        paragraphs: [
          "Imagina descubrir un país que te ofrece el furor de los <b>campos de lava</b> y, al mismo tiempo, <b>murallas de hielo</b> y <b>cascadas surrealistas</b>.",
          "Islandia es un destino para espíritus entusiastas por admirar la naturaleza y que tengan capacidad de asombro; no importa cuánta expectativa traigan, esta tierra no despide a nadie igual que como llegó.",
        ],
        backgroundAlt: "Erupción de lava sobre un paisaje volcánico islandés",
      },
      discovery: {
        title:
          "Es un lugar en el que tanto niños como adultos se sienten en un museo viviente y será aún más fascinante si son:",
        description: "",
        items: [
          { label: "Fotógrafos", icon: "photographers" },
          { label: "Amantes de la naturaleza", icon: "natureLovers" },
          {
            label: "Viajeros que buscan turismo sostenible",
            icon: "sustainableTravelers",
          },
          {
            label: "Personas con deseo de ver auroras boreales",
            icon: "auroraChasers",
          },
          { label: "Viajeros solitarios", icon: "soloTravelers" },
          { label: "Creadores de contenido", icon: "contentCreators" },
          { label: "Parejas en luna de miel", icon: "honeymooners" },
        ],
        galleryAlt: [
          "Ilustración abstracta de un cañón islandés",
          "Ilustración abstracta de montañas nevadas",
          "Ilustración abstracta de la costa de Islandia",
        ],
      },
    },
  },
} as const;

export default es;
