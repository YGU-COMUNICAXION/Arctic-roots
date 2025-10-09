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
  },
  about: {
    hero: {
      title: "Your gateway to a luxury Arctic experience",
      subtitle:
        "At Arctic Roots we design journeys that reflect your vision for a memorable and transformative trip.",
    },
    features: {
      title: "At Arctic Roots we don't just do it differently, we make it unrivaled",
      subtitle:
        "We know travel is an investment in culture, history, and memories. We craft it with excellence, care, and dedication as if we were planning it for our dearest person.",
      items: [
        {
          title: "Tailor-made luxury journeys",
          description:
            "Exclusive itineraries that mirror your interests and travel pace so you can savor Iceland unhurriedly.",
          icon: "bespokePlanning",
          iconLabel: "Tailor-made planning",
        },
        {
          title: "Hotel upgrades & boutique stays",
          description:
            "Preferred access to curated accommodations and premium amenities that elevate every moment.",
          icon: "hotelUpgrades",
          iconLabel: "Luxury hotel icon",
        },
        {
          title: "24/7 concierge team",
          description:
            "Continuous support before, during, and after your journey with a team ready to care for every detail.",
          icon: "conciergeSupport",
          iconLabel: "Dedicated concierge",
        },
        {
          title: "Services in multiple languages",
          description:
            "Bilingual guides and hosts so you can communicate with ease throughout every experience.",
          icon: "multilingualServices",
          iconLabel: "Language services",
        },
        {
          title: "Exclusive discounts",
          description:
            "Special perks on selected activities and experiences available only for Arctic Roots travelers.",
          icon: "exclusiveDiscounts",
          iconLabel: "Exclusive discounts",
        },
        {
          title: "Alliances with local experts",
          description:
            "We collaborate with top Icelandic operators to guarantee quality and safety on every journey.",
          icon: "strategicAlliances",
          iconLabel: "Local alliances",
        },
      ],
    },
    testimonials: {
      title: "Happy traveler reviews",
      subtitle:
        "Add a spark of movement and adventure to your trip to Iceland with the curated selection of activities we offer.",
      ctaLabel: "Testimonial",
      backgroundAlt: "Icelandic waterfall surrounded by cliffs",
      items: [
        {
          name: "Andrea M.",
          location: "Mexico City",
          quote:
            "Wonderful local partners and outstanding hotels. The culinary network was flawless and every segment of the itinerary flowed perfectly.",
        },
        {
          name: "Samuel C.",
          location: "Santiago, Chile",
          quote:
            "The agency arranged every transfer for us, even a helicopter ride over glaciers and lagoons. Everything was impeccably organized.",
        },
        {
          name: "Elisabeth R.",
          location: "Buenos Aires",
          quote:
            "A 10 out of 10 experience. The planning was incredible and each activity surprised us with the hosts' dedication.",
        },
      ],
    },
  },
} as const;

export default en;
