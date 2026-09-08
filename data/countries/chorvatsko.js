const chorvatskoDestinations = [
  {
    id: "pula",
    name: "Pula",
    country: "Chorvatsko",
    region: "Istrie",
    lat: 44.8666,
    lon: 13.8496,
    wishlist: false,
    description:
      "Historické centrum, útesy, koupání, parkování zdarma a praktická místa.",
    tags: ["swimming", "parking", "food", "shower", "sight"],

    points: [
      {
        id: "pula-parking-centre",
        name: "Parkoviště zdarma",
        lat: 44.8724833,
        lon: 13.8541636,
        type: "parking",
        tags: ["parking"],
        lastChecked: "2026-08-31",
        description:
          "Oficiální parkoviště zdarma kousek od centra. Míst není moc, ale na kratší návštěvu města je použitelné."
      },

      {
        id: "pula-parking-cliffs",
        name: "Parkoviště u klidnějšího pobřeží",
        lat: 44.8723542,
        lon: 13.7956197,
        type: "parking",
        tags: ["parking"],
        lastChecked: "2026-08-31",
        description:
          "Neoficiálnější místo na parkování s horší bezpečností. Kousek odtud jsou velmi pěkné a většinou klidné útesy."
      },

      {
        id: "pula-cliffs",
        name: "Útesy u klidnějšího pobřeží",
        lat: 44.8733044,
        lon: 13.7930622,
        type: "swimming",
        tags: ["swimming", "jumping"],
        lastChecked: "2026-08-31",
        description:
          "Doporučuju projít se podél pobřeží a najít si vlastní místo. V jedné části je přibližně 13 m vysoký útes, ze kterého se skáče."
      },

      {
        id: "pula-public-cliff",
        name: "Veřejný útes",
        lat: 44.8611303,
        lon: 13.805245,
        type: "swimming",
        tags: ["swimming", "jumping"],
        lastChecked: "2026-08-31",
        description:
          "Více lidí než na odlehlejších místech, ale díky tomu působí místo bezpečněji. Často se tu potkávají místní i turisté."
      },

      {
        id: "pula-jump-spot",
        name: "Skákací místo",
        lat: 44.8609831,
        lon: 13.8003875,
        type: "swimming",
        tags: ["swimming", "jumping", "unverified"],
        description:
          "Osobně nevyzkoušeno, ale podle lokality vypadá velmi dobře. Pravděpodobně méně frekventované."
      },

      {
        id: "pula-public-parking",
        name: "Veřejné parkoviště",
        lat: 44.8615106,
        lon: 13.8085628,
        type: "parking",
        tags: ["parking"],
        lastChecked: "2026-08-31",
        description:
          "Zdarma a s relativně slušnou kapacitou. Povrch je ale dost rozbitý."
      },

      {
        id: "pula-camp-parking",
        name: "Parkoviště zdarma u kempu",
        lat: 44.8597583,
        lon: 13.8142061,
        type: "parking",
        tags: ["parking", "shower"],
        lastChecked: "2026-08-31",
        description:
          "Malé parkoviště zdarma. Výhoda je blízkost kempu a sprchy."
      },

      {
        id: "pula-camp-shower",
        name: "Sprcha v kempu",
        lat: 44.8587156,
        lon: 13.8146203,
        type: "shower",
        tags: ["shower", "hygiene"],
        lastChecked: "2026-08-31",
        description:
          "Sprcha v areálu kempu. Podmínky použití je vhodné ověřit na místě."
      },

      {
        id: "pula-arena",
        name: "Pula Arena",
        lat: 44.8702519,
        lon: 13.8457517,
        type: "sight",
        tags: ["sight", "history"],
        lastChecked: "2026-08-31",
        description:
          "Velmi pěkný římský amfiteátr. Silně turistické místo, ale rozhodně stojí za krátkou návštěvu."
      },

      {
        id: "pula-bakery",
        name: "Lokální pekárna",
        lat: 44.8736464,
        lon: 13.8542283,
        type: "food",
        tags: ["food", "bakery", "coffee"],
        lastChecked: "2026-08-31",
        description:
          "Při mé návštěvě otevírala už v 6:00. Působí hodně lokálně, pečivo je výborné a ceny velmi dobré. Vedle je kavárna."
      },

      {
        id: "pula-supermarket-parking",
        name: "Parkování u supermarketu – 90 min",
        lat: 44.8732961,
        lon: 13.8541003,
        type: "parking",
        tags: ["parking", "supermarket"],
        lastChecked: "2026-08-31",
        description:
          "Menší bezplatné parkoviště s omezením přibližně na 90 minut. Vedle je menší supermarket."
      }
    ]
  },

  {
    id: "dinara",
    name: "Dinara",
    country: "Chorvatsko",
    region: "Šibensko-kninska",
    lat: 44.062472,
    lon: 16.382861,
    wishlist: true,
    description:
      "Nejvyšší vrchol Chorvatska, 1 831 m n. m. Poměrně přímočarý celodenní výstup a po cestě autem možnost zastavit se u vodopádu poblíž Kninu.",
    tags: [
      "hike",
      "mountain",
      "highest-point",
      "parking",
      "waterfall",
      "swimming"
    ],

    quickInfo: [
      { icon: "🥾", label: "Pevné boty" },
      { icon: "💧", label: "Dost vody" },
      { icon: "☀️", label: "Ochrana před sluncem" }
    ],

    routes: [
      {
        id: "dinara-route-a",
        name: "Dinara – varianta A",
        type: "hike",
        file: "routes/Dinara_varianta_A.gpx",
        distanceKm: 15.7,
        elevationGainM: 1248,
        description:
          "Relativně přímočará varianta výstupu na nejvyšší bod Chorvatska. Celkem přibližně 15,7 km a 1 248 m převýšení."
      }
    ],

    points: [
      {
        id: "dinara-summit",
        name: "Dinara / Sinjal – 1 831 m",
        lat: 44.062472,
        lon: 16.382861,
        type: "hike",
        tags: ["hike", "mountain", "highest-point"],
        description:
          "Vrchol Dinara, označovaný také jako Sinjal. Ve výšce 1 831 m n. m. jde o nejvyšší bod Chorvatska."
      },

      {
        id: "dinara-parking-a",
        name: "Parkoviště – nástup na Dinaru",
        lat: 44.0101353,
        lon: 16.4203472,
        type: "parking",
        tags: ["parking", "hike"],
        description:
          "Menší bezplatné parkoviště, ale polohou ideální jako nástup na uloženou trasu."
      },

      {
        id: "dinara-knin-waterfall",
        name: "Vodopád u Kninu",
        lat: 44.0422781,
        lon: 16.2356569,
        type: "waterfall",
        tags: ["waterfall", "swimming", "water"],
        description:
          "Vodopád poblíž Kninu, který je autem relativně po cestě k Dinarě nebo zpět. Dobrá možnost zastávky a osvěžení ve sladké vodě po výstupu."
      }
    ]
  }
];
