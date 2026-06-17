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
