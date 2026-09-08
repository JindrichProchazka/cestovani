const nemeckoDestinations = [
  {
    id: "zugspitze",
    name: "Zugspitze",
    country: "Německo",
    region: "Bavorsko",
    lat: 47.421215,
    lon: 10.9862969,
    wishlist: true,
    description:
      "Nejvyšší hora Německa. Detail výstupu je zatím v plánování.",
    tags: ["hike", "mountain", "highest-point"],

    quickInfo: [
      { icon: "🗺️", label: "Trasa v plánování" },
      { icon: "🌦️", label: "Ověřit počasí" }
    ],

    points: [
      {
        id: "zugspitze-summit",
        name: "Zugspitze",
        lat: 47.421215,
        lon: 10.9862969,
        type: "hike",
        tags: ["hike", "mountain", "highest-point"],
        description:
          "Nejvyšší bod Německa. Konkrétní trasa, parkování a logistika zatím budou doplněny."
      }
    ]
  }
];
