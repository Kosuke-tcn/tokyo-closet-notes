/* ============================================================================
   Full Japan Fashion Map - 2026 Edition  ·  Japan Fashion Updates data
   ----------------------------------------------------------------------------
   Manually curated. NOT auto-fetched, NOT auto-published. Every entry is added
   by hand and is verify-first. The page never writes back to this file.

   How to add an update (weekly research flow):
     1. Copy one object in `updates` below and edit the fields.
     2. Use an ISO date (YYYY-MM-DD). Single-day events: dateStart === dateEnd.
     3. `city` must match a cityId in paid-map-data.js (tokyo/osaka/kyoto/nagoya/fukuoka)
        — or use "japan" for nationwide / online notes.
     4. zh / ko fields are OPTIONAL. If omitted, the English text is shown.
     5. status: "auto"     -> active/upcoming/expired computed from the dates
                "featured" -> pinned to the top (still respects dates for expiry)
                "hold"     -> never shown (draft / unverified / paused)
     6. verified: false shows a small "Unconfirmed" note (still requires manual add).

   category values (label/i18n handled in index.html):
     flea | popup | brand_event | vintage_fair | dept_event | new_shop | area_note | limited_info
   ============================================================================ */
window.TCN_PAID_UPDATES = {
  updated: "2026-06-28",
  updates: [
    {
      id: "u-2026-07-shimokita-flea",
      title: "Shimokitazawa Used Clothing Flea",
      titleZh: "下北泽古着跳蚤市集",
      titleKo: "시모키타자와 구제 플리마켓",
      category: "flea",
      city: "tokyo",
      area: "Shimokitazawa",
      dateStart: "2026-07-11",
      dateEnd: "2026-07-12",
      venue: "Kitazawa Hachiman shrine grounds",
      sourceUrl: "",
      note: "Weekend used-denim, vintage tee and military stalls. Cash recommended; goes quiet by late afternoon.",
      noteZh: "周末古着丹宁、复古 T 恤与军装摊位。建议带现金；傍晚后人较少。",
      noteKo: "주말 구제 데님·빈티지 티·밀리터리 노점. 현금 권장, 오후 늦게는 한산.",
      status: "featured",
      verified: true
    },
    {
      id: "u-2026-07-osaka-vintage-fair",
      title: "Osaka Vintage Collective Fair",
      titleZh: "大阪古着集合展",
      titleKo: "오사카 빈티지 컬렉티브 페어",
      category: "vintage_fair",
      city: "osaka",
      area: "Minami / Shinsaibashi",
      dateStart: "2026-07-04",
      dateEnd: "2026-07-06",
      venue: "Shinsaibashi event hall",
      sourceUrl: "",
      note: "Dealers from Kansai gather designer archive, Americana and 90s denim under one roof.",
      noteZh: "关西藏家齐聚，设计师 archive、美式复古与 90 年代丹宁一次看齐。",
      noteKo: "간사이 딜러들이 디자이너 아카이브·아메리카나·90s 데님을 한자리에.",
      status: "auto",
      verified: true
    },
    {
      id: "u-2026-06-popup-nakameguro",
      title: "Archive Designer Pop-up",
      titleZh: "设计师 Archive 快闪",
      titleKo: "아카이브 디자이너 팝업",
      category: "popup",
      city: "tokyo",
      area: "Nakameguro",
      dateStart: "2026-06-25",
      dateEnd: "2026-07-02",
      venue: "Nakameguro backstreet space",
      sourceUrl: "",
      note: "Short-run pop-up of late-90s/00s Japanese designer pieces. Limited stock, rotates fast.",
      noteZh: "90 年代末至 00 年代日本设计师单品短期快闪。库存有限，更新快。",
      noteKo: "90s 말~00s 일본 디자이너 피스 단기 팝업. 재고 한정, 회전 빠름.",
      status: "auto",
      verified: true
    },
    {
      id: "u-2026-07-dept-isetan",
      title: "Isetan Shinjuku Craft & Denim Event",
      titleZh: "伊势丹新宿 工艺与丹宁企划",
      titleKo: "이세탄 신주쿠 크래프트·데님 행사",
      category: "dept_event",
      city: "tokyo",
      area: "Shinjuku",
      dateStart: "2026-07-16",
      dateEnd: "2026-07-22",
      venue: "Isetan Shinjuku, men's floor",
      sourceUrl: "",
      note: "Made-in-Japan denim and craft brands take over a pop-up floor for one week.",
      noteZh: "日本制丹宁与工艺品牌进驻快闪楼层，为期一周。",
      noteKo: "메이드 인 재팬 데님·크래프트 브랜드가 일주일간 팝업 층을 채웁니다.",
      status: "auto",
      verified: false
    },
    {
      id: "u-2026-07-newshop-kyoto",
      title: "New select shop opened in Kyoto",
      titleZh: "京都新开精选店",
      titleKo: "교토 신규 편집숍 오픈",
      category: "new_shop",
      city: "kyoto",
      area: "Sanjo / Teramachi",
      dateStart: "2026-07-01",
      dateEnd: "2026-09-30",
      venue: "Teramachi arcade",
      sourceUrl: "",
      note: "A new Kyoto select shop mixing local makers with European archive. Candidate for a future map update — confirm before a special trip.",
      noteZh: "京都新精选店，融合本地制作与欧洲 archive。将考虑收入地图——专程前往请先确认。",
      noteKo: "현지 메이커와 유럽 아카이브를 섞은 교토 신규 편집숍. 향후 지도 반영 후보 — 일부러 방문 전 확인.",
      status: "auto",
      verified: false
    },
    {
      id: "u-2026-summer-area-ura-harajuku",
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
      note: "Many small Ura-Harajuku shops open from 12:00 and close earlier in summer. Start mid-afternoon, keep evenings for bigger stores.",
      noteZh: "里原宿许多小店夏季 12:00 才开、傍晚提早打烊。建议午后开始，晚上留给大型店铺。",
      noteKo: "우라하라 소규모 매장은 여름철 12:00 오픈·이른 마감이 많음. 오후 중반 시작, 저녁은 대형 매장 위주로.",
      status: "auto",
      verified: true
    },
    {
      id: "u-2026-06-fukuoka-popup-expired",
      title: "Fukuoka Weekend Vintage Pop-up",
      titleZh: "福冈周末古着快闪",
      titleKo: "후쿠오카 주말 빈티지 팝업",
      category: "popup",
      city: "fukuoka",
      area: "Tenjin / Daimyo",
      dateStart: "2026-06-06",
      dateEnd: "2026-06-08",
      venue: "Daimyo pop-up space",
      sourceUrl: "",
      note: "Past event kept for reference — Daimyo area regularly runs weekend vintage pop-ups; watch for the next one.",
      noteZh: "已结束，留作参考——大名地区常办周末古着快闪，可留意下一场。",
      noteKo: "종료된 행사(참고용) — 다이묘 지역은 주말 빈티지 팝업이 잦으니 다음 회차를 주목.",
      status: "auto",
      verified: true
    },
    {
      id: "u-draft-nagoya-brand-event",
      title: "Nagoya brand event (draft)",
      category: "brand_event",
      city: "nagoya",
      area: "Sakae",
      dateStart: "2026-08-01",
      dateEnd: "2026-08-03",
      venue: "",
      sourceUrl: "",
      note: "Draft entry, not yet confirmed — hidden until verified.",
      status: "hold",
      verified: false
    }
  ]
};
