const italieDestinations = [
  {
    id: "tarvisio",
    name: "Tarvisio",
    country: "Itálie",
    region: "Friuli-Venezia Giulia",
    lat: 46.5038,
    lon: 13.5808,
    wishlist: false,
    description:
      "Malé horské město, které mám velmi rád. Kafe, výborná zmrzlina, parkování, servis a nově i pěkné koupání s vodopádem.",
    tags: ["coffee", "food", "parking", "waterfall", "swimming"],

    points: [
      {
        id: "tarvisio-cafe-old",
        name: "Kavárna se skvělou zmrzlinou",
        lat: 46.5039017,
        lon: 13.5849883,
        type: "coffee",
        tags: ["coffee", "icecream", "toilet"],
        description:
          "Kavárna, kam jsem dřív chodil velmi rád. Espresso asi 7,5/10. Hlavní důvod návštěvy je ale zmrzlina kolem 2 €, která patří k nejlepším, co jsem zatím měl."
      },

      {
        id: "tarvisio-parking-supermarket",
        name: "Parkování u supermarketu",
        lat: 46.5036808,
        lon: 13.5851289,
        type: "parking",
        tags: ["parking", "supermarket"],
        description:
          "Neplacené parkování přímo před supermarketem. Kapacita je malá, přibližně kolem 8 míst."
      },

      {
        id: "tarvisio-cafe-local",
        name: "Lokální kavárna se zahrádkou",
        lat: 46.5042531,
        lon: 13.5773072,
        type: "coffee",
        tags: ["coffee", "food", "toilet", "terrace"],
        description:
          "Momentálně moje oblíbenější varianta. Espresso stálo při návštěvě 1,30 €, místo má lokální atmosféru a velkou zahrádku. Platba hotově i kartou."
      },

      {
        id: "tarvisio-parking-local",
        name: "Velké štěrkové parkoviště",
        lat: 46.5036375,
        lon: 13.5777097,
        type: "parking",
        tags: ["parking"],
        description:
          "Velké štěrkové parkoviště zdarma hned za rohem od lokální kavárny."
      },

      {
        id: "tarvisio-zamolo",
        name: "Zamolo – autoservis",
        lat: 46.5047122,
        lon: 13.5719803,
        type: "service",
        tags: ["service", "car"],
        description:
          "Rodinný autoservis, se kterým mám výbornou zkušenost. Odstranění chyby AdBlue u Peugeotu Rifter 2019 stálo 30 €."
      },

      {
        id: "tarvisio-waterfall-parking",
        name: "Parkoviště k vodopádu",
        lat: 46.5063531,
        lon: 13.6040703,
        type: "parking",
        tags: ["parking", "waterfall", "swimming"],
        description:
          "Asfaltové parkoviště, které by mělo mít dostatečnou kapacitu. Odtud se dá po červené dojít směrem k vodopádu."
      },

      {
        id: "tarvisio-waterfall",
        name: "Vodopád u Tarvisia",
        lat: 46.5061153,
        lon: 13.6012111,
        type: "waterfall",
        tags: ["waterfall", "swimming", "nature"],
        description:
          "Pěkný vodopád kousek od Tarvisia. Od parkoviště se k němu dá dojít po červené trase a celé okolí je vhodné i na koupání."
      },

      {
        id: "tarvisio-wooden-path",
        name: "Dřevěná stezka nad vodou",
        lat: 46.5084297,
        lon: 13.6034375,
        type: "swimming",
        tags: ["swimming", "nature", "walk", "waterfall"],
        description:
          "Pěkná dřevěná cesta vedená nad vodou v okolí vodopádu. Celá oblast působí jako příjemné místo na krátkou procházku i koupání."
      }
    ]
  },

  {
    id: "stelvio",
    name: "Passo dello Stelvio",
    country: "Itálie",
    region: "Jižní Tyrolsko",
    lat: 46.5286,
    lon: 10.4532,
    wishlist: true,
    description:
      "Vysokohorský cyklistický přejezd přes Passo dello Stelvio. Dlouhá trasa s téměř 1 900 m převýšení a vrcholem přibližně ve 2 760 m n. m.",
    tags: ["cycling", "mountain"],

    quickInfo: [
      { icon: "🚴", label: "Silniční kolo" },
      { icon: "🧥", label: "Vrstva na sjezd" },
      { icon: "💧", label: "Dost pití" }
    ],

    routes: [
      {
        id: "stelvio-cycle-route",
        name: "Přejezd přes Stelvio",
        type: "cycling",
        file: "routes/Stelvio.gpx",
        distanceKm: 64.8,
        elevationGainM: 1892,
        description:
          "Cyklistická trasa přes Stelvio. Celkem 64,8 km a přibližně 1 892 m převýšení. Nejvyšší bod je kolem 2 760 m n. m."
      }
    ],

    points: [
      {
        id: "stelvio-start",
        name: "Start trasy",
        lat: 46.6178631,
        lon: 10.5954408,
        type: "cycling",
        tags: ["cycling"],
        description:
          "Výchozí bod uložené trasy přes Stelvio."
      },

      {
        id: "stelvio-pass",
        name: "Passo dello Stelvio",
        lat: 46.5286,
        lon: 10.4532,
        type: "cycling",
        tags: ["cycling", "mountain"],
        description:
          "Hlavní vrchol trasy. Sedlo leží přibližně ve 2 760 m n. m."
      }
    ]
  }
];
