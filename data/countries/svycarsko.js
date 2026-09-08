const svycarskoDestinations = [
  {
    id: "lavertezzo",
    name: "Lavertezzo",
    country: "Švýcarsko",
    region: "Ticino",
    lat: 46.2600281,
    lon: 8.8359481,
    wishlist: false,
    description:
      "Ikonické místo v údolí Verzasca s kamenným mostem Ponte dei Salti, průzračnou řekou a koupáním. V létě je místo velmi turistické.",
    tags: ["swimming", "jumping", "sight", "toilet"],

    points: [
      {
        id: "lavertezzo-ponte-dei-salti",
        name: "Ponte dei Salti",
        lat: 46.2600281,
        lon: 8.8359481,
        type: "swimming",
        tags: ["swimming", "jumping", "sight", "bridge"],
        description:
          "Ikonický kamenný most přes řeku Verzasca v Lavertezzu. Velmi pěkné místo na koupání a známé i skákáním do vody. Počítat ale s tím, že hlavně v létě je tu hodně turistů. Před skákáním vždy zkontrolovat aktuální stav vody, hloubku a místo dopadu."
      },

      {
        id: "lavertezzo-public-toilet",
        name: "Veřejné WC",
        lat: 46.2594497,
        lon: 8.8379708,
        type: "toilet",
        tags: ["toilet", "unverified"],
        description:
          "Veřejné WC kousek od Ponte dei Salti. Podle dostupných informací by mělo být zdarma, ale osobně zatím neověřeno."
      }
    ]
  }
];
