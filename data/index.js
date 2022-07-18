const continents = [
  {
    name: "América do Norte",
    slug: "america-do-norte",
    title: "O continente América do norte...",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa magnam architecto dicta ab repudiandae ea quos ex? Minima iure aut animi modi maiores a consectetur accusantium accusamus, illo fugit? Assumenda voluptas corrupti ducimus voluptatem culpa magni porro?",
    banner: "/assets/continent/america-norte.svg",
    slideImg: "/assets/slide/america-do-norte.png",
    info: {
      paises: 10,
      linguas: 103,
      cidadesmais: 17,
    },

    cities: [
      {
        city: "africa",
        subtitle: "africa 1",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },

  {
    name: "América do Sul",
    slug: "america-do-sul",
    title: "O continente América do sul...",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa magnam architecto dicta ab repudiandae ea quos ex? Minima iure aut animi modi maiores a consectetur accusantium accusamus, illo fugit? Assumenda voluptas corrupti ducimus voluptatem culpa magni porro?",
    banner: "/assets/continent/america-norte.svg",
    slideImg: "/assets/slide/america-do-sul.png",
    info: {
      paises: 27,
      linguas: 78,
      cidadesmais: 31,
    },

    cities: [
      {
        city: "africa",
        subtitle: "africa 1",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },

  {
    name: "Ásia",
    slug: "asia",
    title: "O continente Asiático...",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa magnam architecto dicta ab repudiandae ea quos ex? Minima iure aut animi modi maiores a consectetur accusantium accusamus, illo fugit? Assumenda voluptas corrupti ducimus voluptatem culpa magni porro?",
    banner: "/assets/continent/america-norte.svg",
    slideImg: "/assets/slide/asia.png",
    info: {
      paises: 16,
      linguas: 99,
      cidadesmais: 33,
    },

    cities: [
      {
        city: "africa",
        subtitle: "africa 1",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },

  {
    name: "África",
    slug: "africa",
    title: "O continente Africano...",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa magnam architecto dicta ab repudiandae ea quos ex? Minima iure aut animi modi maiores a consectetur accusantium accusamus, illo fugit? Assumenda voluptas corrupti ducimus voluptatem culpa magni porro?",
    banner: "/assets/continent/africa.svg",
    slideImg: "/assets/slide/africa.jpg",
    info: {
      paises: 30,
      linguas: 120,
      cidadesmais: 30,
    },

    cities: [
      {
        city: "africa",
        subtitle: "africa 1",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },

  {
    name: "Europa",
    slug: "europa",
    title: "O continente mais antigo.",
    bio: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/assets/continent/europe.svg",
    slideImg: "/assets/slide/europe.svg",
    info: {
      paises: 50,
      linguas: 60,
      cidadesmais: 27,
    },

    cities: [
      {
        city: "Londres",
        subtitle: "Reino Unido",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },

  {
    name: "Oceania",
    slug: "oceania",
    title: "O continente Oceânico...",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa magnam architecto dicta ab repudiandae ea quos ex? Minima iure aut animi modi maiores a consectetur accusantium accusamus, illo fugit? Assumenda voluptas corrupti ducimus voluptatem culpa magni porro?",
    banner: "/assets/continent/europe.svg",
    slideImg: "/assets/slide/oceania.png",
    info: {
      paises: 19,
      linguas: 57,
      cidadesmais: 41,
    },

    cities: [
      {
        city: "Londres",
        subtitle: "Reino Unido",
        foto: "",
        ellipse: "/assets/continent/ellipse/",
      },
    ],
  },
];

export const getContinents = () => continents;

export const getContinentBySlug = (slug) => {
  return continents.find((c) => c.slug === slug);
};
