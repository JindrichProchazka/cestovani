const rakouskoDestinations = [
  {
    id: "dobratsch",
    name: "Dobratsch",
    country: "Rakousko",
    region: "Korutany",
    lat: 46.6032406,
    lon: 13.6728044,
    wishlist: false,
    description:
      "Kratší, ale prudký výstup z Bad Bleibergu směrem na vrcholovou oblast Dobratsche.",
    tags: ["hike", "mountain", "parking"],

    quickInfo: [
      { icon: "🥾", label: "Pevné boty" },
      { icon: "💧", label: "Voda" },
      { icon: "🌦️", label: "Počasí" }
    ],

    routes: [
      {
        id: "dobratsch-route",
        name: "Bad Bleiberg → Dobratsch",
        type: "hike",
        file: "routes/dobratsch.gpx",
        distanceKm: 4.2,
        elevationGainM: 1225,
        description:
          "Prudký výstup z Bad Bleibergu do vrcholové oblasti."
      }
    ],

    points: [
      {
        id: "dobratsch-parking-1",
        name: "Parkoviště 1",
        lat: 46.6252819,
        lon: 13.6842758,
        type: "parking",
        tags: ["parking"],
        description:
          "Menší asfaltové parkoviště zdarma v Bad Bleibergu."
      },

      {
        id: "dobratsch-parking-2",
        name: "Parkoviště 2",
        lat: 46.6247983,
        lon: 13.6858208,
        type: "parking",
        tags: ["parking"],
        description:
          "Další menší asfaltové parkoviště zdarma v těsné blízkosti nástupu na trasu."
      },

      {
        id: "dobratsch-parking-3",
        name: "Parkoviště 3",
        lat: 46.6251967,
        lon: 13.6848989,
        type: "parking",
        tags: ["parking"],
        description:
          "Třetí možnost parkování zdarma. Všechna tři parkoviště jsou blízko sebe a mají spíš menší kapacitu."
      },

      {
        id: "dobratsch-summit",
        name: "Dobratsch – vrcholová oblast",
        lat: 46.6032406,
        lon: 13.6728044,
        type: "hike",
        tags: ["hike", "viewpoint", "mountain"],
        description:
          "Hlavní cíl výstupu. V okolí je vysílač, Dobratsch-Gipfelhaus, kaplička a další menší cíle."
      }
    ]
  },

  {
    id: "millstatter-see",
    name: "Millstätter See",
    country: "Rakousko",
    region: "Korutany",
    lat: 46.8110856,
    lon: 13.5481222,
    wishlist: true,
    description:
      "Jezero, koupání, paddleboard a přibližně 40km cyklistický okruh.",
    tags: ["cycling", "paddleboard", "swimming", "parking", "toilet"],

    quickInfo: [
      { icon: "🚴", label: "Kolo" },
      { icon: "🧴", label: "Opalovák" },
      { icon: "💧", label: "Voda" }
    ],

    routes: [
      {
        id: "millstatt-cycle",
        name: "Okruh kolem Millstätter See",
        type: "cycling",
        file: "routes/MillstatCyklo.gpx",
        distanceKm: 40.1,
        elevationGainM: 557,
        description:
          "Silniční okruh kolem jezera. Z 99 % by měl být vhodný a hezký na silničku, před cestou jen rychle zkontrolovat aktuální průjezdnost."
      }
    ],

    points: [
      {
        id: "millstatt-parking",
        name: "Parkoviště u jezera",
        lat: 46.8110856,
        lon: 13.5481222,
        type: "parking",
        tags: ["parking", "toilet", "swimming", "paddleboard"],
        description:
          "Parkoviště, které by mělo být zdarma. Hned u něj jsou veřejné toalety a během chvíle se dá dojít k jezeru."
      },

      {
        id: "millstatt-beach",
        name: "Klidná pláž",
        lat: 46.8108639,
        lon: 13.5481214,
        type: "swimming",
        tags: ["swimming", "paddleboard"],
        description:
          "Klidnější přístup k Millstätter See s dřevěnými schody do vody. Dobré místo na koupání a nástup na paddleboard."
      }
    ]
  },

  {
    id: "solden-high-road",
    name: "Sölden – nejvyšší asfalt",
    country: "Rakousko",
    region: "Tyrolsko",
    lat: 46.9230858,
    lon: 10.9452278,
    wishlist: true,
    description:
      "Vysokohorský cyklistický výjezd ze Söldenu směrem k ledovcové silnici. Cílem je dostat se přibližně do 2 820 m n. m.",
    tags: ["cycling", "mountain"],

    quickInfo: [
      { icon: "🚴", label: "Silniční kolo" },
      { icon: "🧥", label: "Vrstva na sjezd" },
      { icon: "💧", label: "Dost pití" }
    ],

    routes: [
      {
        id: "solden-cycle-route",
        name: "Sölden – výjezd k 2 820 m",
        type: "cycling",
        file: "routes/Solden.gpx",
        distanceKm: 28.6,
        elevationGainM: 1369,
        description:
          "Výjezd nahoru a zpět. Celkem 28,6 km a přibližně 1 369 m převýšení. Vrchol trasy je přibližně ve 2 820 m n. m."
      }
    ],

    points: [
      {
        id: "solden-parking",
        name: "Parkoviště – start trasy",
        lat: 46.9573319,
        lon: 11.0076806,
        type: "parking",
        tags: ["parking", "cycling"],
        description:
          "Asfaltové parkoviště zdarma. Výchozí místo pro cyklistický výjezd."
      },

      {
        id: "solden-highest-road",
        name: "Cíl výjezdu – cca 2 820 m",
        lat: 46.9230858,
        lon: 10.9452278,
        type: "cycling",
        tags: ["cycling", "mountain"],
        description:
          "Hlavní cíl výjezdu. Přibližná nadmořská výška 2 820 m n. m."
      }
    ]
  }
];
