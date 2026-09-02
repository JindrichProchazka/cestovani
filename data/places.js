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
      },

      {
  id: "tarvisio-waterfall-parking",
  name: "Parkoviště k vodopádu",
  lat: 46.5063531,
  lon: 13.6040703,

  type: "parking",

  tags: [
    "parking",
    "waterfall",
    "swimming"
  ],

  description:
    "Asfaltové parkoviště, které by mělo mít dostatečnou kapacitu. Odtud se dá po červené dojít směrem k vodopádu."
},

{
  id: "tarvisio-waterfall",
  name: "Vodopád u Tarvisia",
  lat: 46.5061153,
  lon: 13.6012111,

  type: "waterfall",

  tags: [
    "waterfall",
    "swimming",
    "nature"
  ],

  description:
    "Pěkný vodopád kousek od Tarvisia. Od parkoviště se k němu dá dojít po červené trase a celé okolí je vhodné i na koupání."
},

{
  id: "tarvisio-wooden-path",
  name: "Dřevěná stezka nad vodou",
  lat: 46.5084297,
  lon: 13.6034375,

  type: "swimming",

  tags: [
    "swimming",
    "nature",
    "walk",
    "waterfall"
  ],

  description:
    "Pěkná dřevěná cesta vedená nad vodou v okolí vodopádu. Celá oblast působí jako příjemné místo na krátkou procházku i koupání."
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
    tags: ["hike", "mountain", "highest-point", "viewpoint"],
    points: []
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

      tags: [
        "shower",
        "toilet",
        "camp",
        "hygiene"
      ],

      description:
        "Sprcha v kempu kousek od Bovce. U sprch jsou také toalety a oboje bylo při návštěvě ve velmi dobrém stavu. Parkovat se dá před kempem nebo podle aktuálních podmínek přímo v areálu. Podmínky využití sprch a WC je vhodné ověřit na místě."
    },

    {
      id: "koritnica-bridge-swimming",
      name: "Lávka nad Koritnicí",
      lat: 46.3599192,
      lon: 13.5908631,

      type: "swimming",

      tags: [
        "swimming",
        "jumping",
        "bridge",
        "koritnica"
      ],

      description:
        "Krásné a poměrně schované místo pod tvrzí u Koritnice. U tvrze bývá hodně lidí, ale dolů k vodě už chodí málokdo a místo může být úplně prázdné. Z lávky se dá skákat do vody, ale podmínky je nutné vždy předem zkontrolovat."
    },

    {
      id: "koritnica-parking",
      name: "Parkoviště k lávce nad Koritnicí",
      lat: 46.3611811,
      lon: 13.5893364,

      type: "parking",

      tags: [
        "parking",
        "swimming",
        "koritnica"
      ],

      description:
        "Štěrkové parkování zdarma u silnice. K vodě je to přibližně 500 m, ale sestup je poměrně prudký."
    },

    {
      id: "bovec-waterfalls-main",
      name: "Vodopády – horní část",
      lat: 46.4015786,
      lon: 13.6079567,

      type: "waterfall",

      tags: [
        "waterfall",
        "hike",
        "canyoning",
        "nature"
      ],

      description:
        "Největší z vodopádů v této části údolí. Už samotná cesta podél vody stojí za návštěvu – je strmá, ale vede kolem více menších vodopádů a kaskád. Oblast se využívá i pro canyoning."
    },

    {
      id: "bovec-waterfalls-parking-1",
      name: "Parkování k vodopádům 1",
      lat: 46.4049517,
      lon: 13.6043814,

      type: "parking",

      tags: [
        "parking",
        "waterfall",
        "hike"
      ],

      description:
        "Štěrkové místo, kde jsme pravděpodobně parkovali při cestě k vodopádům. Kapacita byla dostatečná."
    },

    {
      id: "bovec-waterfalls-parking-2",
      name: "Parkování k vodopádům 2",
      lat: 46.4067831,
      lon: 13.6045192,

      type: "parking",

      tags: [
        "parking",
        "waterfall",
        "hike"
      ],

      description:
        "Alternativní štěrkové parkování k vodopádům. Mělo by mít dostatečnou kapacitu."
    }

  ]
},

