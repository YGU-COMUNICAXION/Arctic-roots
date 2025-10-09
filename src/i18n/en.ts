const en = {
  header: {
    logoAlt: "Arctic Roots logo",
    ariaLabel: "Main navigation",
    nav: {
      home: "Home",
      eclipse: "Experience the eclipse",
      about: "About us",
      travelTypes: "Trip types",
      agents: "I'm an agent",
      contact: "Contact",
    },
  },
  hero: {
    title: "Explore Iceland and Greenland your way",
    subtitle:
      "Iceland and Greenland aren't just visited. They are explored, savored, felt, and never forgotten.",
  },
  home: {
    highlights: {
      hero: {
        title: "Iceland and Greenland: the land of ice and fire",
        paragraphs: [
          "Imagine discovering a country that offers the fury of lava fields and, at the same time, surreal walls of ice and waterfalls.",
          "Iceland is a destination for enthusiastic spirits eager to admire nature and embrace wonder; regardless of the expectations you bring, this land never says goodbye the same way you arrived.",
        ],
        backgroundAlt: "Lava erupting across an Icelandic volcanic landscape",
      },
      discovery: {
        title:
          "It's a place where children and adults alike feel inside a living museum and it becomes even more fascinating if you are:",
        description: "",
        items: [
          { label: "Photographers", icon: "photographers" },
          { label: "Nature lovers", icon: "natureLovers" },
          {
            label: "Travelers seeking sustainable tourism",
            icon: "sustainableTravelers",
          },
          {
            label: "People eager to see the northern lights",
            icon: "auroraChasers",
          },
          { label: "Solo travelers", icon: "soloTravelers" },
          { label: "Content creators", icon: "contentCreators" },
          { label: "Honeymooners", icon: "honeymooners" },
        ],
        galleryAlt: [
          "Abstract illustration of an Icelandic canyon",
          "Abstract illustration of snowy mountains",
          "Abstract illustration of Iceland's coastline",
        ],
      },
    },
    travel: {
      title: "Choose your kind of trip across Iceland",
      description:
        "Discover the itineraries we can craft for you and start planning an unforgettable adventure.",
      cards: [
        {
          title: "Arctic eclipse",
          subtitle: "Small-group journey",
          href: "/eclipse",
          imageSrc: "https://placehold.co/600x400?text=Eclipse",
          imageAlt: "People watching an eclipse over a snowy landscape",
        },
        {
          title: "Golden Circle",
          subtitle: "Signature excursion",
          href: "/trips/golden-circle",
          imageSrc: "https://placehold.co/600x400?text=Golden+Circle",
          imageAlt: "Icelandic waterfall on a clear day",
        },
        {
          title: "Self-guided",
          subtitle: "Roadtrip at your pace",
          href: "/trips/self-guided",
          imageSrc: "https://placehold.co/600x400?text=Self+guided",
          imageAlt: "Road crossing Icelandic mountains",
        },
        {
          title: "Private journey",
          subtitle: "Tailor-made experience",
          href: "/trips/private",
          imageSrc: "https://placehold.co/600x400?text=Private",
          imageAlt: "Couple admiring an Icelandic waterfall",
        },
      ],
      parallax: {
        title:
          "Planning to visit Iceland and Greenland<br/> with expert guidance?",
        description: [
          "We're ready to help you design the journey you've always imagined, from the <b>very first idea</b> to the <b>final detail</b>.",
          "Tell us the experience you want to live and our team will turn it into a <b>realistic, memorable itinerary</b>.",
        ],
        highlights: [
          {
            title: "Consulting session",
            duration: {
              label: "Duration",
              value: "45 minutes",
            },
            investment: {
              label: "Investment",
              value: "From $75 USD",
            },
          },
          {
            title: "Custom itinerary",
            duration: {
              label: "Turnaround",
              value: "Within 5 business days",
            },
            investment: {
              label: "Investment",
              value: "Quoted for you",
            },
          },
        ],
        whatsappCta: "Schedule on WhatsApp",
        whatsappHref: "https://wa.me/",
        whatsappAriaLabel: "Open a WhatsApp conversation with Arctic Roots",
        backgroundImage: "https://placehold.co/1600x900?text=Iceland",
        backgroundLabel: "Arctic Roots advisory",
        highlightIconLabel: "Decorative consulting icon",
      },
    },
  },
} as const;

export default en;
