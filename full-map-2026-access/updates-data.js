/* ============================================================================
   Full Japan Fashion Map - 2026 Edition  ·  Japan Fashion Updates data
   ----------------------------------------------------------------------------
   Manually curated. NOT auto-fetched, NOT auto-published. Every entry is added
   by hand and is verify-first. The page never writes back to this file.

   FIELDS (per update object):
     id         (required)  stable unique string, e.g. "u-2026-07-shimokita-flea"
     title      (required)  English title
     titleZh / titleKo      optional translated titles (fallback = English)
     category   (required)  flea | popup | brand_event | vintage_fair |
                            dept_event | new_shop | area_note | limited_info
     city       (required)  cityId from paid-map-data.js (tokyo/osaka/kyoto/
                            nagoya/fukuoka) — or "japan" for nationwide/online
     area                   neighborhood / district text
     dateStart  (ISO)       "YYYY-MM-DD". Single-day events: dateStart === dateEnd
     dateEnd    (ISO)
     venue                  place / building name
     sourceUrl              OFFICIAL link to verify (official site / official
                            Instagram / department-store or shop page). Opens in
                            a new tab as the "Official source" button.
                            >>> Confirm the official URL BEFORE adding it. <<<
     mapsUrl                Google Maps link for the venue. Shows an "Open in
                            Google Maps" button only when present. (Separate from
                            the shop cards' Google Maps links.)
     note / noteZh / noteKo short note. For anything not personally confirmed,
                            include "Confirm details before visiting."
     status                 active | upcoming | expired | hold
                            - The page computes active/upcoming/expired from the
                              DATES automatically, so you normally don't hand-edit
                              this as time passes.
                            - status:"hold" ALWAYS hides the entry (draft/paused).
                            - If an entry has no dates, this field is used as-is.
     verified   (bool)      true  -> "Verified" chip
                            false -> "Needs check" chip + confirm caption
     featured   (bool)      true  -> pinned to the top of the list

   BADGE MEANING: the "Updates N" badge counts ACTIVE + UPCOMING only.
                  expired and hold entries are NOT counted.

   WEEKLY OPERATING RULES (manual, verify-first):
     1. Research once a week (flea markets, pop-ups, brand events, vintage fairs,
        department-store events, new shops, area notes, limited info).
     2. For events/flea/pop-up/dept/brand events, put an OFFICIAL link in sourceUrl
        — official site / official Instagram / venue page / organizer page.
        Confirm the official URL BEFORE adding it.
     3. Not personally confirmed yet? -> verified:false (shows "Needs check").
        Confirmed -> verified:true (shows "Verified").
     4. Do NOT delete finished events. Let them go "expired" (dates pass), or set
        status:"hold" to hide without deleting. Keeps a history you can reuse.
     5. Big/anchor events (large fleas, major pop-ups, key fairs) -> featured:true
        so they pin to the top and show first on mobile.
     6. If there is a venue, add mapsUrl (Google Maps link) -> "Open in Google Maps".
     7. NEVER auto-fetch or auto-publish. Every entry is added by hand after a check.

   WEEKLY FLOW: research -> confirm the official source URL -> add an object here
                with verified:true (or verified:false + a confirm note) -> deploy
                index.html + this file. Expired items fall to "Past" automatically.
   ============================================================================ */
