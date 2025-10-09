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
      description:
        "Conoce las experiencias que podemos diseñar para ti y empieza a planear una aventura inolvidable.",
      cards: [
        {
          title: "Eclipse en el Ártico",
          subtitle: "Viaje grupal",
          href: "/eclipse",
          imageSrc: "https://placehold.co/600x400?text=Eclipse",
          imageAlt: "Personas contemplando un eclipse en un paisaje nevado",
        },
        {
          title: "Círculo Dorado",
          subtitle: "Excursión icónica",
          href: "/viajes/circulo-dorado",
          imageSrc: "https://placehold.co/600x400?text=C%C3%ADrculo+Dorado",
          imageAlt: "Cascada islandesa en un día despejado",
        },
        {
          title: "Autoguiado",
          subtitle: "Ruta a tu ritmo",
          href: "/viajes/autoguiado",
          imageSrc: "https://placehold.co/600x400?text=Autoguiado",
          imageAlt: "Carretera islandesa rodeada de montañas",
        },
        {
          title: "Viaje privado",
          subtitle: "Experiencia exclusiva",
          href: "/viajes/privado",
          imageSrc: "https://placehold.co/600x400?text=Privado",
          imageAlt: "Pareja admirando una cascada en Islandia",
        },
      ],
      parallax: {
        title:
          "¿Buscas ir a Islandia y Groenlandia<br/> con los mejores consejos?",
        description: [
          "Estamos listos para ayudarte a diseñar la travesía que siempre imaginaste, desde la <b>primera idea</b> hasta el <b>último detalle</b>.",
          "Cuéntanos qué tipo de experiencia quieres vivir y nuestro equipo transformará tus sueños en un <b>itinerario memorable y realista</b>.",
        ],
        highlights: [
          {
            title: "Sesión de consultoría",
            duration: {
              label: "Duración",
              value: "45 minutos",
            },
            investment: {
              label: "Inversión",
              value: "Desde $75 USD",
            },
          },
          {
            title: "Itinerario personalizado",
            duration: {
              label: "Entrega",
              value: "En 5 días hábiles",
            },
            investment: {
              label: "Inversión",
              value: "Se cotiza a medida",
            },
          },
        ],
        whatsappCta: "Agenda por WhatsApp",
        whatsappHref: "https://wa.me/",
        whatsappAriaLabel:
          "Abrir una conversación de WhatsApp con Arctic Roots",
        backgroundImage: "https://placehold.co/1600x900?text=Islandia",
        backgroundLabel: "Asesoría Arctic Roots",
        highlightIconLabel: "Icono decorativo del servicio de consultoría",
      },
    },
  },
} as const;

export default es;
