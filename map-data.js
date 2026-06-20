/* ============================================================
   Tokyo Closet Notes — Japan Fashion Map DATA (free preview)
   ------------------------------------------------------------
   Separated on purpose:
   1) TCN_MAP_DATA.cities  — CITY CONFIG (tabs, center/zoom, areas, intro)
   2) TCN_MAP_DATA.shops   — SHOP DATA (the pins)

   Each shop: id, cityId, areaId, name, coords, description, whyGo,
              address, styles[], price, site, image, preview.

   ACCURACY / TRUST
   ----------------
   • Free preview. These are REAL shops (no invented stores/brands).
     Osaka / Kyoto / Nagoya / Fukuoka entries were researched & sourced
     (official sites + Fukuoka Now / BRUTUS / Time Out / HereNow etc).
   • Coordinates are APPROXIMATE, area-level points; addresses are
     district/area level — VERIFY exact storefront address + that the
     shop still operates before promoting to the paid map. Entries marked
     "verify" below are real but not fully pinned (exact address/site).
   • Each popup "Open in Google Maps" searches by name + address + city,
     so visitors always reach the authoritative location.
   • image: null everywhere → styled monogram (no un-cleared photos).

   STYLE TAGS used for filtering (must match the filter buttons):
     "Made in Japan","Select Shop","Vintage","Designer","Street","Soft Neutral"
   ============================================================ */

