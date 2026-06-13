/* ============================================================
   Tokyo Closet Notes — Japan Fashion Map DATA
   ------------------------------------------------------------
   Two separate concerns, on purpose:

   1) TCN_MAP_DATA.cities  — CITY CONFIG (tabs, center/zoom, areas, intro)
        Reusable shell for every city. Add a city here and a tab appears.
        Non-Tokyo cities are "comingSoon: true" until shops are added.

   2) TCN_MAP_DATA.shops   — SHOP DATA (the pins)
        Each shop has a cityId + areaId. Add/curate freely without
        touching the map UI logic in index.html.

   HOW TO ADD A SHOP
   -----------------
   Add an object to TCN_MAP_DATA.shops with:
     id        unique slug          name      shop / place name
     cityId    "tokyo" | "osaka" | "kyoto" | "nagoya" | "fukuoka"
     areaId    must match an area id under that city's `areas`
     coords    [lat, lng]  (approximate is fine — see note below)
     description / address / styles[] / price
     site      official URL or null   image  photo URL or null (null = monogram)
     preview   true = free preview · false = locked / paid-only

   HOW TO "OPEN" A NEW CITY
   ------------------------
   1. Set that city's `comingSoon: false`.
   2. Give its areas real `center`/`zoom` (and optional tagline/bestFor/station).
   3. Add shops with that cityId. Done — no UI changes needed.

   IMPORTANT — accuracy & trust
   ----------------------------
   • Pin coordinates are CURATED / APPROXIMATE for the editorial preview.
     Each popup's "Open in Google Maps" button searches by name + area, so the
     visitor always lands on Google's authoritative, up-to-date location.
   • Seed Tokyo entries are well-known, internationally documented landmarks.
     Verify details before promoting any entry into the paid map.
   • Don't invent brand names or photos. Leave image: null until you have a
     real, permission-cleared photo (a styled monogram is shown instead).
   ============================================================ */

