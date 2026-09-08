
const ceskoDestinations = [
  {
    id: "snezka",
    name: "Sněžka",
    country: "Česko",
    region: "Krkonoše",
    lat: 50.73602,
    lon: 15.7396017,
    wishlist: false,
    description:
      "Nejvyšší hora Česka a klasický krkonošský cíl. V okolí je víc možností nástupu a několik parkovišť, z nichž některá jsou placená.",
    tags: [
      "hike",
      "mountain",
      "parking",
      "toilet",
      "highest-point"
    ],

    quickInfo: [
      { icon: "🥾", label: "Pevné boty" },
      { icon: "🧥", label: "Vrstva navíc" },
      { icon: "💧", label: "Voda" }
    ],

    routes: [
      {
        id: "snezka-karpacz-route",
        name: "Okruh Sněžka z Karpacze",
        type: "hike",
        file: "routes/OkruhSnezkaKarpacz.gpx",
        description:
          "Taková jednodušší cesta. Je to celistvý okruh. Trošku bacha na to, že je to na polské straně — jestli bude hodně lidí, tak se tím davem Poláků neprorveš. Bude fronta až na vrchol. Fronta polsky: pan za panem, až pan nevidí pana."
      }
    ],

    points: [
      {
        id: "snezka-peak",
        name: "Sněžka – 1 603 m",
        lat: 50.73602,
        lon: 15.7396017,
        type: "hike",
        tags: ["hike", "mountain", "highest-point"],
        description:
          "Vrchol Sněžky, 1 603 m n. m. Nejvyšší bod Česka."
      },

      {
        id: "snezka-parking-paid-1",
        name: "Placené parkoviště – 1. hodina zdarma",
        lat: 50.699555,
        lon: 15.7363014,
        type: "parking",
        tags: ["parking", "paid"],
        description:
          "Placené parkoviště. První hodina zdarma, celodenní parkování přibližně 300 Kč."
      },

      {
        id: "snezka-parking-paid-2",
        name: "Placené parkoviště – 300 Kč / den",
        lat: 50.6893578,
        lon: 15.7676192,
        type: "parking",
        tags: ["parking", "paid"],
        description:
          "Placené parkoviště, přibližně 300 Kč za den."
      },

      {
        id: "snezka-parking-small",
        name: "Parkoviště – cca 10 míst",
        lat: 50.7662406,
        lon: 15.7616661,
        type: "parking",
        tags: ["parking"],
        description:
          "Menší parkoviště zdarma, kapacita přibližně 10 aut."
      },

      {
        id: "snezka-parking-few-cars",
        name: "Parkoviště pro několik aut",
        lat: 50.7876733,
        lon: 15.6945169,
        type: "parking",
        tags: ["parking"],
        description:
          "Menší bezplatné parkoviště pro několik aut."
      },

      {
        id: "snezka-parking-church",
        name: "Parkoviště u kostela",
        lat: 50.7899631,
        lon: 15.6954203,
        type: "parking",
        tags: ["parking"],
        description:
          "Zpevněné parkoviště u kostela. Dostatek míst, zdarma a podle zkušenosti bývá často prázdné."
      },

      {
        id: "snezka-public-toilet",
        name: "Veřejné WC",
        lat: 50.7737025,
        lon: 15.7333764,
        type: "toilet",
        tags: ["toilet"],
        description:
          "Veřejné WC / mobilní toaleta."
      },

      {
        id: "snezka-parking-road",
        name: "Parkoviště u cesty",
        lat: 50.7755742,
        lon: 15.7268214,
        type: "parking",
        tags: ["parking"],
        description:
          "Parkování u cesty, které působí jako legitimní bezplatné parkoviště. Kapacita přibližně 15 aut."
      },

      {
        id: "snezka-parking-south-1",
        name: "Možné parkoviště",
        lat: 50.6606,
        lon: 15.8193,
        type: "parking",
        tags: ["parking", "unverified"],
        description:
          "Mělo by jít o bezplatné parkování, ale aktuální režim není ověřený."
      },

      {
        id: "snezka-parking-south-2",
        name: "Pravděpodobně bezplatné parkoviště",
        lat: 50.6615,
        lon: 15.82,
        type: "parking",
        tags: ["parking", "unverified"],
        description:
          "Pravděpodobně stále bezplatné parkování. Aktuální značení je vhodné ověřit na místě."
      }
    ]
  }
];
