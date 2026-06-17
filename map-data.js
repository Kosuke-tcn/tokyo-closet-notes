/* ============================================================
   Tokyo Closet Notes — Japan Fashion Map DATA
   ------------------------------------------------------------
   Two separate concerns, on purpose:

   1) TCN_MAP_DATA.cities  — CITY CONFIG (tabs, center/zoom, areas, intro)
   2) TCN_MAP_DATA.shops   — SHOP DATA (the pins)

   Each shop: id, cityId, areaId, name, coords, description, whyGo,
              address, styles[], price, site, image, preview.

   ACCURACY NOTE (read before public release)
   ------------------------------------------
   • This is the FREE preview. Coordinates here are APPROXIMATE,
     area-level points — good enough to show the right neighborhood.
   • Addresses are deliberately AREA / DISTRICT level (not invented
     street numbers). VERIFY each shop's exact official address and
     that it still operates before promoting it to the paid map.
   • The popup "Open in Google Maps" button searches by
     shop name + address (or name + area + city), so visitors always
     land on Google's authoritative, up-to-date location.
   • Photos: keep image: null (a styled monogram shows instead) until
     you have real, permission-cleared photos.

   STYLE TAGS used for filtering (must match the filter buttons):
     "Made in Japan","Select Shop","Vintage","Designer","Street","Soft Neutral"
   ============================================================ */

