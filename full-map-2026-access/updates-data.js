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

   WEEKLY FLOW: research -> confirm the official source URL -> add an object here
                with verified:true (or verified:false + a confirm note) -> deploy
                index.html + this file. Expired items fall to "Past" automatically.
   ============================================================================ */
window.TCN_PAID_UPDATES = {
  updated: "2026-06-28",
  updates: [
    {
      id: "u-2026-07-shimokita-flea",
      title: "Shimokitazawa Used Clothing Flea (sample)",
      titleZh: "下北泽古着跳蚤市集（示例）",
      titleKo: "시모키타자와 구제 플리마켓 (샘플)",
      category: "flea",
      city: "tokyo",
      area: "Shimokitazawa",
      dateStart: "2026-07-11",
      dateEnd: "2026-07-12",
      venue: "Shimokitazawa area",
      // sourceUrl: add the official event / organizer URL here after you confirm it.
      sourceUrl: "",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa%20Station%2C%20Tokyo",
      note: "Sample entry. Weekend used-denim and vintage stalls; cash recommended. Confirm details before visiting.",
      noteZh: "示例条目。周末古着丹宁与复古摊位；建议带现金。到访前请确认详情。",
      noteKo: "샘플 항목. 주말 구제 데님·빈티지 노점, 현금 권장. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: true
    },
    {
      id: "u-2026-07-osaka-vintage-fair",
      title: "Osaka Vintage Fair (sample)",
      titleZh: "大阪古着展（示例）",
      titleKo: "오사카 빈티지 페어 (샘플)",
      category: "vintage_fair",
      city: "osaka",
      area: "Minami / Shinsaibashi",
      dateStart: "2026-07-04",
      dateEnd: "2026-07-06",
      venue: "Shinsaibashi area",
      sourceUrl: "",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shinsaibashi%2C%20Osaka",
      note: "Sample entry. Kansai dealers, designer archive and 90s denim. Confirm dates and the official source before visiting.",
      noteZh: "示例条目。关西藏家、设计师 archive 与 90 年代丹宁。到访前请确认日期与官方信息。",
      noteKo: "샘플 항목. 간사이 딜러·디자이너 아카이브·90s 데님. 방문 전 날짜와 공식 정보를 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-06-nakameguro-popup",
      title: "Archive Designer Pop-up (sample)",
      titleZh: "设计师 Archive 快闪（示例）",
      titleKo: "아카이브 디자이너 팝업 (샘플)",
      category: "popup",
      city: "tokyo",
      area: "Nakameguro",
      dateStart: "2026-06-25",
      dateEnd: "2026-07-02",
      venue: "Nakameguro",
      sourceUrl: "",
      mapsUrl: "",
      note: "Sample entry. Short-run pop-up of late-90s/00s Japanese designer pieces. Confirm details before visiting.",
      noteZh: "示例条目。90 年代末至 00 年代日本设计师单品短期快闪。到访前请确认详情。",
      noteKo: "샘플 항목. 90s 말~00s 일본 디자이너 단기 팝업. 방문 전 세부사항을 확인하세요.",
      status: "active",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-07-isetan-shinjuku-event",
      title: "Isetan Shinjuku craft & denim event (verify)",
      titleZh: "伊势丹新宿 工艺与丹宁企划（待核实）",
      titleKo: "이세탄 신주쿠 크래프트·데님 행사 (확인 필요)",
      category: "dept_event",
      city: "tokyo",
      area: "Shinjuku",
      dateStart: "2026-07-16",
      dateEnd: "2026-07-22",
      venue: "Isetan Shinjuku",
      // Example of an official source: the store's official site. Confirm the exact
      // event page/dates before relying on it.
      sourceUrl: "https://www.isetan.mistore.jp/shinjuku.html",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Isetan%20Shinjuku",
      note: "Sample entry. Example of how to attach an official source + Google Maps link. Confirm details before visiting.",
      noteZh: "示例条目。展示如何附上官方信息与 Google 地图链接。到访前请确认详情。",
      noteKo: "샘플 항목. 공식 정보와 Google 지도 링크를 붙이는 예시. 방문 전 세부사항을 확인하세요.",
      status: "upcoming",
      verified: false,
      featured: false
    },
    {
      id: "u-2026-summer-ura-harajuku-note",
      title: "Area note: Ura-Harajuku in summer",
      titleZh: "区域笔记：夏日里原宿",
      titleKo: "지역 노트: 여름의 우라하라주쿠",
      category: "area_note",
      city: "tokyo",
      area: "Harajuku",
      dateStart: "2026-06-01",
      dateEnd: "2026-08-31",
      venue: "",
      sourceUrl: "",
      mapsUrl: "",
      note: "Many small Ura-Harajuku shops open from around 12:00 and close earlier in summer. Start mid-afternoon; keep evenings for larger stores.",
      noteZh: "里原宿许多小店夏季约 12:00 开门、傍晚提早打烊。建议午后开始，晚上留给大型店铺。",
      noteKo: "우라하라 소규모 매장은 여름철 약 12:00 오픈·이른 마감이 많음. 오후 중반 시작, 저녁은 대형 매장 위주로.",
      status: "active",
      verified: true,
      featured: false
    },
    {
      id: "u-2026-06-fukuoka-popup-past",
      title: "Fukuoka weekend vintage pop-up (past, sample)",
      titleZh: "福冈周末古着快闪（已结束·示例）",
      titleKo: "후쿠오카 주말 빈티지 팝업 (종료·샘플)",
      category: "popup",
      city: "fukuoka",
      area: "Tenjin / Daimyo",
      dateStart: "2026-06-06",
      dateEnd: "2026-06-08",
      venue: "Daimyo area",
      sourceUrl: "",
      mapsUrl: "",
      note: "Sample past entry (auto-moves to 'Past'). Daimyo runs weekend vintage pop-ups; watch for the next one.",
      noteZh: "示例往期条目（自动移入“往期”）。大名常办周末古着快闪，可留意下一场。",
      noteKo: "샘플 지난 항목('지난'으로 자동 이동). 다이묘는 주말 빈티지 팝업이 잦으니 다음 회차 주목.",
      status: "expired",
      verified: false,
      featured: false
    },
    {
      id: "u-draft-nagoya-brand-event",
      title: "Nagoya brand event (draft — hidden)",
      category: "brand_event",
      city: "nagoya",
      area: "Sakae",
      dateStart: "2026-08-01",
      dateEnd: "2026-08-03",
      venue: "",
      sourceUrl: "",
      mapsUrl: "",
      note: "Draft, not yet confirmed — status:\"hold\" keeps it hidden until verified. Confirm the official source before publishing.",
      status: "hold",
      verified: false,
      featured: false
    }
  ]
};
