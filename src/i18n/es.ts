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
    travel: {
      title: "Elige tu tipo de viaje por Islandia",
      cards: [
        {
          title: "Eclipse en el Ártico",
          subtitle: "Viaje grupal",
          href: "/eclipse",
          imageAlt: "Personas contemplando un eclipse en un paisaje nevado",
        },
        {
          title: "Círculo Dorado",
          subtitle: "Excursión icónica",
          href: "/viajes/circulo-dorado",
          imageAlt: "Cascada islandesa en un día despejado",
        },
        {
          title: "Autoguiado",
          subtitle: "Ruta a tu ritmo",
          href: "/viajes/autoguiado",
          imageAlt: "Carretera islandesa rodeada de montañas",
        },
        {
          title: "Viaje privado",
          subtitle: "Experiencia exclusiva",
          href: "/viajes/privado",
          imageAlt: "Pareja admirando una cascada en Islandia",
        },
      ],
      parallax: {
        title:
          "¿Buscas ir a <b>Islandia y Groenlandia</b><br/> con los mejores consejos?",
        description: [
          "Habla con quienes conocen Islandia como la palma de su mano.",
          "Planear un viaje a Islandia es emocionante… pero ¿Cómo saber si estás eligiendo bien? ",
          "En Arctic Roots, resolvemos tus dudas en una videollamada. Te brindamos la información que necesitas para tomar las mejores decisiones",
        ],
        highlights: [
          {
            title: "Sesión de consultoría",
            duration: {
              value: "1 hora",
            },
            investment: {
              value: "$150 USD",
            },
          },
          {
            title: "Itinerario personalizado",
            duration: {
              value: "1 hora",
            },
            investment: {
              value: "$250 USD",
            },
          },
        ],
        whatsappCta: "Agenda por WhatsApp",
        whatsappHref: "https://wa.me/",
        whatsappAriaLabel:
          "Abrir una conversación de WhatsApp con Arctic Roots",
        highlightIconLabel: "Icono decorativo del servicio de consultoría",
        overlayIconLabel: "Ilustración decorativa del servicio de asesoría",
      },
    },
  },
} as const;

export default es;