window.TCN_PAID_UPDATES = {
  updated: "2026-07-06",   // last research sync from the "Japan Fashion Updates" sheet
  updates: [
    {
      id: "u-2026-10-expo70-vintage-market",
      title: "Vintage Market — Expo '70 Park (Osaka)",
      titleZh: "古着・古董市集 — 万博'70纪念公园（大阪）",
      titleKo: "빈티지 마켓 — 엑스포'70 기념공원 (오사카)",
      category: "vintage_fair",
      city: "osaka",
      area: "Suita / Expo '70 Commemorative Park",
      dateStart: "2026-10-23",
      dateEnd: "2026-10-25",
      venue: "Expo '70 Commemorative Park, East Plaza",
      sourceUrl: "https://vintagemarket.jp/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Expo+70+Commemorative+Park+East+Plaza+Suita+Osaka",
      note: "One of Kansai's largest antique/vintage flea markets; international antiques, vintage furniture and vintage clothing. 9:30-16:30. Advance ¥700 / day ¥1,000 (+park admission). Outdoor / weather-dependent.",
      noteZh: "关西最大规模的古董・古着市集之一；国际古董、复古家具与古着。9:30-16:30。预售 ¥700 / 当日 ¥1,000（另需入园费）。露天，受天气影响。",
      noteKo: "간사이 최대 규모의 골동품·빈티지 마켓 중 하나; 해외 골동품·빈티지 가구·구제 의류. 9:30-16:30. 예매 ¥700 / 당일 ¥1,000(+입장료). 야외, 날씨 영향.",
      status: "upcoming",
      verified: true,
      featured: true
    },
    {
      id: "u-2026-07-oedo-antique-tokyo",
      title: "Oedo Antique Market — Tokyo International Forum",
      titleZh: "大江户古董市集 — 东京国际论坛",
      titleKo: "오에도 골동품 마켓 — 도쿄 국제포럼",
      category: "flea",
      city: "tokyo",
      area: "Yurakucho / Marunouchi",
      dateStart: "2026-07-05",
      dateEnd: "2026-07-11",
      venue: "Tokyo International Forum, Ground Plaza (1F)",
      sourceUrl: "https://www.antique-market.jp/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tokyo+International+Forum",
      note: "Large open-air antique & vintage market in central Tokyo; antiques, retro goods, some vintage clothing and textiles. Held on select weekend dates (appears 7/5 Sun & 7/11 Sat). Cash recommended. Confirm details before visiting.",
      noteZh: "东京市中心的大型露天古董・古着市集；古董、复古杂货、部分古着与织物。仅在特定周末举办（约 7/5 周日 & 7/11 周六）。建议带现金。到访前请确认详情。",
      noteKo: "도쿄 도심의 대형 야외 골동품·빈티지 마켓; 골동품·레트로 잡화·일부 구제 의류와 텍스타일. 특정 주말에만 개최(약 7/5 일·7/11 토). 현금 권장. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-world-sandal-isetan",
      title: "World Sandal Market 2026 — Isetan Shinjuku Men's",
      titleZh: "世界凉鞋市集 2026 — 伊势丹新宿男士馆",
      titleKo: "월드 샌들 마켓 2026 — 이세탄 신주쿠 멘즈",
      category: "dept_event",
      city: "tokyo",
      area: "Shinjuku",
      dateStart: "2026-07-08",
      dateEnd: "2026-08-04",
      venue: "Isetan Shinjuku Men's Building",
      sourceUrl: "https://www.mistore.jp/store/shinjuku/event_calendar.html",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Isetan+Shinjuku",
      note: "Annual summer sandal/footwear event at Isetan Men's; Japanese and global sandal brands and summer styling. Tax-free service for overseas visitors. Confirm details before visiting.",
      noteZh: "伊势丹男士馆的年度夏季凉鞋・鞋履企划；日本及全球凉鞋品牌与夏季造型。提供海外旅客免税。到访前请确认详情。",
      noteKo: "이세탄 멘즈의 연례 여름 샌들·풋웨어 행사; 일본·글로벌 샌들 브랜드와 여름 스타일링. 해외 방문객 면세. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-aiism-hankyu-umeda",
      title: "Ai-ism: Living with Japan Blue — Hankyu Umeda",
      titleZh: "藍ism：与日本蓝共生 — 阪急梅田",
      titleKo: "아이즘: 일본의 블루와 살다 — 한큐 우메다",
      category: "dept_event",
      city: "osaka",
      area: "Umeda",
      dateStart: "2026-07-15",
      dateEnd: "2026-07-20",
      venue: "Hankyu Umeda Main Store, 9F Event Hall",
      sourceUrl: "https://www.hankyu-dept.co.jp/honten/event/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hankyu+Umeda+Main+Store",
      note: "Japanese indigo (aizome) lifestyle & fashion event - indigo-dyed apparel, textiles and goods. Strong Made-in-Japan / craft appeal, tax-free. Confirm details before visiting.",
      noteZh: "日本蓝染（藍染）生活・时尚企划——蓝染服饰、织物与杂货。日本制造・工艺感强，提供免税。到访前请确认详情。",
      noteKo: "일본 인디고(아이조메) 라이프스타일·패션 행사 - 인디고 염색 의류·텍스타일·소품. 메이드 인 재팬·크래프트 감성, 면세. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-angelic-pretty-kyoto",
      title: "Angelic Pretty Kyoto — reopening at Fujii Daimaru WEST",
      titleZh: "Angelic Pretty 京都 — 藤井大丸 WEST 重新开幕",
      titleKo: "엔젤릭 프리티 교토 — 후지이 다이마루 WEST 재오픈",
      category: "brand_event",
      city: "kyoto",
      area: "Shijo Kawaramachi",
      dateStart: "2026-07-03",
      dateEnd: "2026-07-05",
      venue: "FUJII DAIMARU WEST (WEST11), Kyoto",
      sourceUrl: "https://fujiidaimaru.co.jp/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fujii+Daimaru+Kyoto",
      note: "Lolita-fashion brand Angelic Pretty relocates/reopens at Fujii Daimaru WEST with a 7/3-7/5 opening event. A destination purchase for overseas Lolita/kawaii fans. Confirm details before visiting.",
      noteZh: "Lolita 时尚品牌 Angelic Pretty 迁址并于藤井大丸 WEST 重新开幕，7/3-7/5 举办开幕活动。海外 Lolita/kawaii 粉丝的必访购买点。到访前请确认详情。",
      noteKo: "로리타 패션 브랜드 엔젤릭 프리티가 후지이 다이마루 WEST로 이전·재오픈, 7/3-7/5 오픈 행사. 해외 로리타/카와이 팬에게 목적지급 구매처. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-crayme-nagoya-parco",
      title: "Crayme, pop-up — Nagoya PARCO",
      titleZh: "Crayme, 快闪 — 名古屋 PARCO",
      titleKo: "Crayme, 팝업 — 나고야 PARCO",
      category: "popup",
      city: "nagoya",
      area: "Sakae",
      dateStart: "2026-07-03",
      dateEnd: "2026-07-05",
      venue: "Nagoya PARCO, West Building 3F Event Space",
      sourceUrl: "https://nagoya.parco.jp/event/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nagoya+PARCO",
      note: "Short-run pop-up by Japanese brand Crayme, at Nagoya PARCO (Sakae). Easy stop for trend-led Japanese labels. Reconfirm exact floor/time before visiting.",
      noteZh: "日本品牌 Crayme, 于名古屋 PARCO（荣）的短期快闪。趋势日系品牌的便利一站。到访前请确认具体楼层与时间。",
      noteKo: "일본 브랜드 Crayme,의 나고야 PARCO(사카에) 단기 팝업. 트렌드 일본 브랜드를 둘러보기 좋음. 방문 전 정확한 층·시간을 확인하세요.",
      status: "upcoming",
      verified: true,
      featured: false
    },
    {
      id: "u-2026-07-fukuoka-vintage-market",
      title: "Fukuoka Vintage Market #6",
      titleZh: "福冈古着市集 第6回",
      titleKo: "후쿠오카 빈티지 마켓 제6회",
      category: "vintage_fair",
      city: "fukuoka",
      area: "Hakata Port",
      dateStart: "2026-07-04",
      dateEnd: "2026-07-05",
      venue: "Hakata Port International Terminal, 3F Terminal Hall",
      sourceUrl: "https://www.instagram.com/fukuoka_vintage_market/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hakata+Port+International+Terminal+Fukuoka",
      note: "Kyushu's largest used-clothing/vintage fair, many dealers indoors at the Hakata Port terminal. Cash recommended. Date is NOT yet officially confirmed - check @fukuoka_vintage_market and confirm details before visiting.",
      noteZh: "九州最大规模的古着・二手市集，多家摊主集中于博多港码头室内。建议带现金。日期尚未正式确认——请查看 @fukuoka_vintage_market 并于到访前确认详情。",
      noteKo: "규슈 최대 규모의 구제·빈티지 페어, 하카타항 터미널 실내에 다수 딜러. 현금 권장. 날짜가 아직 공식 확정되지 않음 - @fukuoka_vintage_market 확인 후 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-area-daimyo-fukuoka",
      title: "Area note: Daimyo vintage cluster, Fukuoka",
      titleZh: "区域笔记：福冈大名古着街区",
      titleKo: "지역 노트: 후쿠오카 다이묘 빈티지 거리",
      category: "area_note",
      city: "fukuoka",
      area: "Daimyo / Tenjin",
      dateStart: "",
      dateEnd: "",
      venue: "",
      sourceUrl: "https://jamtrading.jp/blogs/jam/10000036/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Daimyo+Chuo-ku+Fukuoka",
      note: "Daimyo near Tenjin packs many vintage/used-clothing shops within roughly 500m (e.g., JAM and others) - one of Japan's densest secondhand districts. Many shops open from around noon. Verify individual shop hours before visiting.",
      noteZh: "天神附近的大名在约 500m 内聚集大量古着・二手店（如 JAM 等）——日本最密集的二手街区之一。多数店铺约中午开门。到访前请确认各店营业时间。",
      noteKo: "텐진 인근 다이묘는 약 500m 안에 다수의 빈티지·구제 매장(JAM 등)이 밀집 - 일본에서 가장 밀도 높은 중고 거리 중 하나. 다수 매장이 정오쯤 오픈. 방문 전 각 매장 영업시간을 확인하세요.",
      status: "active",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-shibuya-antique-market",
      title: "Shibuya Antique Market — Shibuya Garden Tower",
      titleZh: "涩谷古董市集 — 涩谷 Garden Tower",
      titleKo: "시부야 골동품 마켓 — 시부야 가든타워",
      category: "flea",
      city: "tokyo",
      area: "Shibuya / Nampeidai",
      dateStart: "2026-07-12",
      dateEnd: "2026-07-12",
      venue: "Shibuya Garden Tower, outdoor plaza",
      sourceUrl: "https://tokyo-romantic.com/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shibuya+Garden+Tower",
      note: "Central-Shibuya open-air antique & vintage flea market (about 100 stalls): Japanese/Western antiques, old tools, vintage furniture, accessories, vintage clothing and goods. 10:00-16:00, free entry. Recurring every 2nd & 4th Sunday - next dates 7/12 (Sun) and 7/26 (Sun). Confirm details before visiting.",
      noteZh: "涩谷市中心的露天古董・古着市集（约100摊）：日西古董、旧道具、复古家具、饰品、古着与杂货。10:00-16:00，免费入场。每月第2・第4个周日举办——下次为 7/12（周日）与 7/26（周日）。到访前请确认详情。",
      noteKo: "시부야 도심의 야외 골동품·빈티지 플리마켓(약 100부스): 일본·서양 골동품, 옛 도구, 빈티지 가구, 액세서리, 구제 의류·잡화. 10:00-16:00, 무료 입장. 매월 둘째·넷째 일요일 개최 — 다음 7/12(일)·7/26(일). 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: true,
      featured: true
    },
    {
      id: "u-2026-07-toji-kobo-ichi-kyoto",
      title: "Toji Kobo-ichi — Toji Temple monthly market",
      titleZh: "东寺 弘法市 — 东寺每月市集",
      titleKo: "도지 고보이치 — 도지 사원 월례 마켓",
      category: "flea",
      city: "kyoto",
      area: "Minami-ku / Toji",
      dateStart: "2026-07-21",
      dateEnd: "2026-07-21",
      venue: "Toji Temple (To-ji / Kyoo-gokoku-ji) grounds",
      sourceUrl: "https://ja.kyoto.travel/event/single.php?event_id=9231",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toji+Temple+Kyoto",
      note: "Kyoto's famous monthly temple market on the 21st (7:00-15:30): 1,000+ stalls with antiques, vintage kimono, old textiles, used clothing, tools and food. Free entry; cash recommended. Held rain or shine. Confirm details before visiting.",
      noteZh: "京都著名的每月21日寺庙市集（7:00-15:30）：1,000+ 摊位，古董、古着和服、旧织物、二手衣物、道具与美食。免费入场，建议带现金。风雨无阻。到访前请确认详情。",
      noteKo: "매월 21일 열리는 교토의 유명 사원 마켓(7:00-15:30): 1,000+ 부스, 골동품·빈티지 기모노·옛 직물·구제 의류·도구·먹거리. 무료 입장, 현금 권장. 우천에도 개최. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: true,
      featured: true
    },
    {
      id: "u-2026-07-kitano-tenmangu-tenjin-ichi",
      title: "Kitano Tenmangu Tenjin-ichi — monthly market",
      titleZh: "北野天满宫 天神市 — 每月市集",
      titleKo: "기타노 텐만구 텐진이치 — 월례 마켓",
      category: "flea",
      city: "kyoto",
      area: "Kamigyo-ku / Kitano",
      dateStart: "2026-07-25",
      dateEnd: "2026-07-25",
      venue: "Kitano Tenmangu Shrine grounds and approach",
      sourceUrl: "https://ja.kyoto.travel/event/single.php?event_id=9232",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kitano+Tenmangu+Kyoto",
      note: "Kyoto's other big monthly market on the 25th (early morning to around dusk): about 1,000 stalls; the east lane is strong on vintage kimono, used clothing, antiques and old tools. Free entry; cash recommended. Confirm details before visiting.",
      noteZh: "京都另一大每月25日市集（清晨至傍晚）：约1,000摊；东侧一带以古着和服、二手衣物、古董与旧道具见长。免费入场，建议带现金。到访前请确认详情。",
      noteKo: "매월 25일 열리는 교토의 또 다른 대형 마켓(이른 아침~해질녘): 약 1,000부스; 동쪽 길은 빈티지 기모노·구제 의류·골동품·옛 도구가 강세. 무료 입장, 현금 권장. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: true,
      featured: true
    },
    {
      id: "u-2026-07-klkl-popup-tenjin",
      title: "KLKL POP-UP — branded used clothing, Tenjin Chikagai",
      titleZh: "KLKL 快闪 — 品牌二手服饰，天神地下街",
      titleKo: "KLKL 팝업 — 브랜드 중고 의류, 텐진 지하상가",
      category: "popup",
      city: "fukuoka",
      area: "Tenjin",
      dateStart: "",
      dateEnd: "",
      venue: "Tenjin Chikagai (Tenjin underground mall), East 3rd Avenue No. 243",
      sourceUrl: "https://konohen.media/articles/klkl-popup-tenjin-chikagai-20260701/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tenjin+Chikagai+Fukuoka",
      note: "Branded used-clothing pop-up in the Tenjin underground mall with about 500 curated secondhand items; 10:00-20:00. Opened 7/1; run length not stated. Confirm current status before visiting.",
      noteZh: "天神地下街的品牌二手服饰快闪，约500件精选二手单品；10:00-20:00。7/1 开始；结束日期未标注。到访前请确认当前状态。",
      noteKo: "텐진 지하상가의 브랜드 중고 의류 팝업, 약 500점 셀렉트 중고; 10:00-20:00. 7/1 오픈; 종료일 미정. 방문 전 현재 상태를 확인하세요.",
      status: "active",
      verified: false,
      featured: false
    },
    {
      id: "u-area-osu-nagoya",
      title: "Area note: Osu vintage cluster, Nagoya",
      titleZh: "区域笔记：名古屋大须古着街区",
      titleKo: "지역 노트: 나고야 오스 빈티지 거리",
      category: "area_note",
      city: "nagoya",
      area: "Osu",
      dateStart: "",
      dateEnd: "",
      venue: "",
      sourceUrl: "https://jamtrading.jp/blogs/jam/4000043/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Osu+Shopping+District+Nagoya",
      note: "Osu (between Osu-Kannon and Kamimaezu) is central Japan's densest vintage/used-clothing district - 40+ secondhand and vintage shops walkable in a compact arcade loop, mixed with food and subculture. Many shops open from around noon. Verify individual shop hours before visiting.",
      noteZh: "大须（大须观音至上前津一带）是中部日本最密集的古着・二手街区——40+ 二手与古着店集中在紧凑的商店街环线中，混合美食与次文化。多数店铺约中午开门。到访前请确认各店营业时间。",
      noteKo: "오스(오스칸논~가미마에즈 사이)는 주부 지방에서 가장 밀도 높은 빈티지·구제 거리 — 40개 이상의 중고·빈티지 매장이 아케이드 루프에 밀집, 먹거리·서브컬처와 어우러짐. 다수 매장 정오쯤 오픈. 방문 전 각 매장 영업시간을 확인하세요.",
      status: "active",
      verified: false,
      featured: false
    },
    {
      id: "u-area-amerikamura-osaka",
      title: "Area note: Amerikamura vintage/streetwear cluster, Osaka",
      titleZh: "区域笔记：大阪美国村 古着/街头街区",
      titleKo: "지역 노트: 오사카 아메리카무라 빈티지/스트리트 거리",
      category: "area_note",
      city: "osaka",
      area: "Amerikamura / Shinsaibashi",
      dateStart: "",
      dateEnd: "",
      venue: "",
      sourceUrl: "https://osaka.f-street.org/",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amerikamura+Osaka",
      note: "Amerikamura (Amemura) in Minami/Shinsaibashi is Osaka's core street-fashion and vintage zone - many used-clothing, vintage, streetwear and select shops packed into a walkable grid near Shinsaibashi. Most shops open from around noon. Verify individual shop hours before visiting.",
      noteZh: "美国村（美村）位于南区/心斋桥，是大阪街头时尚与古着的核心区——大量二手、古着、街头与精选店密集分布于心斋桥附近的街区。多数店铺约中午开门。到访前请确认各店营业时间。",
      noteKo: "아메리카무라(아메무라)는 미나미/신사이바시의 오사카 스트리트 패션·빈티지 핵심 존 — 구제·빈티지·스트리트·편집숍이 신사이바시 인근 그리드에 밀집. 다수 매장 정오쯤 오픈. 방문 전 각 매장 영업시간을 확인하세요.",
      status: "active",
      verified: false,
      featured: false
    }
  ]
};
