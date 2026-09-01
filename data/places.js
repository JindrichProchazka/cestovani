const destinations = [
  {
    id: "pula",
    name: "Pula",
    country: "Chorvatsko",
    region: "Istrie",
    lat: 44.8666,
    lon: 13.8496,
    status: "visited",
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
        status: "visited",
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
        status: "visited",
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
        status: "visited",
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
        status: "visited",
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
        tags: ["swimming", "jumping"],
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "visited",
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
        status: "visited",
        lastChecked: "2026-08-31",
        description:
          "Malé parkoviště zdarma. Výhoda je blízkost kempu."
      },
      {
        id: "pula-camp-shower",
        name: "Sprcha v kempu",
        lat: 44.8587156,
        lon: 13.8146203,
        type: "shower",
        tags: ["shower", "hygiene"],
        status: "visited",
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
        status: "visited",
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
        status: "visited",
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
        status: "visited",
        lastChecked: "2026-08-31",
        description:
          "Menší bezplatné parkoviště s omezením přibližně na 90 minut. Vedle je menší supermarket."
      }
    ]
  },

  {
    id: "susec",
    name: "Sušec",
    country: "Slovinsko",
    region: "Soča",
    lat: 46.2925364,
    lon: 13.4876325,
    status: "wishlist",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
    status: "visited",
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
        status: "visited",
        lastChecked: "2026-08-31",
        description:
          "Hezký menší vodopád kousek od parkování. Při mé návštěvě téměř bez lidí. Pod vodopádem se dá příjemně osvěžit."
      },
      {
        id: "tolmin-beri-parking",
        name: "Parkoviště k vodopádu Beri",
        lat: 46.1797797,
        lon: 13.7555281,
        type: "parking",
        tags: ["parking", "waterfall"],
        status: "wishlist",
        lastChecked: "2026-08-31",
        description:
          "Osobně nevyzkoušeno, ale mělo by jít o použitelné parkování pro cestu k vodopádu. Po silných deštích mohou být některá místa v oblasti dočasně nepoužitelná."
      },
      {
        id: "tolmin-cafe",
        name: "Kavárna se zahrádkou",
        lat: 46.1826611,
        lon: 13.7287506,
        type: "coffee",
        tags: ["coffee", "food", "icecream", "parking", "toilet", "supermarket"],
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
    status: "visited",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
        description:
          "Pěkný most přímo nad vodou a zajímavé místo na koupání. Jsou zde schůdky k vodě a z mostu se také skáče."
      }
    ]
  },

  {
    id: "dobratsch",
    name: "Dobratsch",
    country: "Rakousko",
    region: "Korutany",
    lat: 46.6032406,
    lon: 13.6728044,
    status: "wishlist",
    description:
      "Kratší, ale prudký výstup z Bad Bleibergu směrem na vrcholovou oblast Dobratsche.",
    tags: ["hike", "viewpoint", "mountain", "parking"],
    routes: [
      {
        id: "dobratsch-route",
        name: "Bad Bleiberg → Dobratsch",
        type: "hike",
        file: "routes/dobratsch.gpx",
        distanceKm: 4.2,
        elevationGainM: 1225,
        plannedTime: "2:49 h"
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
        description:
          "Třetí možnost parkování zdarma. Všechna tři parkoviště jsou blízko sebe a mají spíš menší kapacitu."
      },
      {
        id: "dobratsch-summit",
        name: "Dobratsch – vrcholová oblast",
        lat: 46.6032406,
        lon: 13.6728044,
        type: "hike",
        tags: ["viewpoint", "mountain", "hike"],
        status: "wishlist",
        lastChecked: "2026-08-31",
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

  status: "wishlist",
    description:
      "Jezero, koupání, paddleboard a přibližně 40km cyklistický okruh.",
    tags: ["cycling", "paddleboard", "swimming", "parking", "toilet"],
    routes: [
      {
        id: "millstatt-cycle",
        name: "Okruh kolem Millstätter See",
        type: "cycling",
        file: "routes/MillstatCyklo.gpx",
        distanceKm: 40.1,
        elevationGainM: 557,
        plannedTime: "2:43 h"
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
        status: "wishlist",
        lastChecked: "2026-08-31",
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
        status: "wishlist",
        lastChecked: "2026-08-31",
        description:
          "Klidnější přístup k Millstätter See s dřevěnými schody do vody. Dobré místo na koupání a nástup na paddleboard."
      }
    ]
  },

  {
    id: "tarvisio",
    name: "Tarvisio",
    country: "Itálie",
    region: "Friuli-Venezia Giulia",
    lat: 46.5038,
    lon: 13.5808,
    status: "visited",
    description:
      "Malé horské město, které mám velmi rád. Kafe, výborná zmrzlina, parkování a pár praktických tipů.",
    tags: ["coffee", "food", "parking", "service"],
    points: [
      {
        id: "tarvisio-cafe-old",
        name: "Kavárna se skvělou zmrzlinou",
        lat: 46.5039017,
        lon: 13.5849883,
        type: "coffee",
        tags: ["coffee", "icecream", "toilet"],
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
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
        status: "visited",
        lastChecked: "2026-08-31",
        description:
          "Rodinný autoservis, se kterým mám výbornou zkušenost. Odstranění chyby AdBlue u Peugeotu Rifter 2019 stálo 30 €."
      }
    ]
  },

  {
  id: "zugspitze",
  name: "Zugspitze",
  country: "Německo",
  region: "Bavorsko",
  lat: 47.421215,
  lon: 10.9862969,

  wishlist: true,

  status: "wishlist",
    description:
      "Nejvyšší hora Německa. Zatím uložené jako místo, které chci navštívit.",
    tags: ["hike", "mountain", "viewpoint"],
    points: []
  }

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
      tags: ["shower", "camp"],
      description:
        "Sprcha v nedalekém kempu. Osobně neověřeno, ale podle map by měla být dostupná. Podmínky použití je vhodné ověřit na místě."
    },

    {
      id: "napoleon-camp-shower-2",
      name: "Sprcha v kempu 2",
      lat: 46.2510533,
      lon: 13.5868375,
      type: "shower",
      tags: ["shower", "camp"],
      description:
        "Další sprcha v areálu kempu. Osobně neověřeno, ale podle map by měla být dostupná."
    },

    {
      id: "napoleon-camp-shower-3",
      name: "Sprcha v kempu 3",
      lat: 46.2514856,
      lon: 13.58666,
      type: "shower",
      tags: ["shower", "camp"],
      description:
        "Další možná sprcha v kempu. Osobně neověřeno."
    },

    {
      id: "napoleon-camp-toilet-1",
      name: "WC v kempu 1",
      lat: 46.2501075,
      lon: 13.5871364,
      type: "toilet",
      tags: ["toilet", "camp"],
      description:
        "Toalety v areálu kempu. Osobně neověřeno, podle map by měly být dostupné."
    },

    {
      id: "napoleon-camp-toilet-2",
      name: "WC v kempu 2",
      lat: 46.2501686,
      lon: 13.5882828,
      type: "toilet",
      tags: ["toilet", "camp"],
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
  
];
