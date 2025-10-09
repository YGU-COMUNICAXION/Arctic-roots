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
  about: {
    hero: {
      title: "Tu puerta hacia una experiencia de lujo en el Ártico",
      subtitle:
        "En Arctic Roots diseñamos travesías que reflejan tu visión sobre un viaje memorable y transformador.",
    },
    features: {
      title: "En Arctic Roots no lo hacemos diferente, lo hacemos inigualable",
      subtitle:
        "Sabemos que los viajes son una inversión en cultura, historia y recuerdos. Queremos hacerlo excelente y diferente, planeado con todo el cariño y cuidado como si lo hiciéramos para nuestra persona más especial.",
      items: [
        {
          title: "Experiencias de lujo diseñadas a medida",
          description:
            "Itinerarios exclusivos que reflejan tus intereses y ritmo de viaje para que vivas Islandia sin prisas.",
          icon: "bespokePlanning",
          iconLabel: "Planificación personalizada",
        },
        {
          title: "Upgrades con hoteles boutique",
          description:
            "Acceso preferente a estancias selectas y servicios premium que realzan cada momento.",
          icon: "hotelUpgrades",
          iconLabel: "Icono de hoteles de lujo",
        },
        {
          title: "Concierge 24/7",
          description:
            "Acompañamiento continuo antes, durante y después de tu viaje con un equipo listo para resolver cualquier detalle.",
          icon: "conciergeSupport",
          iconLabel: "Acompañamiento personalizado",
        },
        {
          title: "Servicios en diferentes idiomas",
          description:
            "Guías y anfitriones bilingües para que te comuniques con facilidad en cada experiencia.",
          icon: "multilingualServices",
          iconLabel: "Idiomas disponibles",
        },
        {
          title: "Descuentos exclusivos",
          description:
            "Beneficios especiales con actividades y experiencias seleccionadas para viajeros Arctic Roots.",
          icon: "exclusiveDiscounts",
          iconLabel: "Descuentos especiales",
        },
        {
          title: "Alianzas con expertos locales",
          description:
            "Colaboramos con los mejores operadores islandeses para garantizar calidad y seguridad en cada travesía.",
          icon: "strategicAlliances",
          iconLabel: "Alianzas locales",
        },
      ],
    },
    testimonials: {
      title: "Reseñas de nuestros viajeros felices",
      subtitle:
        "Agrégale a tu viaje a Islandia un toque de movimiento y aventura con la selección de actividades que tenemos disponibles.",
      ctaLabel: "Testimonio",
      backgroundAlt: "Cascada islandesa rodeada de montañas",
      items: [
        {
          name: "Andrea M.",
          location: "Ciudad de México",
          quote:
            "Muy buenos reconocimientos locales y súper hoteles. La red de chefs también estuvo perfecta y no hubo ningún contratiempo en todo el itinerario.",
        },
        {
          name: "Samuel C.",
          location: "Santiago de Chile",
          quote:
            "La agencia nos consiguió todos los traslados e incluso un paseo en helicóptero sobre el hielo y lagos. Todo estuvo muy organizado.",
        },
        {
          name: "Elisabeth R.",
          location: "Buenos Aires",
          quote:
            "Experiencia de 10. La organización fue increíble y todas las actividades nos sorprendieron por la atención de los anfitriones.",
        },
      ],
    },
  },
} as const;

export default es;