{
  id: "snezka",
  name: "Sněžka",
  country: "Česko",
  region: "Krkonoše",

  lat: 50.7360200,
  lon: 15.7396017,

  wishlist: false,

  description:
    "Nejvyšší hora Česka a taková klasička. V okolí je víc možností nástupu a několik parkovišť, z nichž některá jsou placená, tak bacha.",

  tags: [
    "hike",
    "mountain",
    "parking", 
    "highest-point",
    "toilet"
  ],

routes: [
  {
    id: "snezka-karpacz-route",
    name: "Okruh Sněžka z Karpacz",
    type: "hike",
    file: "routes/OkruhSnezkaKarpacz.gpx",
    description:
        "Taková jednodušší cesta. Je to celistvý okruh. 946m převýšení, 13.4km celkem. Když by se člověk otočil na Sněžce a šel stejnou zpátky je to 12.4km"
  }
],
  
  points: [

    {
      id: "snezka-peak",
      name: "Sněžka",
      lat: 50.7360200,
      lon: 15.7396017,

      type: "hike",

      tags: [
        "hike",
        "mountain"
      ],

      description:
        "Vrchol Sněžky, 1 603 m n. m. Hlavní cíl výletu."
    },

    {
      id: "snezka-parking-paid-1",
      name: "Placené parkoviště – 1. hodina zdarma",
      lat: 50.6995550,
      lon: 15.7363014,

      type: "parking",

      tags: [
        "parking",
        "paid"
      ],

      description:
        "Placené parkoviště. První hodina zdarma, celodenní parkování přibližně 300 Kč."
    },

    {
      id: "snezka-parking-paid-2",
      name: "Placené parkoviště – 300 Kč / den",
      lat: 50.6893578,
      lon: 15.7676192,

      type: "parking",

      tags: [
        "parking",
        "paid"
      ],

      description:
        "Placené parkoviště, přibližně 300 Kč za den."
    },

    {
      id: "snezka-parking-small",
      name: "Parkoviště – cca 10 míst",
      lat: 50.7662406,
      lon: 15.7616661,

      type: "parking",

      tags: [
        "parking"
      ],

      description:
        "Menší parkoviště zdarma, kapacita přibližně 10 aut."
    },

    {
      id: "snezka-parking-few-cars",
      name: "Parkoviště pro několik aut",
      lat: 50.7876733,
      lon: 15.6945169,

      type: "parking",

      tags: [
        "parking"
      ],

      description:
        "Menší bezplatné parkoviště pro několik aut."
    },

    {
      id: "snezka-parking-church",
      name: "Parkoviště u kostela",
      lat: 50.7899631,
      lon: 15.6954203,

      type: "parking",

      tags: [
        "parking"
      ],

      description:
        "Zpevněné parkoviště u kostela. Dostatek míst, zdarma a podle zkušenosti bývá často prázdné."
    },

    {
      id: "snezka-public-toilet",
      name: "Veřejné WC",
      lat: 50.7737025,
      lon: 15.7333764,

      type: "toilet",

      tags: [
        "toilet"
      ],

      description:
        "Veřejné WC / mobilní toaleta."
    },

    {
      id: "snezka-parking-road",
      name: "Parkoviště u cesty",
      lat: 50.7755742,
      lon: 15.7268214,

      type: "parking",

      tags: [
        "parking"
      ],

      description:
        "Parkování u cesty, které působí jako legitimní bezplatné parkoviště. Kapacita přibližně 15 aut."
    },

    {
      id: "snezka-parking-south-1",
      name: "Možné parkoviště",
      lat: 50.6606,
      lon: 15.8193,

      type: "parking",

      tags: [
        "parking",
        "unverified"
      ],

      description:
        "Mělo by jít o bezplatné parkování, ale aktuální režim není ověřený."
    },

    {
      id: "snezka-parking-south-2",
      name: "Pravděpodobně bezplatné parkoviště",
      lat: 50.6615,
      lon: 15.8200,

      type: "parking",

      tags: [
        "parking",
        "unverified"
      ],

      description:
        "Pravděpodobně stále bezplatné parkování. Aktuální značení je vhodné ověřit na místě."
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

  tags: [
    "cycling",
    "mountain"
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

      tags: [
        "parking",
        "cycling"
      ],

      description:
        "Asfaltové parkoviště zdarma. Výchozí místo pro cyklistický výjezd."
    },

    {
      id: "solden-highest-road",
      name: "Cíl výjezdu – cca 2 820 m",
      lat: 46.9230858,
      lon: 10.9452278,

      type: "cycling",

      tags: [
        "cycling",
        "mountain"
      ],

      description:
        "Hlavní cíl výjezdu. Přibližná nadmořská výška 2 820 m n. m."
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

  tags: [
    "cycling",
    "mountain"
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

      tags: [
        "cycling"
      ],

      description:
        "Výchozí bod uložené trasy přes Stelvio."
    },

    {
      id: "stelvio-pass",
      name: "Passo dello Stelvio",
      lat: 46.5286,
      lon: 10.4532,

      type: "cycling",

      tags: [
        "cycling",
        "mountain"
      ],

      description:
        "Hlavní vrchol trasy. Sedlo leží přibližně ve 2 760 m n. m."
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

  tags: [
    "hike",
    "mountain",
    "highest-point",
    "parking"
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
        "Námi absolvovaná varianta. Přibližně 27 km a 2 000 m převýšení. Výstup trval asi 6 hodin včetně krátkých zastávek na převlečení a lehké jídlo, sestup přibližně 5 h 20 min. Doporučuju vyrážet kolem 4:00, kdy je na cestě výrazně méně lidí. Za dobrého a suchého počasí jsme ferratový set nepotřebovali, ale závěrečné exponované úseky je potřeba posoudit podle podmínek a zkušeností."
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

      tags: [
        "hike",
        "mountain",
        "highest-point"
      ],

      description:
        "Vrchol Triglavu ve výšce 2 864 m n. m. Nejvyšší bod Slovinska."
    },

    {
      id: "triglav-parking-a",
      name: "Parkoviště – varianta A",
      lat: 46.3462317,
      lon: 13.9239925,

      type: "parking",

      tags: [
        "parking",
        "hike"
      ],

      description:
        "Bezplatné parkování pro variantu A. My jsme zde také přespali, ale nocování není jednoznačně povolené, takže je vhodné ověřit aktuální pravidla."
    },

    {
      id: "triglav-parking-b",
      name: "Parkoviště – varianta B",
      lat: 46.3839058,
      lon: 13.7735028,

      type: "parking",

      tags: [
        "parking",
        "hike",
        "unverified"
      ],

      description:
        "Možný bezplatný nástup pro variantu B. Parkování není oficiálně ověřené, takže je potřeba před cestou zkontrolovat značení a aktuální režim."
    },

    {
      id: "triglav-parking-c",
      name: "Parkoviště – varianta C",
      lat: 46.3386975,
      lon: 13.9046003,

      type: "parking",

      tags: [
        "parking",
        "hike",
        "unverified"
      ],

      description:
        "Parkování pro variantu C. Podle dostupných informací působí použitelně a legitimně, ale před cestou je vhodné ověřit aktuální podmínky."
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

      tags: [
        "hike",
        "mountain",
        "highest-point"
      ],

      description:
        "Vrchol Dinara, označovaný také jako Sinjal. Ve výšce 1 831 m n. m. jde o nejvyšší bod Chorvatska."
    },

    {
      id: "dinara-parking-a",
      name: "Parkoviště – nástup na Dinaru",
      lat: 44.0101353,
      lon: 16.4203472,

      type: "parking",

      tags: [
        "parking",
        "hike"
      ],

      description:
        "Menší bezplatné parkoviště, ale polohou ideální jako nástup na uloženou trasu."
    },

    {
      id: "dinara-knin-waterfall",
      name: "Vodopád u Kninu",
      lat: 44.0422781,
      lon: 16.2356569,

      type: "waterfall",

      tags: [
        "waterfall",
        "swimming",
        "water"
      ],

      description:
        "Vodopád poblíž Kninu, který je autem relativně po cestě k Dinarě nebo zpět. Dobrá možnost zastávky a osvěžení ve sladké vodě po výstupu."
    }

  ]
},

{
  id: "rysy",
  name: "Rysy",
  country: "Polsko",
  region: "Tatry",

  lat: 49.1793186,
  lon: 20.0884636,

  wishlist: true,

  description:
    "Nejvyšší bod Polska. Výstup zatím nemám detailně naplánovaný, trasa i nástupní místo jsou ještě v přípravě.",

  tags: [
    "hike",
    "mountain",
    "highest-point"
  ],

  points: [

    {
      id: "rysy-summit",
      name: "Rysy – nejvyšší bod Polska",
      lat: 49.1793186,
      lon: 20.0884636,

      type: "hike",

      tags: [
        "hike",
        "mountain",
        "highest-point"
      ],

      description:
        "Hlavní cíl. Trasa, parkování a konkrétní plán výstupu jsou zatím v plánování."
    }

  ]
},

{
  id: "gerlach",
  name: "Gerlachovský štít",
  country: "Slovensko",
  region: "Vysoké Tatry",

  lat: 49.1640319,
  lon: 20.1340594,

  wishlist: true,

  description:
    "Nejvyšší bod Slovenska. Tohle není klasický turistický výstup po značené trase, takže před akcí je potřeba vyřešit způsob výstupu, oprávnění a pojištění.",

  tags: [
    "hike",
    "mountain",
    "highest-point"
  ],

  points: [

    {
      id: "gerlach-summit",
      name: "Gerlachovský štít",
      lat: 49.1640319,
      lon: 20.1340594,

      type: "hike",

      tags: [
        "hike",
        "mountain",
        "highest-point"
      ],

      description:
        "Nejvyšší bod Slovenska. Výstup je potřeba předem pořádně naplánovat podle aktuálních pravidel TANAPu a zvolené trasy."
    }

  ],

  notes: [
    {
      title: "Co vyřešit před výstupem",
      description:
        "Začít řešit ideálně na začátku roku. Prověřit aktuální pravidla TANAPu, členství v ČHS nebo jiném uznávaném horolezeckém svazu, vhodné pojištění pro zásah horské služby a konkrétní variantu výstupu. Členství ČHS se platí na kalendářní rok, takže dává smysl řešit ho kolem nového roku."
    },

    {
      title: "Důležité k výstupu",
      description:
        "Běžný výstup na Gerlach turistickou cestou není volně přístupná túra. Například výstup přes Velickou próbu je podle pravidel určen s horským vůdcem. Samostatný výstup člena horolezeckého svazu připadá v úvahu při skutečné horolezecké túře odpovídající požadované obtížnosti a pravidlům TANAPu."
    }
  ]
},

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

  tags: [
    "hike",
    "mountain",
    "highest-point",
    "parking"
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
        "Kratší varianta výstupu přes oblast Montaña Blanca. Přibližně 18,8 km a 1 322 m převýšení. Pro pěší výstup přes regulovaný úsek PNT 07 je potřeba rezervace a pro samotný závěr na vrchol přes PNT 10 další samostatné povolení."
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
        "Rezervace se řeší přes Tenerife ON. Pro PNT 07 Montaña Blanca – La Rambleta je potřeba rezervace a samostatné povolení je potřeba i pro PNT 10 Telesforo Bravo, tedy závěrečný výstup od horní stanice lanovky na samotný vrchol. Nové termíny se otevírají každé pondělí v 7:00 kanárského času a systém zpřístupňuje termíny maximálně 56 dní dopředu."
    },

    {
      title: "Tenerife ON",
      description:
        "Před plánováním výstupu vždy zkontrolovat web nebo aplikaci Tenerife ON. Kromě rezervací tam jsou aktuální uzavírky, omezení, počasí a podmínky jednotlivých tras."
    },

    {
      title: "Kontrola výbavy může být opravdu přísná",
      description:
        "Poznámka ze zkušenosti jiných lidí: při výstupu 10. 5. po trase č. 7 měli oba potřebné permity, ale na checkpointu byla striktně kontrolována výbava. Kvůli zbytkům sněhu byly požadovány klasické mačky a nesmeky nebo řetízky na boty nebyly uznány. Lidé bez požadované výbavy byli vraceni. Před cestou proto vždy zkontrolovat aktuální podmínky konkrétní rezervace, neřídit se jen tím, jak výstup vypadal v předchozích letech."
    },

    {
      title: "Povinná základní výbava",
      description:
        "Pro regulované vysokohorské úseky se kontroluje odpovídající horské vybavení. Běžně mezi požadavky patří uzavřená horská obuv, teplá bunda, dlouhé kalhoty, voda, termofólie, nabitý telefon a čelovka. Při sněhu a ledu mohou být podmínky výrazně přísnější a může být vyžadováno zimní vybavení včetně maček a cepínu."
    },

    {
      title: "Autobusy",
      description:
        "Linka 342 vyráží z Costa Adeje směrem k Teide v 9:25. Linka 348 vyráží z Puerto de la Cruz v 9:30. Pro variantu přes Montaña Blanca je potřeba řešit vhodný výstup poblíž Montaña Blanca, pro variantu B se hodí Parador de Turismo. Aktuální jízdní řád vždy ověřit před cestou."
    },

    {
      title: "Autobus + pěší výstup",
      description:
        "Čistě pěší celodenní výstup není rozumné plánovat s tím, že se stihne ranní autobus nahoru a stejný den odpolední autobus zpět. Reálnější je kombinace s povoleným bivakem nebo jiná logistika."
    },

    {
      title: "Bivak",
      description:
        "Bivak v národním parku je regulovaný a vyžaduje předchozí rezervaci přes Tenerife ON. S sebou počítat minimálně s bivakovacím vakem, dokladem totožnosti, dostatkem vody a uloženým povolením. Rezervaci řešit stejně dopředu jako ostatní regulované aktivity."
    }

  ],

  points: [

    {
      id: "teide-summit",
      name: "Pico del Teide – 3 718 m",
      lat: 28.2726933,
      lon: -16.6422736,

      type: "hike",

      tags: [
        "hike",
        "mountain",
        "highest-point"
      ],

      description:
        "Nejvyšší bod Španělska. Závěrečný úsek na vrchol je regulovaný a vyžaduje samostatné povolení."
    },

    {
      id: "teide-parking-a",
      name: "Parkoviště – varianta A",
      lat: 28.2594656,
      lon: -16.6032911,

      type: "parking",

      tags: [
        "parking",
        "hike"
      ],

      description:
        "Menší parkoviště vhodné jako nástup na variantu A přes Montaña Blanca. Kapacita není velká."
    },

    {
      id: "teide-cablecar-parking",
      name: "Parkoviště u lanovky",
      lat: 28.2549311,
      lon: -16.6217906,

      type: "parking",

      tags: [
        "parking",
        "hike",
        "cablecar"
      ],

      description:
        "Alternativní parkování, pokud bude parkoviště u nástupu na variantu A plné. K začátku trasy je potřeba dojít přibližně 1,5 km."
    },

    {
      id: "teide-parking-b",
      name: "Parkoviště – varianta B",
      lat: 28.2234011,
      lon: -16.6300442,

      type: "parking",

      tags: [
        "parking",
        "hike"
      ],

      description:
        "Parkování poblíž Paradoru. Výchozí místo pro delší variantu B přes vulkanickou oblast Pico Viejo."
    },

    {
      id: "teide-bivouac-1",
      name: "Bivakovací varianta 1",
      lat: 28.2696003,
      lon: -16.6175272,

      type: "sleep",

      tags: [
        "sleep",
        "hike",
        "permit"
      ],

      description:
        "Jedna z uložených možností pro regulovaný bivak. Nutná předchozí rezervace přes Tenerife ON."
    },

    {
      id: "teide-bivouac-2",
      name: "Bivakovací varianta 2",
      lat: 28.2632353,
      lon: -16.6604078,

      type: "sleep",

      tags: [
        "sleep",
        "hike",
        "permit"
      ],

      description:
        "Další uložená možnost bivaku. Nutná rezervace a kontrola aktuálních pravidel."
    },

    {
      id: "teide-bivouac-3",
      name: "Bivakovací varianta 3",
      lat: 28.2558078,
      lon: -16.6762642,

      type: "sleep",

      tags: [
        "sleep",
        "hike",
        "permit"
      ],

      description:
        "Třetí uložené bivakovací místo. Použití pouze podle aktuálních pravidel a s rezervací přes Tenerife ON."
    }

  ]
},


  
];
