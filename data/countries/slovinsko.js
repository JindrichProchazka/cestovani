const slovinskoDestinations = [
  {
    id: "susec",
    name: "Sušec",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.2925364,
    lon: 13.4876325,
    wishlist: false,
    description:
      "Kaskáda vodopádů a canyoningová lokalita poblíž Srpenice.",
    tags: ["waterfall", "nature", "parking"],

    points: [
      {
        id: "susec-waterfalls",
        name: "Vodopády Sušec",
        lat: 46.2925364,
        lon: 13.4876325,
        type: "waterfall",
        tags: ["waterfall", "canyoning", "nature"],
        description:
          "Kaskáda vodopádů a skalních koryt. Oblast je využívaná pro komerční canyoning, takže je možné narazit na skupiny lidí s průvodci."
      },

      {
        id: "susec-parking-main",
        name: "Štěrkové parkoviště",
        lat: 46.2958619,
        lon: 13.4931339,
        type: "parking",
        tags: ["parking"],
        description:
          "Štěrkové parkoviště poblíž přístupu k Sušci."
      },

      {
        id: "susec-parking-near",
        name: "Menší štěrkové parkoviště",
        lat: 46.2954489,
        lon: 13.4898414,
        type: "parking",
        tags: ["parking"],
        description:
          "Menší kapacita, ale je blíž k vodopádům."
      }
    ]
  },

  {
    id: "tolmin",
    name: "Tolmin",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.1818,
    lon: 13.7425,
    wishlist: false,
    description:
      "Vodopád Beri, koupání v Soče, parkování, kafe a praktická místa.",
    tags: ["waterfall", "swimming", "coffee", "parking"],

    points: [
      {
        id: "tolmin-beri",
        name: "Vodopád Beri",
        lat: 46.1836975,
        lon: 13.7646464,
        type: "waterfall",
        tags: ["waterfall", "swimming"],
        description:
          "Hezký menší vodopád kousek od parkování. Při mé návštěvě téměř bez lidí. Pod vodopádem se dá příjemně osvěžit."
      },

      {
        id: "tolmin-beri-parking",
        name: "Parkoviště k vodopádu Beri",
        lat: 46.1797797,
        lon: 13.7555281,
        type: "parking",
        tags: ["parking", "waterfall", "unverified"],
        description:
          "Osobně nevyzkoušeno, ale mělo by jít o použitelné parkování pro cestu k vodopádu. Po silných deštích mohou být některá místa v oblasti dočasně nepoužitelná."
      },

      {
        id: "tolmin-cafe",
        name: "Kavárna se zahrádkou",
        lat: 46.1826611,
        lon: 13.7287506,
        type: "coffee",
        tags: [
          "coffee",
          "food",
          "icecream",
          "parking",
          "toilet",
          "supermarket"
        ],
        description:
          "Příjemná kavárna se zahrádkou. Káva je v pohodě, ale velké plus je velmi dobrá zmrzlina za rozumné peníze. Hned u místa je supermarket, parkování a toalety."
      },

      {
        id: "tolmin-cemetery-parking",
        name: "Parkoviště u hřbitova",
        lat: 46.1800519,
        lon: 13.7243953,
        type: "parking",
        tags: ["parking", "swimming", "hygiene", "soca"],
        description:
          "Parkování zdarma. Přibližně do 3 minut chůze je na obě strany přístup k Soče. Hodí se na rychlé koupání, opláchnutí nebo ranní hygienu."
      }
    ]
  },

  {
    id: "most-na-soci",
    name: "Most na Soči",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.1532875,
    lon: 13.740185,
    wishlist: false,
    description:
      "Klidnější místo na Soče vhodné na paddleboard, koupání a skákání.",
    tags: ["paddleboard", "swimming", "parking", "jumping"],

    points: [
      {
        id: "most-paddle-parking",
        name: "Parkování pro paddleboard",
        lat: 46.1667028,
        lon: 13.7550231,
        type: "parking",
        tags: ["parking", "paddleboard"],
        description:
          "Bezplatné parkování u silnice. Přibližně 4 minuty pěšky od místa, odkud se dá vyrazit na paddleboard směrem na Most na Soči."
      },

      {
        id: "most-paddle-launch",
        name: "Nástup na paddleboard",
        lat: 46.1679567,
        lon: 13.7552967,
        type: "paddleboard",
        tags: ["paddleboard", "water"],
        description:
          "Dobré místo pro spuštění paddleboardu na vodu a začátek výletu směrem na Most na Soči."
      },

      {
        id: "most-small-parking",
        name: "Malé parkoviště",
        lat: 46.1535458,
        lon: 13.7433928,
        type: "parking",
        tags: ["parking", "water"],
        description:
          "Malé místo přibližně pro 5 aut. Při mé návštěvě jsem neviděl zákaz parkování ani informaci o placení."
      },

      {
        id: "most-bridge",
        name: "Most na Soči",
        lat: 46.1532875,
        lon: 13.740185,
        type: "swimming",
        tags: ["swimming", "jumping", "bridge"],
        description:
          "Pěkný most přímo nad vodou a zajímavé místo na koupání. Jsou zde schůdky k vodě a z mostu se také skáče."
      }
    ]
  },

  {
    id: "napoleon-bridge",
    name: "Napoleon Bridge",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.2483369,
    lon: 13.5861278,
    wishlist: false,
    description:
      "Hezké místo na Soče na koupání, smočení a případně skákání. Hlavním bodem je Napoleonův most, ale v okolí jsou i další přístupy k vodě, parkování a kemp se sprchami a WC.",
    tags: [
      "swimming",
      "jumping",
      "parking",
      "shower",
      "toilet",
      "sight"
    ],

    points: [
      {
        id: "napoleon-main-parking",
        name: "Velké štěrkové parkoviště",
        lat: 46.24367,
        lon: 13.5864119,
        type: "parking",
        tags: ["parking"],
        description:
          "Velké štěrkové parkoviště zdarma s dobrou kapacitou. K Napoleonovu mostu je to odtud kousek pěšky."
      },

      {
        id: "napoleon-bridge-main",
        name: "Napoleonův most",
        lat: 46.2483369,
        lon: 13.5861278,
        type: "sight",
        tags: ["sight", "swimming", "jumping", "history"],
        description:
          "Historický most přes Soču. Jméno získal podle francouzských jednotek, které jej překračovaly v době Napoleonových tažení. Zároveň je to velmi pěkné místo na koupání a je tu potenciál ke skákání do vody."
      },

      {
        id: "napoleon-camp-shower-1",
        name: "Sprcha v kempu 1",
        lat: 46.2500853,
        lon: 13.5871467,
        type: "shower",
        tags: ["shower", "camp", "unverified"],
        description:
          "Sprcha v nedalekém kempu. Osobně neověřeno, ale podle map by měla být dostupná. Podmínky použití je vhodné ověřit na místě."
      },

      {
        id: "napoleon-camp-shower-2",
        name: "Sprcha v kempu 2",
        lat: 46.2510533,
        lon: 13.5868375,
        type: "shower",
        tags: ["shower", "camp", "unverified"],
        description:
          "Další sprcha v areálu kempu. Osobně neověřeno."
      },

      {
        id: "napoleon-camp-shower-3",
        name: "Sprcha v kempu 3",
        lat: 46.2514856,
        lon: 13.58666,
        type: "shower",
        tags: ["shower", "camp", "unverified"],
        description:
          "Další možná sprcha v kempu. Osobně neověřeno."
      },

      {
        id: "napoleon-camp-toilet-1",
        name: "WC v kempu 1",
        lat: 46.2501075,
        lon: 13.5871364,
        type: "toilet",
        tags: ["toilet", "camp", "unverified"],
        description:
          "Toalety v areálu kempu. Osobně neověřeno, podle map by měly být dostupné."
      },

      {
        id: "napoleon-camp-toilet-2",
        name: "WC v kempu 2",
        lat: 46.2501686,
        lon: 13.5882828,
        type: "toilet",
        tags: ["toilet", "camp", "unverified"],
        description:
          "Další toalety v areálu kempu. Osobně neověřeno."
      },

      {
        id: "napoleon-north-parking",
        name: "Alternativní parkoviště",
        lat: 46.2535206,
        lon: 13.5848622,
        type: "parking",
        tags: ["parking"],
        description:
          "Další možnost parkování severně od Napoleonova mostu. Odtud se dá dojít jak k Napoleonovu mostu, tak k mostu Brv čez Sočo."
      },

      {
        id: "brv-cez-soco",
        name: "Brv čez Sočo",
        lat: 46.2562575,
        lon: 13.5870703,
        type: "swimming",
        tags: ["swimming", "jumping", "bridge"],
        description:
          "Další pěkné místo na Soče s přístupem k vodě. Minimálně vhodné na koupání, případně může mít i potenciál ke skákání."
      }
    ]
  },

  {
    id: "bovec-okoli",
    name: "Bovec a okolí",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.365,
    lon: 13.592,
    wishlist: false,
    description:
      "Okolí Bovce a Koritnice s koupáním, vodopády, skákáním, praktickou sprchou a několika méně frekventovanými místy u vody.",
    tags: [
      "swimming",
      "jumping",
      "waterfall",
      "hike",
      "parking",
      "shower",
      "toilet"
    ],

    points: [
      {
        id: "bovec-camp-shower",
        name: "Sprcha u Bovce",
        lat: 46.3316383,
        lon: 13.5742697,
        type: "shower",
        tags: ["shower", "toilet", "camp", "hygiene"],
        description:
          "Sprcha v kempu kousek od Bovce. U sprch jsou také toalety a oboje bylo při návštěvě ve velmi dobrém stavu. Parkovat se dá před kempem nebo podle aktuálních podmínek přímo v areálu."
      },

      {
        id: "koritnica-bridge-swimming",
        name: "Lávka nad Koritnicí",
        lat: 46.3599192,
        lon: 13.5908631,
        type: "swimming",
        tags: ["swimming", "jumping", "bridge", "koritnica"],
        description:
          "Krásné a poměrně schované místo pod tvrzí u Koritnice. U tvrze bývá hodně lidí, ale dolů k vodě už chodí málokdo a místo může být úplně prázdné. Z lávky se dá skákat do vody, ale podmínky je nutné vždy předem zkontrolovat."
      },

      {
        id: "koritnica-parking",
        name: "Parkoviště k lávce nad Koritnicí",
        lat: 46.3611811,
        lon: 13.5893364,
        type: "parking",
        tags: ["parking", "swimming", "koritnica"],
        description:
          "Štěrkové parkování zdarma u silnice. K vodě je to přibližně 500 m, ale sestup je poměrně prudký."
      },

      {
        id: "bovec-waterfalls-main",
        name: "Vodopády – horní část",
        lat: 46.4015786,
        lon: 13.6079567,
        type: "waterfall",
        tags: ["waterfall", "hike", "canyoning", "nature"],
        description:
          "Největší z vodopádů v této části údolí. Už samotná cesta podél vody stojí za návštěvu – je strmá, ale vede kolem více menších vodopádů a kaskád. Oblast se využívá i pro canyoning."
      },

      {
        id: "bovec-waterfalls-parking-1",
        name: "Parkování k vodopádům 1",
        lat: 46.4049517,
        lon: 13.6043814,
        type: "parking",
        tags: ["parking", "waterfall", "hike"],
        description:
          "Štěrkové místo, kde jsme pravděpodobně parkovali při cestě k vodopádům. Kapacita byla dostatečná."
      },

      {
        id: "bovec-waterfalls-parking-2",
        name: "Parkování k vodopádům 2",
        lat: 46.4067831,
        lon: 13.6045192,
        type: "parking",
        tags: ["parking", "waterfall", "hike"],
        description:
          "Alternativní štěrkové parkování k vodopádům. Mělo by mít dostatečnou kapacitu."
      }
    ]
  },

  {
    id: "triglav",
    name: "Triglav",
    country: "Slovinsko",
    region: "Julské Alpy",
    lat: 46.37794,
    lon: 13.83677,
    wishlist: false,
    description:
      "Nejvyšší hora Slovinska, 2 864 m n. m. Mám uložené tři varianty výstupu s různou délkou, převýšením a obtížností.",
    tags: ["hike", "mountain", "highest-point", "parking"],

    quickInfo: [
      { icon: "⏰", label: "Start cca 4:00" },
      { icon: "🥾", label: "Pevné boty" },
      { icon: "🌦️", label: "Suché počasí" },
      { icon: "💧", label: "Dost vody" }
    ],

    routes: [
      {
        id: "triglav-route-a",
        name: "Triglav – varianta A",
        type: "hike",
        file: "routes/Triglav_varianta_A.gpx",
        distanceKm: 27,
        elevationGainM: 2000,
        description:
          "Námi absolvovaná varianta. Přibližně 27 km a 2 000 m převýšení. Výstup trval asi 6 hodin včetně krátkých zastávek, sestup přibližně 5 h 20 min. Doporučuju vyrážet kolem 4:00. Za dobrého a suchého počasí jsme ferratový set nepotřebovali; v horších podmínkách už je situace úplně jiná."
      },

      {
        id: "triglav-route-b",
        name: "Triglav – varianta B",
        type: "hike",
        file: "routes/Triglav_varianta_B.gpx",
        distanceKm: 18,
        elevationGainM: 2130,
        description:
          "Kratší, ale velmi prudká varianta. Přibližně 18 km a 2 130 m převýšení. Trasa obsahuje úseky přibližně obtížnosti B- ferraty."
      },

      {
        id: "triglav-route-c",
        name: "Triglav – varianta C",
        type: "hike",
        file: "routes/Triglav_varianta_C.gpx",
        distanceKm: 23,
        elevationGainM: 1745,
        description:
          "Varianta dlouhá přibližně 23 km s převýšením asi 1 745 m. Obsahuje lehčí zajištěné úseky přibližně obtížnosti A."
      }
    ],

    points: [
      {
        id: "triglav-summit",
        name: "Triglav – 2 864 m",
        lat: 46.37794,
        lon: 13.83677,
        type: "hike",
        tags: ["hike", "mountain", "highest-point"],
        description:
          "Vrchol Triglavu ve výšce 2 864 m n. m. Nejvyšší bod Slovinska."
      },

      {
        id: "triglav-parking-a",
        name: "Parkoviště – varianta A",
        lat: 46.3462317,
        lon: 13.9239925,
        type: "parking",
        tags: ["parking", "hike"],
        description:
          "Bezplatné parkování pro variantu A. My jsme zde také přespali, ale nocování není jednoznačně povolené, takže je vhodné ověřit aktuální pravidla."
      },

      {
        id: "triglav-parking-b",
        name: "Parkoviště – varianta B",
        lat: 46.3839058,
        lon: 13.7735028,
        type: "parking",
        tags: ["parking", "hike", "unverified"],
        description:
          "Možný bezplatný nástup pro variantu B. Parkování není oficiálně ověřené, takže je potřeba před cestou zkontrolovat značení a aktuální režim."
      },

      {
        id: "triglav-parking-c",
        name: "Parkoviště – varianta C",
        lat: 46.3386975,
        lon: 13.9046003,
        type: "parking",
        tags: ["parking", "hike", "unverified"],
        description:
          "Parkování pro variantu C. Podle dostupných informací působí použitelně a legitimně, ale před cestou je vhodné ověřit aktuální podmínky."
      }
    ]
  }
];