window.TCN_MAP_DATA = {
  defaultCityId: "tokyo",

  /* Teaser numbers for the locked full map (honest, owner-editable). */
  fullMap: {
    shopCount: "120+",
    districtCount: 8,
    note: "Full map districts include Ginza, Nakameguro, Kichijoji, and more."
  },

  /* ---------------- CITY CONFIG (the reusable shell) ---------------- */
  cities: {
    tokyo: {
      id: "tokyo",
      name: "Tokyo",
      center: [35.6620, 139.6960],
      zoom: 12,
      defaultAreaId: "harajuku",
      comingSoon: false,
      intro: "Where to start in Tokyo — street energy, quiet designer corners, and the city's vintage heartland.",
      areas: [
        {
          id: "harajuku",
          name: "Harajuku / Omotesando",
          tagline: "Tokyo street energy meeting quiet designer corners — start on Cat Street and drift.",
          bestFor: "Street, designer flagships, and used-designer hunting",
          station: "Meiji-jingumae or Omotesando Station",
          center: [35.6688, 139.7068],
          zoom: 15
        },
        {
          id: "shibuya",
          name: "Shibuya / Daikanyama / Ebisu",
          tagline: "From Shibuya's noise into the calm, book-and-coffee streets of Daikanyama.",
          bestFor: "Select shops, soft neutral, and a slower afternoon",
          station: "Shibuya Station (walk south to Daikanyama)",
          center: [35.6545, 139.7000],
          zoom: 14
        },
        {
          id: "shimokita",
          name: "Shimokitazawa / Koenji",
          tagline: "Tokyo's vintage heartland — narrow lanes, thrift racks, and student energy.",
          bestFor: "Vintage, thrift, and one-of-a-kind finds",
          station: "Shimokitazawa Station / Koenji Station",
          center: [35.6835, 139.6585],
          zoom: 12
        }
      ]
    },

    osaka: {
      id: "osaka",
      name: "Osaka",
      center: [34.6723, 135.5007],
      zoom: 13,
      defaultAreaId: "all",
      comingSoon: true,
      intro: "Osaka's mix of big-street energy and small select shops — map coming next.",
      areas: [
        { id: "osaka-shinsaibashi", name: "Shinsaibashi / Horie" },
        { id: "osaka-umeda", name: "Umeda / Nakazakicho" },
        { id: "osaka-amemura", name: "Amerikamura" }
      ]
    },

    kyoto: {
      id: "kyoto",
      name: "Kyoto",
      center: [35.0036, 135.7681],
      zoom: 13,
      defaultAreaId: "all",
      comingSoon: true,
      intro: "Quiet, craft-led Kyoto — slower shopping between the old streets. Map coming next.",
      areas: [
        { id: "kyoto-kawaramachi", name: "Kawaramachi / Sanjo" },
        { id: "kyoto-station", name: "Kyoto Station" },
        { id: "kyoto-kitayama", name: "Kitayama / Demachiyanagi" }
      ]
    },

    nagoya: {
      id: "nagoya",
      name: "Nagoya",
      center: [35.1709, 136.8815],
      zoom: 13,
      defaultAreaId: "all",
      comingSoon: true,
      intro: "Nagoya from Sakae to the Osu arcades — map coming next.",
      areas: [
        { id: "nagoya-sakae", name: "Sakae" },
        { id: "nagoya-osu", name: "Osu" },
        { id: "nagoya-station", name: "Nagoya Station" }
      ]
    },

    fukuoka: {
      id: "fukuoka",
      name: "Fukuoka",
      center: [33.5897, 130.4017],
      zoom: 13,
      defaultAreaId: "all",
      comingSoon: true,
      intro: "Fukuoka's compact, walkable fashion streets around Tenjin and Daimyo — map coming next.",
      areas: [
        { id: "fukuoka-tenjin", name: "Tenjin" },
        { id: "fukuoka-daimyo", name: "Daimyo" },
        { id: "fukuoka-hakata", name: "Hakata" }
      ]
    }
  },

  /* ---------------- SHOP DATA (pins) — Tokyo only for now ---------------- */
  shops: [
    /* ---------- Harajuku / Omotesando ---------- */
    {
      id: "laforet-harajuku", cityId: "tokyo", areaId: "harajuku",
      name: "Laforet Harajuku",
      coords: [35.6703, 139.7060],
      description: "Landmark Harajuku fashion building — many small Japanese labels and street brands under one roof.",
      address: "1-11-6 Jingumae, Shibuya City, Tokyo",
      styles: ["Street", "Designer", "Select Shop"],
      price: "¥¥–¥¥¥",
      site: "https://www.laforet.ne.jp",
      image: null,
      preview: true
    },
    {
      id: "omotesando-hills", cityId: "tokyo", areaId: "harajuku",
      name: "Omotesando Hills",
      coords: [35.6659, 139.7117],
      description: "Tadao Ando–designed mall along the Omotesando avenue — designer and elevated lifestyle.",
      address: "4-12-10 Jingumae, Shibuya City, Tokyo",
      styles: ["Designer", "Select Shop"],
      price: "¥¥¥–¥¥¥¥",
      site: "https://www.omotesandohills.com",
      image: null,
      preview: true
    },
    {
      id: "ragtag-harajuku", cityId: "tokyo", areaId: "harajuku",
      name: "RAGTAG Harajuku",
      coords: [35.6686, 139.7052],
      description: "Well-known Japanese used-designer chain — curated second-hand designer and archive pieces.",
      address: "6-14-2 Jingumae, Shibuya City, Tokyo",
      styles: ["Designer", "Vintage", "Select Shop"],
      price: "¥¥–¥¥¥",
      site: "https://www.ragtag.jp",
      image: null,
      preview: true
    },

    /* ---------- Shibuya / Daikanyama / Ebisu ---------- */
    {
      id: "shibuya-parco", cityId: "tokyo", areaId: "shibuya",
      name: "Shibuya PARCO",
      coords: [35.6619, 139.6985],
      description: "Rebuilt fashion-culture building — designer floors, Japanese streetwear, and art.",
      address: "15-1 Udagawacho, Shibuya City, Tokyo",
      styles: ["Designer", "Street", "Select Shop"],
      price: "¥¥–¥¥¥¥",
      site: "https://shibuya.parco.jp",
      image: null,
      preview: true
    },
    {
      id: "daikanyama-tsite", cityId: "tokyo", areaId: "shibuya",
      name: "Daikanyama T-Site",
      coords: [35.6489, 139.6986],
      description: "Architecturally famous bookstore complex — calm, neutral lifestyle and reading-room mood.",
      address: "17-5 Sarugakucho, Shibuya City, Tokyo",
      styles: ["Soft Neutral", "Select Shop"],
      price: "¥¥–¥¥¥",
      site: "https://store.tsite.jp/daikanyama/",
      image: null,
      preview: true
    },
    {
      id: "log-road-daikanyama", cityId: "tokyo", areaId: "shibuya",
      name: "Log Road Daikanyama",
      coords: [35.6497, 139.7007],
      description: "Low, plant-lined boutique row on a former railway track — soft, slow, neutral.",
      address: "13-1 Daikanyamacho, Shibuya City, Tokyo",
      styles: ["Soft Neutral", "Made in Japan"],
      price: "¥¥–¥¥¥",
      site: null,
      image: null,
      preview: true
    },

    /* ---------- Shimokitazawa / Koenji ---------- */
    {
      id: "new-york-joe-exchange", cityId: "tokyo", areaId: "shimokita",
      name: "New York Joe Exchange",
      coords: [35.6612, 139.6675],
      description: "Shimokitazawa vintage institution in a former bathhouse — trade-in racks and Sunday sales.",
      address: "Kitazawa, Setagaya City, Tokyo (Shimokitazawa)",
      styles: ["Vintage", "Street"],
      price: "¥–¥¥",
      site: null,
      image: null,
      preview: true
    },
    {
      id: "big-time-shimokita", cityId: "tokyo", areaId: "shimokita",
      name: "BIG TIME Shimokitazawa",
      coords: [35.6606, 139.6682],
      description: "Long-running vintage shop — American and European used clothing, denim, and outerwear.",
      address: "Kitazawa, Setagaya City, Tokyo (Shimokitazawa)",
      styles: ["Vintage", "Designer"],
      price: "¥¥–¥¥¥",
      site: null,
      image: null,
      preview: true
    },
    {
      id: "chicago-koenji", cityId: "tokyo", areaId: "shimokita",
      name: "Chicago Koenji",
      coords: [35.7052, 139.6498],
      description: "Famous used-clothing chain — big floors of vintage plus a known kimono corner.",
      address: "Koenji-kita, Suginami City, Tokyo (Koenji)",
      styles: ["Vintage"],
      price: "¥–¥¥",
      site: "https://www.chicago.co.jp",
      image: null,
      preview: true
    },
    {
      id: "flamingo-koenji", cityId: "tokyo", areaId: "shimokita",
      name: "Flamingo Koenji",
      coords: [35.7048, 139.6503],
      description: "Curated vintage with a strong eye — color, pattern, and statement pieces.",
      address: "Koenji-kita, Suginami City, Tokyo (Koenji)",
      styles: ["Vintage", "Street"],
      price: "¥¥",
      site: null,
      image: null,
      preview: true
    }
  ]
};
