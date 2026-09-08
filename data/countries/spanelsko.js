const spanelskoDestinations = [
  {
    id: "teide",
    name: "Pico del Teide",
    country: "Španělsko",
    region: "Tenerife",
    lat: 28.2726933,
    lon: -16.6422736,
    wishlist: true,
    description:
      "Nejvyšší hora Španělska a nejvyšší bod Tenerife, 3 718 m n. m. Výstup je výrazně regulovaný: některé přístupové trasy i samotný závěr na vrchol vyžadují rezervaci přes Tenerife ON.",
    tags: ["hike", "mountain", "highest-point", "parking", "sleep"],

    quickInfo: [
      { icon: "🎫", label: "Permit" },
      { icon: "🪪", label: "Doklad" },
      { icon: "💧", label: "Voda" },
      { icon: "🥾", label: "Horská výbava" }
    ],

    routes: [
      {
        id: "teide-route-a",
        name: "Teide – varianta A přes Montaña Blanca",
        type: "hike",
        file: "routes/PicoDeTeide_varianta_A.gpx",
        distanceKm: 18.8,
        elevationGainM: 1322,
        description:
          "Kratší varianta výstupu přes oblast Montaña Blanca. Přibližně 18,8 km a 1 322 m převýšení. Pro pěší výstup přes regulované úseky je potřeba včas řešit rezervace."
      },

      {
        id: "teide-route-b",
        name: "Teide – varianta B přes Pico Viejo",
        type: "hike",
        file: "routes/PicoDeTeide_varianta_B.gpx",
        distanceKm: 22.6,
        elevationGainM: 1693,
        description:
          "Delší varianta, přibližně 22,6 km a 1 693 m převýšení. Měla by být zajímavější krajinářsky a vede přes oblast Pico Viejo s výrazným vulkanickým kráterem."
      }
    ],

    notes: [
      {
        title: "Povolení – řešit dopředu",
        description:
          "Rezervace se řeší přes Tenerife ON. Pro regulované úseky je potřeba rezervace a pro samotný závěr na vrchol může být potřeba samostatné povolení. Nové termíny se otevírají každé pondělí v 7:00 kanárského času a systém zpřístupňuje termíny maximálně 56 dní dopředu."
      },

      {
        title: "Tenerife ON",
        description:
          "Před plánováním výstupu vždy zkontrolovat web nebo aplikaci Tenerife ON. Kromě rezervací tam jsou aktuální uzavírky, omezení a podmínky jednotlivých tras."
      },

      {
        title: "Kontrola výbavy může být přísná",
        description:
          "Zkušenost jiných lidí z 10. 5.: měli oba permity, ale na checkpointu byla striktně kontrolována výbava. Kvůli zbytkům sněhu byly požadovány klasické mačky a nesmeky / řetízky nebyly uznány. Lidé bez požadované výbavy byli vraceni. Před cestou vždy ověřit aktuální podmínky."
      },

      {
        title: "Autobusy",
        description:
          "Linka 342 vyráží z Costa Adeje v 9:25. Linka 348 vyráží z Puerto de la Cruz v 9:30. Pro variantu přes Montaña Blanca řešit vhodný výstup poblíž Montaña Blanca; pro variantu B se hodí Parador de Turismo. Aktuální jízdní řád vždy ověřit před cestou."
      },

      {
        title: "Autobus + pěší výstup",
        description:
          "Čistě pěší celodenní výstup není rozumné plánovat s tím, že se stihne ranní autobus nahoru a stejný den odpolední autobus zpět. Reálnější je kombinace s povoleným bivakem nebo jiná logistika."
      },

      {
        title: "Bivak",
        description:
          "Bivak v národním parku je regulovaný a vyžaduje předchozí rezervaci přes Tenerife ON. S sebou bivakovací vak, doklad totožnosti, dostatek vody a uložené povolení."
      }
    ],

    points: [
      {
        id: "teide-summit",
        name: "Pico del Teide – 3 718 m",
        lat: 28.2726933,
        lon: -16.6422736,
        type: "hike",
        tags: ["hike", "mountain", "highest-point"],
        description:
          "Nejvyšší bod Španělska. Závěrečný úsek na vrchol je regulovaný a je potřeba řešit aktuální povolení."
      },

      {
        id: "teide-parking-a",
        name: "Parkoviště – varianta A",
        lat: 28.2594656,
        lon: -16.6032911,
        type: "parking",
        tags: ["parking", "hike"],
        description:
          "Menší parkoviště vhodné jako nástup na variantu A přes Montaña Blanca. Kapacita není velká."
      },

      {
        id: "teide-cablecar-parking",
        name: "Parkoviště u lanovky",
        lat: 28.2549311,
        lon: -16.6217906,
        type: "parking",
        tags: ["parking", "hike", "cablecar"],
        description:
          "Alternativní parkování, pokud bude parkoviště u nástupu na variantu A plné. K začátku trasy je potřeba dojít přibližně 1,5 km."
      },

      {
        id: "teide-parking-b",
        name: "Parkoviště – varianta B",
        lat: 28.2234011,
        lon: -16.6300442,
        type: "parking",
        tags: ["parking", "hike"],
        description:
          "Parkování poblíž Paradoru. Výchozí místo pro delší variantu B přes vulkanickou oblast Pico Viejo."
      },

      {
        id: "teide-bivouac-1",
        name: "Bivakovací varianta 1",
        lat: 28.2696003,
        lon: -16.6175272,
        type: "sleep",
        tags: ["sleep", "hike", "permit"],
        description:
          "Jedna z uložených možností pro regulovaný bivak. Nutná předchozí rezervace přes Tenerife ON."
      },

      {
        id: "teide-bivouac-2",
        name: "Bivakovací varianta 2",
        lat: 28.2632353,
        lon: -16.6604078,
        type: "sleep",
        tags: ["sleep", "hike", "permit"],
        description:
          "Další uložená možnost bivaku. Nutná rezervace a kontrola aktuálních pravidel."
      },

      {
        id: "teide-bivouac-3",
        name: "Bivakovací varianta 3",
        lat: 28.2558078,
        lon: -16.6762642,
        type: "sleep",
        tags: ["sleep", "hike", "permit"],
        description:
          "Třetí uložené bivakovací místo. Použití pouze podle aktuálních pravidel a s rezervací přes Tenerife ON."
      }
    ]
  }
];