window.TCN_MAP_DATA = {
  defaultCityId: "tokyo",

  /* Teaser numbers for the locked full (paid) map. */
  fullMap: {
    shopCount: "150+",
    districtCount: 12,
    note: "The full map adds deeper routes, hidden shops, brand notes, and shopping strategy across Tokyo, Osaka, Kyoto, Nagoya, Fukuoka and beyond."
  },

  /* ---------------- CITY CONFIG ---------------- */
  cities: {
    tokyo: {
      id: "tokyo", name: "Tokyo", center: [35.6620, 139.6960], zoom: 12,
      defaultAreaId: "harajuku", comingSoon: false,
      intro: "Where to start in Tokyo — select shops, designer resale, made-in-Japan craft, and the vintage heartland.",
      areas: [
        {
          id: "harajuku", name: "Harajuku / Omotesando",
          tagline: "Tokyo street energy meeting quiet designer corners — start on Cat Street and drift.",
          bestFor: "Select shops, street, and designer resale",
          station: "Meiji-jingumae or Omotesando Station",
          center: [35.6695, 139.7055], zoom: 15
        },
        {
          id: "shibuya", name: "Shibuya / Daikanyama / Ebisu",
          tagline: "From Shibuya's noise into the calm, made-in-Japan side streets of Daikanyama and Ebisu.",
          bestFor: "Made in Japan, denim, and quiet select shops",
          station: "Shibuya / Daikanyama / Ebisu Station",
          center: [35.6480, 139.7010], zoom: 14
        },
        {
          id: "shimokita", name: "Shimokitazawa / Koenji",
          tagline: "Tokyo's vintage heartland — narrow lanes, thrift racks, and student energy.",
          bestFor: "Vintage, thrift, and one-of-a-kind finds",
          station: "Shimokitazawa Station / Koenji Station",
          center: [35.6835, 139.6585], zoom: 12
        }
      ]
    },

    osaka: {
      id: "osaka", name: "Osaka", center: [34.6760, 135.4980], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Osaka's mix of big-street energy, denim heritage, and serious small select shops.",
      areas: [
        {
          id: "osaka-shinsaibashi", name: "Shinsaibashi / Horie",
          tagline: "Osaka's shopping spine into the calmer, design-led Horie side streets.",
          bestFor: "Denim heritage, used designer, and select shops", station: "Shinsaibashi or Yotsubashi Station",
          center: [34.6722, 135.4965], zoom: 15
        },
        {
          id: "osaka-umeda", name: "Umeda / Nakazakicho",
          tagline: "Big-city Umeda beside the indie shops of Chayamachi and Nakazakicho.",
          bestFor: "Select shops, Japanese designers, and denim", station: "Umeda / Nakazakicho Station",
          center: [34.7060, 135.5010], zoom: 15
        },
        {
          id: "osaka-amemura", name: "Amerikamura",
          tagline: "Osaka's street and vintage core — young, loud, secondhand.",
          bestFor: "Vintage and street", station: "Shinsaibashi Station",
          center: [34.6710, 135.4985], zoom: 16
        }
      ]
    },

    kyoto: {
      id: "kyoto", name: "Kyoto", center: [35.0080, 135.7680], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Quiet, craft-led Kyoto — designer rooms, Yuzen and indigo makers, and student-district vintage.",
      areas: [
        {
          id: "kyoto-kawaramachi", name: "Kawaramachi / Sanjo",
          tagline: "Kyoto's central shopping streets, walkable and dense.",
          bestFor: "Designer, used designer, and Kyoto craft", station: "Sanjo or Kyoto-Shiyakusho-mae Station",
          center: [35.0060, 135.7680], zoom: 15
        },
        {
          id: "kyoto-station", name: "Kyoto Station",
          tagline: "The big station gateway — a convenient first or last stop.",
          bestFor: "Made-in-Japan craft and brand access", station: "Kyoto Station",
          center: [34.9866, 135.7585], zoom: 15
        },
        {
          id: "kyoto-kitayama", name: "Nishijin / Ichijoji",
          tagline: "North Kyoto craft and student vintage — indigo, Nishijin weaving, and used clothing.",
          bestFor: "Made in Japan craft, textile, and vintage", station: "Imadegawa or Ichijoji Station",
          center: [35.0350, 135.7600], zoom: 13
        }
      ]
    },

    nagoya: {
      id: "nagoya", name: "Nagoya", center: [35.1660, 136.8990], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Nagoya from the Sakae fashion blocks to the Osu vintage arcades.",
      areas: [
        {
          id: "nagoya-sakae", name: "Sakae",
          tagline: "Nagoya's main fashion district.",
          bestFor: "Designer and used designer", station: "Sakae Station",
          center: [35.1670, 136.9075], zoom: 15
        },
        {
          id: "nagoya-osu", name: "Osu",
          tagline: "Covered arcades full of vintage and street finds.",
          bestFor: "Vintage, Americana, and used designer", station: "Osu Kannon Station",
          center: [35.1598, 136.9020], zoom: 16
        },
        {
          id: "nagoya-station", name: "Nagoya Station",
          tagline: "The station-side hub — craft and used designer anchors.",
          bestFor: "Made in Japan craft and used designer", station: "Nagoya Station",
          center: [35.1740, 136.8830], zoom: 14
        }
      ]
    },

    fukuoka: {
      id: "fukuoka", name: "Fukuoka", center: [33.5900, 130.4010], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Fukuoka's compact, walkable fashion streets around Tenjin and the design-led Daimyo backstreets.",
      areas: [
        {
          id: "fukuoka-tenjin", name: "Tenjin",
          tagline: "Fukuoka's downtown shopping center.",
          bestFor: "Vintage, used designer, and denim", station: "Tenjin Station",
          center: [33.5905, 130.3985], zoom: 16
        },
        {
          id: "fukuoka-daimyo", name: "Daimyo",
          tagline: "Tenjin's backstreets — independent, design-led shops.",
          bestFor: "Japanese select shops and vintage", station: "Tenjin or Akasaka Station",
          center: [33.5882, 130.3950], zoom: 16
        },
        {
          id: "fukuoka-hakata", name: "Hakata",
          tagline: "The Hakata station side — a travel-friendly first direction.",
          bestFor: "Made in Japan craft", station: "Hakata Station",
          center: [33.5896, 130.4180], zoom: 15
        }
      ]
    }
  },

  /* ---------------- SHOP DATA (free preview pins) ----------------
     Coords approximate (area-level). Addresses district-level.
     "verify" comments mark real shops whose exact address/site is
     not fully pinned — confirm before paid release.                */
  shops: [
    /* ===================== TOKYO (12) ===================== */
    /* -- Harajuku / Omotesando -- */
    {
      id: "ragtag-harajuku", cityId: "tokyo", areaId: "harajuku",
      name: "RAGTAG Harajuku",
      coords: [35.6686, 139.7052],
      description: "Curated used-designer chain — Japanese and international labels, archive and current season.",
      whyGo: "A clear entry point for designer resale in Harajuku, with many labels in one place.",
      address: "Jingumae, Shibuya City, Tokyo (Harajuku)",
      styles: ["Vintage", "Designer", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.ragtag.jp/", image: null, preview: true
    },
    {
      id: "graphpaper-tokyo", cityId: "tokyo", areaId: "harajuku",
      name: "Graphpaper Tokyo",
      coords: [35.6810, 139.7090], // approx — Sendagaya; verify
      description: "Pared-back, architectural Japanese minimalism — high-end designer and made-in-Japan staples in a calm space.",
      whyGo: "Quiet, modern Japanese minimalism; a reference for clean designer styling near Harajuku.",
      address: "Sendagaya, Shibuya City, Tokyo (near Harajuku / Omotesando)",
      styles: ["Designer", "Soft Neutral", "Select Shop"], price: "¥¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "kura-chika-porter", cityId: "tokyo", areaId: "harajuku",
      name: "Kura Chika by PORTER",
      coords: [35.6692, 139.7082], // approx — Jingumae; verify
      description: "Yoshida & Co.'s PORTER — iconic Japanese-made bags and accessories, a true craft stop.",
      whyGo: "PORTER / Yoshida & Co. — made-in-Japan bags that are hard to buy abroad.",
      address: "Jingumae, Shibuya City, Tokyo (Harajuku)",
      styles: ["Made in Japan", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.yoshidakaban.com/", image: null, preview: true
    },
    {
      id: "gr8-harajuku", cityId: "tokyo", areaId: "harajuku",
      name: "GR8",
      coords: [35.6701, 139.7058], // approx — Jingumae, Harajuku; verify
      description: "Influential Harajuku select shop mixing Japanese and international street and designer labels.",
      whyGo: "A fashion-forward edit of street and designer brands you'll see on Tokyo's most-watched dressers.",
      address: "Jingumae, Shibuya City, Tokyo (Harajuku)",
      styles: ["Select Shop", "Street", "Designer"], price: "¥¥¥",
      site: null, image: null, preview: true // verify official site
    },

    /* -- Shibuya / Daikanyama / Ebisu -- */
    {
      id: "nepenthes-tokyo", cityId: "tokyo", areaId: "shibuya",
      name: "Nepenthes Tokyo",
      coords: [35.6556, 139.6948], // approx — Nanpeidai, near Shibuya/Shinsen; verify
      description: "Home of Needles and Engineered Garments — Japanese-made advanced casual and menswear.",
      whyGo: "Japanese-made advanced menswear (Needles, Engineered Garments) you'll recognise later.",
      address: "Nanpeidaicho, Shibuya City, Tokyo",
      styles: ["Designer", "Street", "Made in Japan"], price: "¥¥¥",
      site: "https://www.nepenthes.co.jp/", image: null, preview: true
    },
    {
      id: "blue-blue-japan-okura", cityId: "tokyo", areaId: "shibuya",
      name: "BLUE BLUE JAPAN / OKURA (Daikanyama)",
      coords: [35.6487, 139.6992],
      description: "A strong Japan-made mood — indigo dye, relaxed casualwear, and craft details.",
      whyGo: "Go for indigo, relaxed Japan-made casualwear, and craft details.",
      address: "Daikanyama, Shibuya City, Tokyo",
      styles: ["Made in Japan", "Soft Neutral", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.hrm-eshop.com/", image: null, preview: true
    },
    {
      id: "kapital-tokyo", cityId: "tokyo", areaId: "shibuya",
      name: "KAPITAL (Ebisu / Meguro)",
      coords: [35.6452, 139.7090],
      description: "Famous yet deeply Japan-coded — denim, craft, unusual proportions, statement pieces.",
      whyGo: "Japan-coded denim and craft with proportions you won't find on the high street.",
      address: "Ebisu / Meguro area, Tokyo",
      styles: ["Made in Japan", "Designer", "Street"], price: "¥¥¥",
      site: "https://www.kapital.jp/", image: null, preview: true
    },
    {
      id: "1ldk-tokyo", cityId: "tokyo", areaId: "shibuya",
      name: "1LDK (Nakameguro / Ebisu)",
      coords: [35.6470, 139.7035],
      description: "Quiet Japanese everyday style — clean silhouettes and understated brands.",
      whyGo: "For quiet everyday style, clean silhouettes, and understated labels.",
      address: "Nakameguro / Ebisu area, Tokyo",
      styles: ["Select Shop", "Soft Neutral", "Designer"], price: "¥¥–¥¥¥",
      site: "https://1ldkshop.com/", image: null, preview: true
    },

    /* -- Shimokitazawa / Koenji -- */
    {
      id: "new-york-joe-exchange", cityId: "tokyo", areaId: "shimokita",
      name: "New York Joe Exchange",
      coords: [35.6612, 139.6675],
      description: "Shimokitazawa vintage institution in a former bathhouse — trade-in racks and Sunday sales.",
      whyGo: "A well-known Shimokitazawa stop for affordable secondhand discovery.",
      address: "Kitazawa, Setagaya City, Tokyo (Shimokitazawa)",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: "https://newyorkjoeexchange.com/", image: null, preview: true
    },
    {
      id: "big-time-shimokita", cityId: "tokyo", areaId: "shimokita",
      name: "BIG TIME Shimokitazawa",
      coords: [35.6606, 139.6682], // approx — Kitazawa; verify
      description: "Long-running vintage shop — American and European used clothing, denim, and outerwear.",
      whyGo: "A deeper Shimokitazawa vintage stop for denim and Euro/US used staples.",
      address: "Kitazawa, Setagaya City, Tokyo (Shimokitazawa)",
      styles: ["Vintage", "Designer"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "chicago-koenji", cityId: "tokyo", areaId: "shimokita",
      name: "Chicago Koenji",
      coords: [35.7052, 139.6498],
      description: "Famous used-clothing chain with a strong Koenji feel and a known kimono corner.",
      whyGo: "A famous used chain with a broad price range and real Koenji vintage feel.",
      address: "Koenji, Suginami City, Tokyo",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: "https://www.chicago.co.jp/", image: null, preview: true
    },
    {
      id: "flamingo-koenji", cityId: "tokyo", areaId: "shimokita",
      name: "Flamingo Koenji",
      coords: [35.7048, 139.6503], // approx — Koenji; verify
      description: "Curated vintage with a strong eye — color, pattern, and statement pieces.",
      whyGo: "A tighter vintage edit for color and statement pieces in Koenji.",
      address: "Koenji, Suginami City, Tokyo",
      styles: ["Vintage", "Street"], price: "¥¥",
      site: null, image: null, preview: true // verify official site
    },

    /* ===================== OSAKA (12) ===================== */
    /* -- Shinsaibashi / Horie -- */
    {
      id: "studio-dartisan-osaka", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "Studio D'Artisan Osaka",
      coords: [34.6720, 135.4945],
      description: "Flagship of one of the original 'Osaka Five' selvedge denim houses, founded 1979 and woven in Okayama.",
      whyGo: "A pilgrimage stop for denim heads who want loomstate Made-in-Japan jeans from the brand's hometown.",
      address: "Minami-Horie, Nishi-ku, Osaka (Orange Street area)",
      styles: ["Made in Japan", "Designer"], price: "¥¥–¥¥¥",
      site: "https://www.dartisan.co.jp/", image: null, preview: true
    },
    {
      id: "lara-vintage-osaka", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "LARA VINTAGE",
      coords: [34.6716, 135.4960], // approx — Minami-Horie; verify
      description: "European-focused vintage select shop stocking antique and vintage wear from the 1800s to the 1990s.",
      whyGo: "Deeply curated old-world European pieces you won't find in the American-heavy thrift scene nearby.",
      address: "Minami-Horie, Nishi-ku, Osaka",
      styles: ["Vintage", "Select Shop"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },
    {
      id: "hare-minami-horie", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "HARE Minami-Horie",
      coords: [34.6717, 135.4955], // approx — Orange Street; verify
      description: "Osaka outpost of the domestic HARE label offering contemporary, easy-to-wear Japanese everyday clothing.",
      whyGo: "An accessible entry point to current Japanese contemporary styling on Orange Street.",
      address: "Minami-Horie, Nishi-ku, Osaka (Orange Street)",
      styles: ["Select Shop", "Soft Neutral", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },
    {
      id: "kindal-shinsaibashi", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "kindal Shinsaibashi",
      coords: [34.6725, 135.4988],
      description: "Multi-floor secondhand store where each level runs from streetwear up to high-end used designer.",
      whyGo: "One of the best places in Osaka to hunt pre-owned designer and archive pieces under one roof.",
      address: "Nishi-Shinsaibashi, Chuo-ku, Osaka",
      styles: ["Vintage", "Designer", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://kindal.co.jp/", image: null, preview: true
    },

    /* -- Umeda / Nakazakicho -- */
    {
      id: "sign-osaka", cityId: "osaka", areaId: "osaka-umeda",
      name: "sign",
      coords: [34.7065, 135.4995],
      description: "Contemporary select shop carrying domestic designers like ssstein, blurhms, KHOKI and irenisa.",
      whyGo: "A focused window into Japan's current avant-contemporary designers, walkable from Umeda.",
      address: "Toyosaki, Kita-ku, Osaka (Nakazakicho / Umeda)",
      styles: ["Select Shop", "Designer", "Made in Japan"], price: "¥¥¥",
      site: "https://sign-onlineshop.com/", image: null, preview: true
    },
    {
      id: "loftman-coop-umeda", cityId: "osaka", areaId: "osaka-umeda",
      name: "LOFTMAN COOP UMEDA",
      coords: [34.7075, 135.4990],
      description: "Long-running select shop with a strong Made-in-Japan and outdoor-leaning lineup in Chayamachi.",
      whyGo: "A one-stop overview of well-made Japanese and craft-minded brands near Umeda Station.",
      address: "Chayamachi, Kita-ku, Osaka",
      styles: ["Select Shop", "Made in Japan", "Soft Neutral"], price: "¥¥–¥¥¥",
      site: "https://loftman.co.jp/", image: null, preview: true
    },
    {
      id: "japan-blue-jeans-osaka", cityId: "osaka", areaId: "osaka-umeda",
      name: "Japan Blue Jeans Osaka",
      coords: [34.7078, 135.4995], // approx — Chayamachi; verify
      description: "Osaka store of the Japan Blue Group offering Kojima selvedge denim in contemporary cuts.",
      whyGo: "Accessible Okayama selvedge denim from the mill behind Momotaro, with hand-finished details.",
      address: "Chayamachi, Kita-ku, Osaka (near Hankyu Osaka-Umeda)",
      styles: ["Made in Japan", "Designer"], price: "¥¥–¥¥¥",
      site: "https://japanbluejeans.com/", image: null, preview: true
    },
    {
      id: "salvage-nakazakicho", cityId: "osaka", areaId: "osaka-umeda",
      name: "Salvage",
      coords: [34.7055, 135.5050], // approx — Nakazakicho; verify
      description: "Warehouse-scale secondhand store stocked with 90s–00s vintage clothing and accessories.",
      whyGo: "High-volume, reasonably-priced digging in Osaka's hipster Nakazakicho district.",
      address: "Nakazakicho, Kita-ku, Osaka",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },

    /* -- Amerikamura -- */
    {
      id: "kinji-bigstep", cityId: "osaka", areaId: "osaka-amemura",
      name: "KINJI (Big Step)",
      coords: [34.6713, 135.4983],
      description: "Large curated secondhand floor inside Big Step mixing retro casual and brand-name used clothing.",
      whyGo: "A reliable, well-organized vintage destination at the center of Amerikamura's street scene.",
      address: "Nishi-Shinsaibashi, Big Step, Chuo-ku, Osaka",
      styles: ["Vintage", "Select Shop", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "jam-amemura", cityId: "osaka", areaId: "osaka-amemura",
      name: "JAM Amerikamura",
      coords: [34.6708, 135.4990],
      description: "Vast floor of roughly 8,000 items heavy on 80s–90s military, work, sports and outdoor vintage.",
      whyGo: "Deep, affordable American vintage for fans of workwear and sportswear digging.",
      address: "Nishi-Shinsaibashi, Chuo-ku, Osaka (Amerikamura)",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: "https://jamtrading.jp/", image: null, preview: true
    },
    {
      id: "pigsty-amemura", cityId: "osaka", areaId: "osaka-amemura",
      name: "Pigsty Amemura",
      coords: [34.6707, 135.4986],
      description: "Vintage specialist running from 1930s–80s pieces through to antique goods, jewelry and sneakers.",
      whyGo: "Strong for older-era American vintage and accessories rather than just 90s revival stock.",
      address: "Nishi-Shinsaibashi, Chuo-ku, Osaka (Amerikamura)",
      styles: ["Vintage"], price: "¥¥",
      site: "https://pigsty-tab.com/", image: null, preview: true
    },
    {
      id: "rushout-amemura", cityId: "osaka", areaId: "osaka-amemura",
      name: "RUSHOUT",
      coords: [34.6710, 135.4992], // approx — Amerikamura; verify
      description: "Curated vintage shop that mixes Western used clothing with selected Japanese-branded pieces.",
      whyGo: "A tighter, more editorial edit than the big warehouse thrift stores in the same district.",
      address: "Nishi-Shinsaibashi, Chuo-ku, Osaka (Amerikamura)",
      styles: ["Vintage", "Select Shop", "Street"], price: "¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },

    /* ===================== KYOTO (10) ===================== */
    /* -- Kawaramachi / Sanjo -- */
    {
      id: "fascinate-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "FASCINATE _ KYOTO",
      coords: [35.0036, 135.7686],
      description: "A courtyard select shop carrying 40-plus avant-garde labels including Yohji Yamamoto and Julius.",
      whyGo: "It concentrates Japan's dark, architectural designer scene in one calm Kyoto room (tax-free for visitors).",
      address: "Dainichicho, Nakagyo-ku, Kyoto (by Hankyu Kyoto-Kawaramachi)",
      styles: ["Select Shop", "Designer", "Soft Neutral"], price: "¥¥¥–¥¥¥¥",
      site: "https://fascinate-online.com/en/contents/store_kyoto/", image: null, preview: true
    },
    {
      id: "sou-sou-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "SOU・SOU",
      coords: [35.0042, 135.7674],
      description: "A Kyoto-born textile label running small shops for tabi shoes, modern kimono, jika-tabi and original prints.",
      whyGo: "One of the clearest examples of contemporary Japanese design reworking traditional Kyoto textiles.",
      address: "Nakano-cho, Nakagyo-ku, Kyoto (off Shijo, near Shinkyogoku)",
      styles: ["Made in Japan", "Designer"], price: "¥¥–¥¥¥",
      site: "https://www.sousou.co.jp/", image: null, preview: true
    },
    {
      id: "45r-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "45R Kyoto",
      coords: [35.0089, 135.7621],
      description: "The brand's oldest street-level shop, in a wood-and-stone interior, selling natural indigo and hand-finished denim.",
      whyGo: "Artisanal Japanese indigo and slow-made denim in a space built as 45R's vision of Kyoto.",
      address: "Sanjo-dori, Nakagyo-ku, Kyoto (near Karasuma-Oike)",
      styles: ["Made in Japan", "Soft Neutral"], price: "¥¥¥",
      site: "https://45rglobal.com/", image: null, preview: true
    },
    {
      id: "kapital-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "KAPITAL Kyoto",
      coords: [35.0066, 135.7656],
      description: "The cult Okayama denim house's Kyoto store — boro patchwork, sashiko stitching and worked indigo.",
      whyGo: "A holy-grail name for international Japanese-fashion fans; the Kyoto branch is a destination itself.",
      address: "Gokomachi-dori, Nakagyo-ku, Kyoto",
      styles: ["Made in Japan", "Street", "Designer"], price: "¥¥¥",
      site: "https://www.kapital.jp/", image: null, preview: true
    },
    {
      id: "kindal-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "Kindal Kyoto",
      coords: [35.0048, 135.7669],
      description: "A multi-floor used-luxury and designer reseller with curated pre-owned bags and a strong menswear floor.",
      whyGo: "One of Kyoto's best-edited secondhand designer shops for Japanese and European labels at fair prices.",
      address: "Teramachi area, Nakagyo-ku, Kyoto",
      styles: ["Vintage", "Designer", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://kindal.co.jp/", image: null, preview: true
    },

    /* -- Kyoto Station -- */
    {
      id: "pagong-kyoto", cityId: "kyoto", areaId: "kyoto-station",
      name: "Pagong",
      coords: [34.9876, 135.7585], // approx — Shimogyo-ku; verify
      description: "A Kyoto Yuzen dye house since 1919 making silk and cotton aloha-style shirts printed with kimono stencils.",
      whyGo: "Living Kyoto Yuzen craft turned into wearable, collectible shirts you cannot get elsewhere.",
      address: "Shimogyo-ku, Kyoto (south-central, near Kyoto Station)",
      styles: ["Made in Japan", "Designer"], price: "¥¥–¥¥¥",
      site: "https://www.pagongkyoto.com/", image: null, preview: true // verify exact branch address
    },
    {
      id: "isetan-kyoto-jp-brands", cityId: "kyoto", areaId: "kyoto-station",
      name: "JR Kyoto Isetan — Japanese maker counters",
      coords: [34.9858, 135.7588],
      description: "Inside the station department store: in-house counters for Japanese makers such as 45R, plus domestic fashion.",
      whyGo: "For travellers short on time, the most convenient single spot to reach several Made-in-Japan labels by the station.",
      address: "Shimogyo-ku, Kyoto (inside JR Kyoto Station building)",
      styles: ["Made in Japan", "Select Shop", "Soft Neutral"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // department-store counter access point
    },

    /* -- Nishijin / Ichijoji (north Kyoto craft & vintage) -- */
    {
      id: "aizenkobo-kyoto", cityId: "kyoto", areaId: "kyoto-kitayama",
      name: "Aizenkobo Indigo Workshop",
      coords: [35.0290, 135.7430],
      description: "A third-generation natural-indigo (aizome) workshop in an 18th-century Nishijin machiya selling hand-dyed textiles.",
      whyGo: "Genuine Kyoto indigo craft from a family that has dyed by hand for generations, far from tourist shopping.",
      address: "Kamigyo-ku, Kyoto (Nishijin, near Imadegawa)",
      styles: ["Made in Japan"], price: "¥¥–¥¥¥",
      site: "http://www.aizenkobo.jp/", image: null, preview: true
    },
    {
      id: "nishijin-textile-center", cityId: "kyoto", areaId: "kyoto-kitayama",
      name: "Nishijin Textile Center",
      coords: [35.0265, 135.7530],
      description: "The Nishijin weaving industry's own building — a shop floor of obi, silk goods and woven accessories.",
      whyGo: "The institutional home of Nishijin-ori silk weaving, the tradition behind much of Japan's high-end fabric.",
      address: "Kamigyo-ku, Kyoto (Horikawa-dori, near Imadegawa)",
      styles: ["Made in Japan"], price: "¥–¥¥",
      site: "https://nishijin.or.jp/eng/", image: null, preview: true
    },
    {
      id: "furugi-de-ikoka-ichijoji", cityId: "kyoto", areaId: "kyoto-kitayama",
      name: "Furugi de Ikoka (Ichijoji)",
      coords: [35.0470, 135.7905], // approx — Ichijoji; verify
      description: "An unstaffed Ichijoji used-clothing shop stocking around 5,000 imported tees, hoodies and jeans that rotate weekly.",
      whyGo: "Captures Kyoto's student-district vintage culture in a quirky self-service format.",
      address: "Sakyo-ku, Kyoto (Ichijoji, near Eizan Ichijoji Station)",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },

    /* ===================== NAGOYA (10) ===================== */
    /* -- Sakae -- */
    {
      id: "madstore-undercover-sakae", cityId: "nagoya", areaId: "nagoya-sakae",
      name: "MADSTORE UNDERCOVER (Nagoya PARCO)",
      coords: [35.1659, 136.9082],
      description: "UNDERCOVER's diffusion store carrying core, JohnUNDERCOVER and SueUNDERCOVER lines plus accessories.",
      whyGo: "A dedicated outpost of Jun Takahashi's UNDERCOVER, one of Japan's most internationally collected designers.",
      address: "Nagoya PARCO, Sakae, Naka-ku, Nagoya",
      styles: ["Designer", "Street"], price: "¥¥¥–¥¥¥¥",
      site: "https://undercoverism.com/", image: null, preview: true
    },
    {
      id: "ragtag-nagoya-sakae", cityId: "nagoya", areaId: "nagoya-sakae",
      name: "RAGTAG Nagoya Sakae",
      coords: [35.1672, 136.9070],
      description: "Authenticated secondhand designer specialist stocking Japanese labels like Yohji Yamamoto and Comme des Garçons.",
      whyGo: "A reliable place to find pre-owned Japanese avant-garde designers in good condition without Tokyo prices.",
      address: "Sakae, Naka-ku, Nagoya",
      styles: ["Designer", "Vintage", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.ragtag.jp/", image: null, preview: true
    },
    {
      id: "kindal-nagoya-sakae", cityId: "nagoya", areaId: "nagoya-sakae",
      name: "Kindal Nagoya Sakae",
      coords: [35.1668, 136.9075], // approx — Sakae; verify exact address
      description: "Used select shop dealing in pre-owned designer and brand clothing across men's and women's.",
      whyGo: "A buyer-curated secondhand floor where Japanese and import designer pieces turn over quickly.",
      address: "Sakae, Naka-ku, Nagoya",
      styles: ["Designer", "Vintage", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://kindal.co.jp/", image: null, preview: true // verify exact address
    },
    {
      id: "midwest-nagoya", cityId: "nagoya", areaId: "nagoya-sakae",
      name: "MIDWEST Nagoya",
      coords: [35.1685, 136.9075], // approx — Sakae; verify
      description: "Nagoya reference for sharper designer and select-shop styling beyond basic retail.",
      whyGo: "Sharper designer and select-shop styling — Nagoya beyond basic retail.",
      address: "Sakae, Naka-ku, Nagoya",
      styles: ["Designer", "Select Shop", "Street"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // verify official site/address
    },

    /* -- Osu -- */
    {
      id: "farmers-osu", cityId: "nagoya", areaId: "nagoya-osu",
      name: "FARMER'S (Honten)",
      coords: [35.1597, 136.9018],
      description: "American-casual vintage shop trading in faded denim, college rings and Fire King glass since 1976.",
      whyGo: "One of Osu's founding vintage stores, a living reference for Nagoya's secondhand-Americana culture.",
      address: "Osu, Naka-ku, Nagoya",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: "http://www.ooooosu.com/farmers/", image: null, preview: true
    },
    {
      id: "the-other-osu", cityId: "nagoya", areaId: "nagoya-osu",
      name: "the other",
      coords: [35.1599, 136.9035],
      description: "A 30-year specialist in 1960s–70s British vintage clothing, music and subculture.",
      whyGo: "A genuinely curatorial mod / British-vintage destination hard to find outside Japan.",
      address: "Osu, Naka-ku, Nagoya",
      styles: ["Vintage", "Designer"], price: "¥¥–¥¥¥",
      site: "http://theotherosu.jp/", image: null, preview: true
    },
    {
      id: "archaic-osu", cityId: "nagoya", areaId: "nagoya-osu",
      name: "Archaic",
      coords: [35.1592, 136.9006],
      description: "Calm, gallery-like shop dealing in European and US military, French work garments and vintage Levi's.",
      whyGo: "Among the cleanest-curated military and Euro-work vintage selections in a district full of it.",
      address: "Osu, Naka-ku, Nagoya (Akamon-dori)",
      styles: ["Vintage"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "komehyo-nagoya-osu", cityId: "nagoya", areaId: "nagoya-osu",
      name: "KOMEHYO Nagoya Main Store",
      coords: [35.1606, 136.9027],
      description: "The flagship of Japan's largest reuse retailer — multiple floors of authenticated secondhand designer and luxury.",
      whyGo: "The original Komehyo, a Japanese institution for authenticated pre-owned designer below Tokyo prices.",
      address: "Osu, Naka-ku, Nagoya",
      styles: ["Vintage", "Designer", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.komehyo.co.jp/", image: null, preview: true
    },

    /* -- Nagoya Station -- */
    {
      id: "noritake-no-mori", cityId: "nagoya", areaId: "nagoya-station",
      name: "Noritake Garden Craft Center & Shop",
      coords: [35.1815, 136.8815],
      description: "Retail and craft center on the grounds of Noritake's 1904 porcelain works, a short walk from the station.",
      whyGo: "A Made-in-Japan craft stop where you can buy and watch the making of a defining porcelain house.",
      address: "Noritake-shinmachi, Nishi-ku, Nagoya (near Nagoya Station)",
      styles: ["Made in Japan"], price: "¥¥–¥¥¥",
      site: "https://www.noritake.co.jp/mori/", image: null, preview: true
    },
    {
      id: "komehyo-meieki", cityId: "nagoya", areaId: "nagoya-station",
      name: "KOMEHYO Meieki Store",
      coords: [35.1709, 136.8855], // approx — Meieki; verify exact address
      description: "Station-area branch of the Nagoya-born reuse retailer — authenticated secondhand designer, bags and watches.",
      whyGo: "Convenient access to Japan's most trusted pre-owned-luxury chain, founded in Nagoya, by the station.",
      address: "Meieki, Nakamura-ku, Nagoya (near Nagoya Station)",
      styles: ["Vintage", "Designer", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.komehyo.co.jp/", image: null, preview: true // verify exact address
    },

    /* ===================== FUKUOKA (10) ===================== */
    /* -- Daimyo -- */
    {
      id: "are-you-different-daimyo", cityId: "fukuoka", areaId: "fukuoka-daimyo",
      name: "Are You Different",
      coords: [33.5876, 130.3946],
      description: "A whole-building vintage store curating one-of-a-kind global pieces alongside its own original line.",
      whyGo: "The most editorially celebrated vintage destination in Daimyo, picked by Japanese fashion media.",
      address: "Daimyo, Chuo-ku, Fukuoka",
      styles: ["Vintage", "Select Shop", "Designer"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "okolo-fukuoka", cityId: "fukuoka", areaId: "fukuoka-daimyo",
      name: "OKOLO",
      coords: [33.5901, 130.3886],
      description: "A men's / unisex select shop built around Japanese domestic brands such as SABY and PRODUCT TWELVE.",
      whyGo: "It carries hard-to-find Japanese domestic labels international fans rarely see stocked together outside Tokyo.",
      address: "Otemon, Chuo-ku, Fukuoka (near Daimyo)",
      styles: ["Select Shop", "Designer", "Made in Japan"], price: "¥¥–¥¥¥",
      site: "https://okolo-fukuoka.com/", image: null, preview: true
    },
    {
      id: "birthday-fukuoka", cityId: "fukuoka", areaId: "fukuoka-daimyo",
      name: "BIRTHDAY",
      coords: [33.5882, 130.3955],
      description: "A long-running Daimyo select shop carrying domestic designers like Maison MIHARA YASUHIRO and MINEDENIM.",
      whyGo: "A reliable single stop for current Japanese designer menswear and womenswear with a strong local following.",
      address: "Daimyo, Chuo-ku, Fukuoka",
      styles: ["Select Shop", "Designer", "Street"], price: "¥¥–¥¥¥",
      site: "https://birthday-fukuoka.com/", image: null, preview: true
    },
    {
      id: "nobo-daimyo", cityId: "fukuoka", areaId: "fukuoka-daimyo",
      name: "NOBO",
      coords: [33.5878, 130.3949],
      description: "A European-vintage shop on Daimyo's main street stocking wearable everyday pieces plus shoes and bags.",
      whyGo: "Its select-shop take on recent Euro vintage suits fans after lived-in neutral basics over loud Americana.",
      address: "Daimyo, Chuo-ku, Fukuoka",
      styles: ["Vintage", "Soft Neutral"], price: "¥¥",
      site: null, image: null, preview: true // verify official site
    },

    /* -- Tenjin -- */
    {
      id: "going-bellbo-tenjin", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "Going Bellbo",
      coords: [33.5895, 130.3958],
      description: "A Japanese-retro vintage store specializing in 1960s–1990s domestic pieces, remakes and original apparel.",
      whyGo: "A rare focus on Japanese-made vintage and original remakes rather than the usual imported American stock.",
      address: "Daimyo / Tenjin, Chuo-ku, Fukuoka",
      styles: ["Vintage", "Street"], price: "¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "eureka-fukuoka", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "eureka",
      coords: [33.5889, 130.3962], // approx — Daimyo/Tenjin; verify
      description: "A women's vintage shop running since 2002, stocked from the owner's regular US buying trips.",
      whyGo: "Two decades of consistent personal curation make it a trusted, beginner-friendly women's vintage stop.",
      address: "Daimyo / Tenjin area, Chuo-ku, Fukuoka",
      styles: ["Vintage", "Soft Neutral"], price: "¥¥",
      site: null, image: null, preview: true // verify exact address/site
    },
    {
      id: "d-stock-tenjin", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "D-STOCK",
      coords: [33.5887, 130.3998], // approx — Tenjin/Imaizumi; verify
      description: "A 25-year-old Amekaji and denim specialist carrying Japanese-made repro denim and workwear brands.",
      whyGo: "A focused source for Japanese-made denim and vintage-replica workwear, a craft category fans travel for.",
      address: "Tenjin / Imaizumi, Chuo-ku, Fukuoka",
      styles: ["Made in Japan", "Street", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://d-stock-i.com/", image: null, preview: true // verify
    },
    {
      id: "push-me-harder-tenjin", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "Push \"me\" Harder",
      coords: [33.5884, 130.3950],
      description: "A compact backstreet shop of curated 1940s–1990s American women's vintage in feminine styles.",
      whyGo: "A tightly edited women's vintage selection in a tucked-away space that rewards hunting.",
      address: "Daimyo, Chuo-ku, Fukuoka",
      styles: ["Vintage", "Soft Neutral"], price: "¥¥",
      site: null, image: null, preview: true // verify official site
    },
    {
      id: "ragtag-fukuoka-tenjin", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "RAGTAG Fukuoka",
      coords: [33.5910, 130.3990],
      description: "A large used-designer store reselling secondhand Japanese and international designer pieces.",
      whyGo: "One of the best places in Kyushu to find pre-owned Comme des Garçons and Yohji at accessible prices.",
      address: "Tenjin, Chuo-ku, Fukuoka",
      styles: ["Designer", "Vintage", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.ragtag.jp/", image: null, preview: true
    },

    /* -- Hakata -- */
    {
      id: "saranam-hakata", cityId: "fukuoka", areaId: "fukuoka-hakata",
      name: "saranam",
      coords: [33.5896, 130.4180], // approx — Hakata-ekimae; verify
      description: "A craft-leather and lifestyle label / shop near Hakata Station working in Italian vegetable-tanned leather.",
      whyGo: "A Made-in-Japan craft brand with maker's-detail accessories right by the main station.",
      address: "Hakata-ekimae, Hakata-ku, Fukuoka",
      styles: ["Made in Japan", "Select Shop", "Soft Neutral"], price: "¥¥–¥¥¥",
      site: "https://saranam.ltd/", image: null, preview: true // verify exact address
    }
  ]
};

/* ============================================================
   2026-06-20 — public free-map display translation table (zh/ko).
   Display-only. Merged onto shops by id at load time (index.html).
   Raw shop names / brand names / addresses / URLs / IDs /
   area & city names / raw style tags stay English.
   ============================================================ */
window.TCN_MAP_I18N = {
  shops: {
    "ragtag-harajuku":{ descZh:"精选二手设计师连锁——日本与国际品牌，含档案与当季。", descKo:"큐레이션 중고 디자이너 체인 — 일본·해외 브랜드, 아카이브와 현 시즌.", whyGoZh:"在原宿入门二手设计师的明确起点，众多品牌集于一处。", whyGoKo:"하라주쿠에서 중고 디자이너를 시작하기 좋은 명확한 입구, 여러 브랜드를 한곳에서." },
    "graphpaper-tokyo":{ descZh:"精简、建筑感的日本极简——安静空间里的高端设计师与日本制基本款。", descKo:"절제되고 건축적인 일본 미니멀 — 차분한 공간의 하이엔드 디자이너와 일본산 베이식.", whyGoZh:"安静的现代日本极简；原宿附近干净设计师造型的参照。", whyGoKo:"조용한 현대 일본 미니멀 — 하라주쿠 근처에서 깔끔한 디자이너 스타일링의 레퍼런스." },
    "kura-chika-porter":{ descZh:"Yoshida & Co. 的 PORTER——标志性的日本制包袋与配饰，真正的工艺站点。", descKo:"Yoshida & Co.의 PORTER — 상징적인 일본산 가방과 액세서리, 진짜 크래프트 거점.", whyGoZh:"PORTER / Yoshida & Co.——海外难买的日本制包袋。", whyGoKo:"PORTER / Yoshida & Co. — 해외에선 사기 어려운 일본산 가방." },
    "gr8-harajuku":{ descZh:"有影响力的原宿精选店，融合日本与国际的街头与设计师品牌。", descKo:"일본과 해외의 스트리트·디자이너를 섞은 영향력 있는 하라주쿠 편집숍.", whyGoZh:"前卫的街头与设计师品牌选品，东京最受关注潮人身上常见。", whyGoKo:"도쿄에서 가장 주목받는 멋쟁이들이 입는, 앞서가는 스트리트·디자이너 편집." },
    "nepenthes-tokyo":{ descZh:"Needles 与 Engineered Garments 的大本营——日本制进阶休闲与男装。", descKo:"Needles와 Engineered Garments의 본거지 — 일본산 어드밴스드 캐주얼·멘즈웨어.", whyGoZh:"日本制进阶男装（Needles、Engineered Garments），日后会越看越眼熟。", whyGoKo:"나중에 알아보게 될 일본산 어드밴스드 멘즈웨어(Needles, Engineered Garments)." },
    "blue-blue-japan-okura":{ descZh:"浓郁的日本制氛围——靛蓝染、轻松休闲与工艺细节。", descKo:"진한 일본산 무드 — 인디고 염색, 편안한 캐주얼, 크래프트 디테일.", whyGoZh:"为靛蓝、轻松的日本制休闲与工艺细节而来。", whyGoKo:"인디고와 편안한 일본산 캐주얼, 크래프트 디테일을 위해." },
    "kapital-tokyo":{ descZh:"知名却深具日本特质——丹宁、工艺、奇特廓形与亮点单品。", descKo:"유명하지만 깊이 일본적인 — 데님, 크래프트, 독특한 실루엣, 스테이트먼트 피스.", whyGoZh:"极具日本特质的丹宁与工艺，廓形在商业街见不到。", whyGoKo:"번화가에선 못 보는 실루엣의, 일본색 짙은 데님과 크래프트." },
    "1ldk-tokyo":{ descZh:"安静的日本日常风格——干净廓形与低调品牌。", descKo:"조용한 일본 데일리 스타일 — 깔끔한 실루엣과 절제된 브랜드.", whyGoZh:"为安静的日常风格、干净廓形与低调品牌而来。", whyGoKo:"조용한 데일리 스타일, 깔끔한 실루엣, 절제된 브랜드를 위해." },
    "new-york-joe-exchange":{ descZh:"下北泽古着名所，由旧澡堂改建——以物换物货架与周日特卖。", descKo:"옛 목욕탕을 개조한 시모키타자와 빈티지 명소 — 물물교환 랙과 일요 세일.", whyGoZh:"下北泽知名站点，平价淘二手好物。", whyGoKo:"저렴하게 중고를 발견하는 유명한 시모키타자와 거점." },
    "big-time-shimokita":{ descZh:"老牌古着店——美欧二手、丹宁与外套。", descKo:"오래된 빈티지숍 — 미국·유럽 구제, 데님, 아우터.", whyGoZh:"下北泽更深入的古着站点，主攻丹宁与欧美二手基本款。", whyGoKo:"데님과 유럽/미국 구제 기본기를 노리는 더 깊은 시모키타자와 거점." },
    "chicago-koenji":{ descZh:"知名古着连锁，高圆寺氛围浓厚，设有知名和服专区。", descKo:"고엔지 무드가 강하고 유명 기모노 코너가 있는 유명 구제 체인.", whyGoZh:"知名古着连锁，价位跨度大，满是高圆寺古着气息。", whyGoKo:"넓은 가격대와 진짜 고엔지 빈티지 무드를 가진 유명 구제 체인." },
    "flamingo-koenji":{ descZh:"眼光独到的精选古着——色彩、图案与亮点单品。", descKo:"안목이 돋보이는 셀렉트 빈티지 — 컬러, 패턴, 스테이트먼트 피스.", whyGoZh:"高圆寺更精炼的古着选品，主打色彩与亮点单品。", whyGoKo:"고엔지에서 컬러와 스테이트먼트 피스를 위한 더 정제된 빈티지 셀렉션." },
    "studio-dartisan-osaka":{ descZh:"'大阪五虎'创始赤耳丹宁名所之一的旗舰店，1979年创立，冈山织造。", descKo:"'오사카 파이브' 창시 셀비지 데님 하우스 중 하나의 플래그십, 1979년 창립·오카야마 직조.", whyGoZh:"丹宁迷的朝圣站点，在品牌发源地买原坯日本制牛仔裤。", whyGoKo:"브랜드 본고장에서 루프스테이트 일본산 진을 원하는 데님 마니아의 순례 거점." },
    "lara-vintage-osaka":{ descZh:"主打欧洲的古着精选店，备货从1800年代到1990年代的古董与古着。", descKo:"유럽 중심의 빈티지 셀렉트숍, 1800년대~1990년대 앤티크·빈티지를 갖춤.", whyGoZh:"深度精选的旧世界欧洲单品，附近偏美式的古着圈里见不到。", whyGoKo:"근처의 미국 위주 구제 신에선 못 찾는, 깊이 셀렉트한 올드월드 유럽 피스." },
    "hare-minami-horie":{ descZh:"本土品牌 HARE 的大阪店，主打当代、好穿的日本日常服。", descKo:"국내 브랜드 HARE의 오사카 매장, 현대적이고 입기 쉬운 일본 데일리웨어.", whyGoZh:"在橙街入门当代日本造型的亲民起点。", whyGoKo:"오렌지 스트리트에서 현행 일본 컨템포러리 스타일링으로 들어가는 친근한 입구." },
    "kindal-shinsaibashi":{ descZh:"多层二手店，每层从街头服一路到高端二手设计师。", descKo:"층마다 스트리트웨어부터 하이엔드 중고 디자이너까지 이어지는 여러 층 중고 매장.", whyGoZh:"在大阪一站式淘二手设计师与档案单品的最佳去处之一。", whyGoKo:"오사카에서 중고 디자이너·아카이브를 한 건물에서 헌팅하기 가장 좋은 곳 중 하나." },
    "sign-osaka":{ descZh:"当代精选店，备货 ssstein、blurhms、KHOKI、irenisa 等本土设计师。", descKo:"ssstein, blurhms, KHOKI, irenisa 등 국내 디자이너를 갖춘 컨템포러리 편집숍.", whyGoZh:"聚焦日本当代前卫设计师的窗口，从梅田步行可达。", whyGoKo:"일본 현행 아방-컨템포러리 디자이너를 집중적으로 보여주는 창, 우메다에서 도보 가능." },
    "loftman-coop-umeda":{ descZh:"茶屋町的老牌精选店，日本制与户外向阵容强劲。", descKo:"차야마치의 오래된 편집숍, 일본산과 아웃도어 지향 라인업이 강하다.", whyGoZh:"在梅田站附近一站式概览做工扎实的日本与工艺向品牌。", whyGoKo:"우메다역 근처에서 잘 만든 일본·크래프트 지향 브랜드를 한곳에서 훑기." },
    "japan-blue-jeans-osaka":{ descZh:"Japan Blue Group 的大阪店，以当代版型呈现儿岛赤耳丹宁。", descKo:"Japan Blue Group의 오사카 매장, 고지마 셀비지 데님을 현대적 핏으로.", whyGoZh:"来自 Momotaro 背后织厂的亲民冈山赤耳丹宁，带手工修饰细节。", whyGoKo:"Momotaro를 만드는 공장의 친근한 오카야마 셀비지 데님, 수작업 마감 디테일." },
    "salvage-nakazakicho":{ descZh:"仓库规模的二手店，备货90至00年代古着与配饰。", descKo:"창고 규모의 중고 매장, 90~00년대 빈티지 의류와 액세서리를 갖춤.", whyGoZh:"在大阪文青区中崎町量大、价格合理地淘货。", whyGoKo:"오사카의 힙한 나카자키초에서 물량 많고 합리적인 가격으로 뒤지기." },
    "kinji-bigstep":{ descZh:"Big Step 内的大型精选二手卖场，混搭复古休闲与品牌二手。", descKo:"Big Step 안의 대형 셀렉트 중고 매장, 레트로 캐주얼과 브랜드 중고를 믹스.", whyGoZh:"美利坚村街头核心地带可靠、整齐的古着目的地。", whyGoKo:"아메리카무라 스트리트 신의 중심에 있는, 믿을 만하고 잘 정리된 빈티지 목적지." },
    "jam-amemura":{ descZh:"约8,000件的大卖场，主打80至90年代军装、工装、运动与户外古着。", descKo:"약 8,000점 규모의 대형 매장, 80~90년대 밀리터리·워크·스포츠·아웃도어 빈티지 중심.", whyGoZh:"深度、平价的美式古着，适合工装与运动服爱好者淘货。", whyGoKo:"워크웨어·스포츠웨어 헌팅 팬을 위한 깊고 저렴한 미국 빈티지." },
    "pigsty-amemura":{ descZh:"古着专门店，涵盖1930至80年代单品乃至古董杂货、首饰与球鞋。", descKo:"1930~80년대 피스부터 앤티크 잡화·주얼리·스니커즈까지 다루는 빈티지 전문점.", whyGoZh:"强于年代更早的美式古着与配饰，而非仅90年代复兴货。", whyGoKo:"90년대 리바이벌만이 아니라 더 올드한 미국 빈티지와 액세서리에 강하다." },
    "rushout-amemura":{ descZh:"精选古着店，将西方二手与精选日本品牌单品混搭。", descKo:"서양 구제에 셀렉트한 일본 브랜드 피스를 섞은 셀렉트 빈티지숍.", whyGoZh:"比同区大型仓库古着店更精炼、更有编辑感的选品。", whyGoKo:"같은 지역의 대형 창고형 구제점보다 더 정제되고 편집 감각 있는 셀렉션." },
    "fascinate-kyoto":{ descZh:"庭院式精选店，备货 Yohji Yamamoto、Julius 等40多个前卫品牌。", descKo:"Yohji Yamamoto, Julius 등 40여 개 아방가르드 브랜드를 갖춘 안뜰형 편집숍.", whyGoZh:"把日本暗黑、建筑感的设计师场景浓缩在京都一处安静空间（访客免税）。", whyGoKo:"일본의 다크하고 건축적인 디자이너 신을 교토의 조용한 공간 하나에 응축(방문객 면세)." },
    "sou-sou-kyoto":{ descZh:"京都诞生的纺织品牌，开设足袋鞋、现代和服、地下足袋与原创印花的小店。", descKo:"교토에서 태어난 텍스타일 브랜드, 다비 신발·모던 기모노·지카타비·오리지널 프린트의 작은 매장들.", whyGoZh:"以当代设计重塑京都传统织物的最清晰范例之一。", whyGoKo:"교토 전통 직물을 현대 디자인으로 재해석한 가장 명확한 예 중 하나." },
    "45r-kyoto":{ descZh:"品牌最早的临街店，木石内装，售天然靛蓝与手工修饰丹宁。", descKo:"브랜드의 가장 오래된 길가 매장, 나무·돌 인테리어에서 천연 인디고와 수작업 마감 데님을.", whyGoZh:"匠人级日本靛蓝与慢工丹宁，空间正是 45R 心中的京都。", whyGoKo:"45R가 그린 교토의 공간에서 만나는 장인의 일본 인디고와 슬로 메이드 데님." },
    "kapital-kyoto":{ descZh:"邪典冈山丹宁名所的京都店——破布拼接、刺子绣与做旧靛蓝。", descKo:"컬트 오카야마 데님 하우스의 교토 매장 — 보로 패치워크, 사시코 스티치, 가공 인디고.", whyGoZh:"海外日本时装迷心中的圣杯品牌；京都店本身就是目的地。", whyGoKo:"해외 일본 패션 팬에게 성배 같은 이름 — 교토 지점 자체가 목적지." },
    "kindal-kyoto":{ descZh:"多层二手奢侈品与设计师转卖店，精选二手包袋，男装楼层强劲。", descKo:"셀렉트한 중고 가방과 강한 멘즈 층을 갖춘 여러 층 중고 럭셔리·디자이너 리셀러.", whyGoZh:"京都选品最佳的二手设计师店之一，以公道价格售日欧品牌。", whyGoKo:"합리적 가격에 일본·유럽 브랜드를 다루는, 교토에서 가장 잘 셀렉트된 중고 디자이너숍 중 하나." },
    "pagong-kyoto":{ descZh:"1919年创立的京友禅染坊，以和服型纸印制丝棉夏威夷衫。", descKo:"1919년부터 이어진 교유젠 염색 가문, 기모노 스텐실로 찍은 실크·코튼 알로하 셔츠.", whyGoZh:"把京都活态友禅工艺做成可穿、可收藏、别处买不到的衬衫。", whyGoKo:"교토의 살아있는 유젠 크래프트를 입을 수 있고 수집 가치 있는, 다른 데선 못 구하는 셔츠로." },
    "isetan-kyoto-jp-brands":{ descZh:"车站百货内：设有 45R 等日本品牌专柜，外加本土时装。", descKo:"역 백화점 안: 45R 등 일본 메이커 인하우스 코너와 국내 패션.", whyGoZh:"时间紧的旅客在车站旁一处即可逛到多个日本制品牌，最为便利。", whyGoKo:"시간이 빠듯한 여행자에게, 역 옆에서 여러 일본산 브랜드를 한 번에 닿는 가장 편한 곳." },
    "aizenkobo-kyoto":{ descZh:"传承三代的天然蓝染（藍染）工坊，位于18世纪西阵町家，售手染织物。", descKo:"18세기 니시진 마치야에 자리한 3대째 천연 쪽염(아이조메) 공방, 손염색 직물을 판매.", whyGoZh:"世代手工染制的正宗京都靛蓝工艺，远离游客购物区。", whyGoKo:"대대로 손으로 염색해 온 가문의 진짜 교토 인디고 크래프트, 관광 쇼핑과는 거리가 먼." },
    "nishijin-textile-center":{ descZh:"西阵织行业自有大楼——售腰带、丝织品与织物配饰的卖场。", descKo:"니시진 직조 산업의 자체 건물 — 오비·실크 제품·직조 액세서리 매장.", whyGoZh:"西阵织丝织的机构本部，日本众多高端面料的传统所在。", whyGoKo:"니시진오리 실크 직조의 본산 — 일본 하이엔드 원단 상당수의 뿌리가 되는 전통." },
    "furugi-de-ikoka-ichijoji":{ descZh:"一乘寺的无人值守古着店，约5,000件进口T恤、卫衣与牛仔裤，每周更换。", descKo:"이치조지의 무인 구제숍, 약 5,000점의 수입 티셔츠·후디·진을 매주 교체.", whyGoZh:"以古怪的自助形式，呈现京都学生区的古着文化。", whyGoKo:"독특한 셀프서비스 방식으로 교토 학생가의 빈티지 문화를 담아낸 곳." },
    "madstore-undercover-sakae":{ descZh:"UNDERCOVER 的副线店，备货核心线、JohnUNDERCOVER、SueUNDERCOVER 及配饰。", descKo:"UNDERCOVER의 디퓨전 매장, 코어·JohnUNDERCOVER·SueUNDERCOVER 라인과 액세서리.", whyGoZh:"高桥盾 UNDERCOVER 的专门店，日本最受国际藏家追捧的设计师之一。", whyGoKo:"다카하시 준의 UNDERCOVER 전문 매장 — 일본에서 국제적으로 가장 많이 수집되는 디자이너 중 하나." },
    "ragtag-nagoya-sakae":{ descZh:"经鉴定的二手设计师专门店，备货 Yohji Yamamoto、Comme des Garçons 等日本品牌。", descKo:"Yohji Yamamoto, Comme des Garçons 등 일본 브랜드를 갖춘 정품 인증 중고 디자이너 전문점.", whyGoZh:"可靠地以非东京价格淘到品相良好的二手日本前卫设计师。", whyGoKo:"도쿄 가격이 아니면서도 상태 좋은 일본 아방가르드 중고 디자이너를 찾기 좋은 믿을 만한 곳." },
    "kindal-nagoya-sakae":{ descZh:"二手精选店，经营男女二手设计师与品牌服饰。", descKo:"남녀 중고 디자이너·브랜드 의류를 다루는 중고 셀렉트숍.", whyGoZh:"买手精选的二手卖场，日本与进口设计师单品周转快。", whyGoKo:"바이어가 셀렉트한 중고 매장, 일본·수입 디자이너 피스의 회전이 빠르다." },
    "midwest-nagoya":{ descZh:"名古屋的标杆，提供超越基础零售的犀利设计师与精选店造型。", descKo:"기본 리테일을 넘어선 날카로운 디자이너·편집숍 스타일링의 나고야 레퍼런스.", whyGoZh:"更犀利的设计师与精选店造型——超越基础零售的名古屋。", whyGoKo:"더 날카로운 디자이너·편집숍 스타일링 — 기본 리테일 너머의 나고야." },
    "farmers-osu":{ descZh:"美式休闲古着店，自1976年经营褪色丹宁、校园戒指与 Fire King 玻璃器。", descKo:"1976년부터 페이드 데님·칼리지 링·Fire King 글라스를 다뤄 온 아메리칸 캐주얼 빈티지숍.", whyGoZh:"大须创始级古着店之一，名古屋二手美式文化的活档案。", whyGoKo:"오스 창시급 빈티지 매장 중 하나, 나고야 중고 아메리카나 문화의 살아있는 레퍼런스." },
    "the-other-osu":{ descZh:"专精1960至70年代英伦古着、音乐与亚文化30年的店。", descKo:"1960~70년대 영국 빈티지·음악·서브컬처를 30년 다뤄 온 전문점.", whyGoZh:"真正具策展性的 mod / 英伦古着目的地，日本以外难寻。", whyGoKo:"진짜 큐레이션이 있는 모드/영국 빈티지 목적지 — 일본 밖에선 찾기 어렵다." },
    "archaic-osu":{ descZh:"安静、画廊般的店，经营欧美军装、法式工装与古着 Levi's。", descKo:"유럽·미국 밀리터리, 프렌치 워크, 빈티지 Levi's를 다루는 차분하고 갤러리 같은 매장.", whyGoZh:"在古着云集的街区中，军装与欧式工装古着选品最为干净考究之一。", whyGoKo:"빈티지가 즐비한 동네에서 가장 깔끔하게 셀렉트된 밀리터리·유럽 워크 빈티지 셀렉션 중 하나." },
    "komehyo-nagoya-osu":{ descZh:"日本最大二手零售商的旗舰店——多层经鉴定的二手设计师与奢侈品。", descKo:"일본 최대 리유즈 리테일러의 플래그십 — 여러 층의 정품 인증 중고 디자이너·럭셔리.", whyGoZh:"Komehyo 的发祥店，以低于东京的价格鉴定二手设计师的日本老字号。", whyGoKo:"Komehyo의 발상지 — 도쿄보다 저렴한 가격에 중고 디자이너를 감정하는 일본의 노포." },
    "noritake-no-mori":{ descZh:"位于 Noritake 1904年瓷器工厂旧址的零售与工艺中心，距车站不远。", descKo:"1904년 Noritake 도자기 공장 부지에 자리한 리테일·크래프트 센터, 역에서 도보 거리.", whyGoZh:"日本制工艺站点，可购买并观看代表性瓷器名门的制作过程。", whyGoKo:"일본을 대표하는 도자기 하우스의 제작을 보고 살 수 있는 메이드 인 재팬 크래프트 거점." },
    "komehyo-meieki":{ descZh:"名古屋诞生的二手零售商的车站分店——经鉴定的二手设计师、包袋与腕表。", descKo:"나고야에서 태어난 리유즈 리테일러의 역 인근 지점 — 정품 인증 중고 디자이너·가방·시계.", whyGoZh:"在车站旁便捷光顾日本最受信赖、发源于名古屋的二手奢侈品连锁。", whyGoKo:"역 옆에서 편하게 들르는, 나고야에서 시작된 일본에서 가장 신뢰받는 중고 럭셔리 체인." },
    "are-you-different-daimyo":{ descZh:"整栋楼的古着店，精选全球孤品并搭配自有原创线。", descKo:"건물 전체를 쓰는 빈티지 매장, 전 세계 원오프 피스를 자체 오리지널 라인과 함께 셀렉트.", whyGoZh:"大名最受媒体推崇的古着目的地，屡获日本时装媒体青睐。", whyGoKo:"다이묘에서 에디토리얼로 가장 주목받는 빈티지 목적지, 일본 패션 미디어가 꼽는 곳." },
    "okolo-fukuoka":{ descZh:"以 SABY、PRODUCT TWELVE 等日本本土品牌为核心的男装/中性精选店。", descKo:"SABY, PRODUCT TWELVE 등 일본 국내 브랜드를 중심으로 한 멘즈/유니섹스 편집숍.", whyGoZh:"备货东京以外少见同台的难寻日本本土品牌。", whyGoKo:"도쿄 밖에선 한자리에 보기 드문, 찾기 힘든 일본 국내 브랜드를 갖췄다." },
    "birthday-fukuoka":{ descZh:"大名老牌精选店，备货 Maison MIHARA YASUHIRO、MINEDENIM 等本土设计师。", descKo:"Maison MIHARA YASUHIRO, MINEDENIM 등 국내 디자이너를 갖춘 오래된 다이묘 편집숍.", whyGoZh:"可靠的一站式选购当代日本设计师男女装，拥有强大本地拥趸。", whyGoKo:"현행 일본 디자이너 남녀 의류를 한곳에서, 탄탄한 로컬 팬층을 가진 믿을 만한 거점." },
    "nobo-daimyo":{ descZh:"大名主街上的欧洲古着店，备货好穿的日常单品及鞋包。", descKo:"다이묘 메인 스트리트의 유럽 빈티지숍, 입기 좋은 데일리 피스에 신발·가방까지.", whyGoZh:"以精选店视角呈现近年欧洲古着，适合偏好沉静中性基本款胜过张扬美式的人。", whyGoKo:"최근 유럽 빈티지를 셀렉트숍 시각으로 — 요란한 아메리카나보다 차분한 뉴트럴 베이식을 원하는 팬에게." },
    "going-bellbo-tenjin":{ descZh:"日式复古古着店，专精1960至90年代本土单品、改造与原创服饰。", descKo:"일본 레트로 빈티지 매장, 1960~90년대 국내 피스·리메이크·오리지널 의류 전문.", whyGoZh:"少见地专注日本制古着与原创改造，而非常见的美式进口货。", whyGoKo:"흔한 미국 수입이 아닌, 일본산 빈티지와 오리지널 리메이크에 집중하는 드문 곳." },
    "eureka-fukuoka":{ descZh:"自2002年经营的女装古着店，货源来自店主定期赴美采买。", descKo:"2002년부터 운영해 온 우먼즈 빈티지숍, 오너의 정기 미국 바잉으로 입고.", whyGoZh:"二十年如一日的个人精选，是值得信赖、对新手友好的女装古着站点。", whyGoKo:"20년간 일관된 개인 큐레이션으로, 믿을 만하고 입문자에게 친절한 우먼즈 빈티지 거점." },
    "d-stock-tenjin":{ descZh:"经营25年的美式休闲与丹宁专门店，备货日本制复刻丹宁与工装品牌。", descKo:"25년 된 아메카지·데님 전문점, 일본산 리프로 데님과 워크웨어 브랜드를 갖춤.", whyGoZh:"专注日本制丹宁与古着复刻工装的货源——粉丝会为此专程而来的工艺类别。", whyGoKo:"일본산 데님과 빈티지 리플리카 워크웨어의 집중 소스 — 팬들이 일부러 찾는 크래프트 카테고리." },
    "push-me-harder-tenjin":{ descZh:"小巷里的小型店，精选1940至90年代美式女装古着，风格女性化。", descKo:"뒷골목의 작은 매장, 1940~90년대 미국 우먼즈 빈티지를 페미닌하게 셀렉트.", whyGoZh:"藏于一隅的精炼女装古着选品，值得细细淘。", whyGoKo:"구석진 공간에 정제된 우먼즈 빈티지 셀렉션, 뒤질수록 보람 있는 곳." },
    "ragtag-fukuoka-tenjin":{ descZh:"大型二手设计师店，转卖日本与国际二手设计师单品。", descKo:"일본·해외 중고 디자이너 피스를 리셀하는 대형 중고 디자이너 매장.", whyGoZh:"在九州以亲民价格淘二手 Comme des Garçons 与 Yohji 的最佳去处之一。", whyGoKo:"규슈에서 중고 Comme des Garçons·Yohji를 합리적 가격에 찾기 가장 좋은 곳 중 하나." },
    "saranam-hakata":{ descZh:"博多站附近的工艺皮革与生活方式品牌/店铺，使用意大利植鞣皮。", descKo:"하카타역 근처의 크래프트 레더·라이프스타일 브랜드/숍, 이탈리아 베지터블 가죽을 다룬다.", whyGoZh:"主站旁的日本制工艺品牌，配饰满是匠人细节。", whyGoKo:"주요 역 바로 옆의 일본산 크래프트 브랜드, 장인의 디테일이 담긴 액세서리." }
  }
};