window.TCN_MAP_DATA = {
  defaultCityId: "tokyo",

  /* Teaser numbers for the locked full (paid) map. */
  fullMap: {
    shopCount: "150+",
    districtCount: 12,
    note: "The full map adds deeper routes and hidden shops across more districts in Tokyo, Osaka, Kyoto, Nagoya, Fukuoka and beyond."
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
      intro: "Osaka's mix of big-street energy and serious small select shops — a free first selection.",
      areas: [
        {
          id: "osaka-shinsaibashi", name: "Shinsaibashi / Horie",
          tagline: "Osaka's main shopping spine into the calmer Horie side streets.",
          bestFor: "Select shops and menswear", station: "Shinsaibashi or Yotsubashi Station",
          center: [34.6728, 135.4985], zoom: 15
        },
        {
          id: "osaka-umeda", name: "Umeda / Nakazakicho",
          tagline: "Big-city Umeda beside the indie cafes and shops of Nakazakicho.",
          bestFor: "Select shops and Japanese brands", station: "Umeda / Nakazakicho Station",
          center: [34.7045, 135.5010], zoom: 15
        },
        {
          id: "osaka-amemura", name: "Amerikamura",
          tagline: "Osaka's street and vintage core — young, loud, secondhand.",
          bestFor: "Vintage and street", station: "Shinsaibashi Station",
          center: [34.6720, 135.4970], zoom: 16
        }
      ]
    },

    kyoto: {
      id: "kyoto", name: "Kyoto", center: [35.0080, 135.7680], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Quiet, craft-led Kyoto — slower shopping between the old streets.",
      areas: [
        {
          id: "kyoto-kawaramachi", name: "Kawaramachi / Sanjo",
          tagline: "Kyoto's central shopping streets, walkable and dense.",
          bestFor: "Select shops and Kyoto craft", station: "Sanjo or Kyoto-Shiyakusho-mae Station",
          center: [35.0080, 135.7690], zoom: 15
        },
        {
          id: "kyoto-station", name: "Kyoto Station",
          tagline: "The big station gateway — a convenient first or last stop.",
          bestFor: "Convenience and brand anchors", station: "Kyoto Station",
          center: [34.9858, 135.7588], zoom: 15
        },
        {
          id: "kyoto-kitayama", name: "Kitayama / Demachiyanagi",
          tagline: "Quieter north Kyoto — calm, design-led, less touristy.",
          bestFor: "Minimal and soft neutral", station: "Kitayama or Demachiyanagi Station",
          center: [35.0400, 135.7655], zoom: 14
        }
      ]
    },

    nagoya: {
      id: "nagoya", name: "Nagoya", center: [35.1660, 136.8990], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Nagoya from the Sakae fashion blocks to the Osu arcades — a free first selection.",
      areas: [
        {
          id: "nagoya-sakae", name: "Sakae",
          tagline: "Nagoya's main fashion district.",
          bestFor: "Designer and select shops", station: "Sakae Station",
          center: [35.1683, 136.9078], zoom: 15
        },
        {
          id: "nagoya-osu", name: "Osu",
          tagline: "Covered arcades full of vintage and street finds.",
          bestFor: "Vintage and street", station: "Osu Kannon Station",
          center: [35.1595, 136.9010], zoom: 16
        },
        {
          id: "nagoya-station", name: "Nagoya Station",
          tagline: "The station-side hub — big buildings and brand anchors.",
          bestFor: "Made in Japan and denim", station: "Nagoya Station",
          center: [35.1709, 136.8820], zoom: 15
        }
      ]
    },

    fukuoka: {
      id: "fukuoka", name: "Fukuoka", center: [33.5900, 130.4010], zoom: 13,
      defaultAreaId: "all", comingSoon: false,
      intro: "Fukuoka's compact, walkable fashion streets around Tenjin and Daimyo — a free first selection.",
      areas: [
        {
          id: "fukuoka-tenjin", name: "Tenjin",
          tagline: "Fukuoka's downtown shopping center.",
          bestFor: "Select shops and Japanese brands", station: "Tenjin Station",
          center: [33.5910, 130.3990], zoom: 15
        },
        {
          id: "fukuoka-daimyo", name: "Daimyo",
          tagline: "Tenjin's backstreets — independent, design-led shops.",
          bestFor: "Select shops and quiet style", station: "Tenjin or Akasaka Station",
          center: [33.5890, 130.3952], zoom: 16
        },
        {
          id: "fukuoka-hakata", name: "Hakata",
          tagline: "The Hakata station side — a travel-friendly first direction.",
          bestFor: "Travel-friendly browsing", station: "Hakata Station",
          center: [33.5900, 130.4200], zoom: 15
        }
      ]
    }
  },

  /* ---------------- SHOP DATA (free preview pins) ----------------
     Coords are approximate (area-level). Addresses are district-level —
     VERIFY exact official addresses before any paid release.        */
  shops: [
    /* ===================== TOKYO ===================== */
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
      coords: [35.6810, 139.7090], // approx — Sendagaya; verify exact address
      description: "Pared-back, architectural Japanese minimalism — high-end designer and made-in-Japan staples in a calm space.",
      whyGo: "Quiet, modern Japanese minimalism; a reference for clean designer styling near Harajuku.",
      address: "Sendagaya, Shibuya City, Tokyo (near Harajuku / Omotesando)",
      styles: ["Designer", "Soft Neutral", "Select Shop"], price: "¥¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "kura-chika-porter", cityId: "tokyo", areaId: "harajuku",
      name: "Kura Chika by PORTER",
      coords: [35.6692, 139.7082], // approx — Jingumae; verify exact address
      description: "Yoshida & Co.'s PORTER — iconic Japanese-made bags and accessories, a true craft stop.",
      whyGo: "PORTER / Yoshida & Co. — made-in-Japan bags that are hard to buy abroad.",
      address: "Jingumae, Shibuya City, Tokyo (Harajuku)",
      styles: ["Made in Japan", "Select Shop"], price: "¥¥–¥¥¥",
      site: "https://www.yoshidakaban.com/", image: null, preview: true
    },

    /* -- Shibuya / Daikanyama / Ebisu -- */
    {
      id: "nepenthes-tokyo", cityId: "tokyo", areaId: "shibuya",
      name: "Nepenthes Tokyo",
      coords: [35.6556, 139.6948], // approx — Nanpeidai, near Shibuya/Shinsen; verify exact address
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
      id: "chicago-koenji", cityId: "tokyo", areaId: "shimokita",
      name: "Chicago Koenji",
      coords: [35.7052, 139.6498],
      description: "Famous used-clothing chain with a strong Koenji feel and a known kimono corner.",
      whyGo: "A famous used chain with a broad price range and real Koenji vintage feel.",
      address: "Koenji, Suginami City, Tokyo",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: "https://www.chicago.co.jp/", image: null, preview: true
    },

    /* ===================== OSAKA ===================== */
    {
      id: "silver-and-gold-osaka", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "Silver and Gold",
      coords: [34.6736, 135.5006],
      description: "Respected Osaka select shop — Japanese and international menswear, quiet serious curation.",
      whyGo: "A serious menswear curation for those who want depth over hype.",
      address: "Shinsaibashi / Minamisemba, Chuo-ku, Osaka",
      styles: ["Select Shop", "Made in Japan", "Designer"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "strato-osaka", cityId: "osaka", areaId: "osaka-shinsaibashi",
      name: "STRATO",
      coords: [34.6724, 135.4963],
      description: "Relaxed Japanese everyday style — natural fabrics and understated casualwear.",
      whyGo: "Good for natural-fabric, understated daily wear in the calm Horie streets.",
      address: "Horie, Nishi-ku, Osaka",
      styles: ["Select Shop", "Soft Neutral"], price: "¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "loftman-osaka", cityId: "osaka", areaId: "osaka-umeda",
      name: "LOFTMAN (Osaka)",
      coords: [34.7048, 135.5012],
      description: "A strong Kansai select shop — Japanese brands, utility wear, and long-term staples.",
      whyGo: "A dependable Kansai reference for Japanese brands and utility staples.",
      address: "Umeda / Nakazakicho, Kita-ku, Osaka",
      styles: ["Select Shop", "Made in Japan", "Street"], price: "¥¥–¥¥¥",
      site: "https://loftman.co.jp/", image: null, preview: true
    },
    {
      id: "amemura-vintage-route", cityId: "osaka", areaId: "osaka-amemura",
      name: "Amerikamura vintage route (preview)",
      coords: [34.6720, 135.4970],
      description: "A preview pin for Osaka's street and vintage core — the full route is in the paid map.",
      whyGo: "Start here for Osaka street and vintage culture; the deep route is paid-only.",
      address: "Amerikamura, Chuo-ku, Osaka",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true
    },

    /* ===================== KYOTO ===================== */
    {
      id: "loftman-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "LOFTMAN Kyoto",
      coords: [35.0084, 135.7686],
      description: "One of Kyoto's strongest references — Japanese brands, outdoor influence, long-wear pieces.",
      whyGo: "Kyoto's strongest single stop for Japanese brands and outdoor-leaning staples.",
      address: "Kawaramachi / Sanjo, Nakagyo-ku, Kyoto",
      styles: ["Select Shop", "Made in Japan", "Street"], price: "¥¥–¥¥¥",
      site: "https://loftman.co.jp/", image: null, preview: true
    },
    {
      id: "sou-sou-kyoto", cityId: "kyoto", areaId: "kyoto-kawaramachi",
      name: "SOU・SOU",
      coords: [35.0040, 135.7689],
      description: "Kyoto-rooted brand with a clear textile identity — modern tabi shoes and Japanese prints.",
      whyGo: "A Kyoto-made textile language: tabi shoes, prints, a clearly Japanese look.",
      address: "Nakagyo-ku, Kyoto (near Shijo-Kawaramachi)",
      styles: ["Made in Japan", "Soft Neutral"], price: "¥¥",
      site: "https://www.sousou.co.jp/", image: null, preview: true
    },
    {
      id: "bshop-kyoto", cityId: "kyoto", areaId: "kyoto-kitayama",
      name: "Bshop (Kyoto)",
      coords: [35.0470, 135.7640],
      description: "Clean entry point for quiet casualwear and timeless, Japanese-friendly styling.",
      whyGo: "For timeless, quiet casualwear in calm north Kyoto.",
      address: "Kitayama, Kita-ku, Kyoto",
      styles: ["Select Shop", "Soft Neutral"], price: "¥¥–¥¥¥",
      site: "https://bshop-inc.com/", image: null, preview: true
    },

    /* ===================== NAGOYA ===================== */
    {
      id: "midwest-nagoya", cityId: "nagoya", areaId: "nagoya-sakae",
      name: "MIDWEST Nagoya",
      coords: [35.1685, 136.9075],
      description: "Nagoya reference for sharper designer and select-shop styling beyond basic retail.",
      whyGo: "Sharper designer and select-shop styling — Nagoya beyond basic retail.",
      address: "Sakae, Naka-ku, Nagoya",
      styles: ["Designer", "Select Shop", "Street"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "osu-vintage-route", cityId: "nagoya", areaId: "nagoya-osu",
      name: "Osu vintage route (preview)",
      coords: [35.1595, 136.9012],
      description: "A preview of Nagoya's vintage and street arcades — discovery outside Tokyo.",
      whyGo: "Browse Nagoya's vintage arcades; the full route is in the paid map.",
      address: "Osu, Naka-ku, Nagoya",
      styles: ["Vintage", "Street"], price: "¥–¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "kapital-nagoya", cityId: "nagoya", areaId: "nagoya-station",
      name: "KAPITAL (Nagoya) — candidate",
      coords: [35.1709, 136.8828],
      description: "Japan-coded denim and craft anchor for Nagoya — confirm the official store before visiting.",
      whyGo: "A Japan-coded denim/craft anchor — verify the exact store location first.",
      address: "Nagoya Station area, Nakamura-ku, Nagoya",
      styles: ["Made in Japan", "Designer", "Street"], price: "¥¥¥",
      site: "https://www.kapital.jp/", image: null, preview: true
    },

    /* ===================== FUKUOKA ===================== */
    {
      id: "dice-and-dice-fukuoka", cityId: "fukuoka", areaId: "fukuoka-daimyo",
      name: "Dice&Dice",
      coords: [33.5892, 130.3955],
      description: "Strong Fukuoka select-shop candidate — Japanese brands and quiet style.",
      whyGo: "Local Fukuoka curation of Japanese brands and quiet style.",
      address: "Daimyo, Chuo-ku, Fukuoka",
      styles: ["Select Shop", "Made in Japan", "Soft Neutral"], price: "¥¥–¥¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "baybrook-fukuoka", cityId: "fukuoka", areaId: "fukuoka-tenjin",
      name: "Baybrook (Fukuoka) — candidate",
      coords: [33.5908, 130.3986],
      description: "Shows Fukuoka's local select-shop culture beyond tourist shopping.",
      whyGo: "A window into Fukuoka's local select-shop culture, not the tourist track.",
      address: "Tenjin, Chuo-ku, Fukuoka",
      styles: ["Select Shop", "Soft Neutral"], price: "¥¥",
      site: null, image: null, preview: true
    },
    {
      id: "fukuoka-route-preview", cityId: "fukuoka", areaId: "fukuoka-hakata",
      name: "Fukuoka city fashion route (preview)",
      coords: [33.5900, 130.4200],
      description: "A simple preview pin for visitors who want a first shopping direction in Fukuoka.",
      whyGo: "A first direction for travelers; the full route is in the paid map.",
      address: "Hakata / Tenjin area, Fukuoka",
      styles: ["Select Shop", "Street"], price: "¥–¥¥¥",
      site: null, image: null, preview: true
    }
  ]
};
