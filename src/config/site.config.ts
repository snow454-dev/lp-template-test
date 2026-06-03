export const siteConfig = {
  company: {
    name: "里の台所",
    nameEn: "SATO NO DAIDOKORO",
    tagline: "旬の素材、誠実な味。",
    description:
      "地元の農家と漁師が丹精込めた素材を産地直送でお届けする食料品店。無添加・無農薬にこだわり、旬の美味しさをそのままに食卓へ。",
    url: "https://sato-no-daidokoro.jp",
    email: "info@sato-no-daidokoro.jp",
    tel: "03-1234-5678",
    address: {
      zip: "150-0001",
      line1: "東京都渋谷区神宮前1-2-3",
      line2: "ヒルズビル 1F",
    },
    hours: {
      weekday: "10:00 – 19:00",
      weekend: "10:00 – 18:00",
      closed: "毎週火曜日",
    },
  },
  nav: [
    { label: "商品一覧", href: "#products" },
    { label: "こだわり", href: "#kodawari" },
    { label: "アクセス", href: "#access" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  hero: {
    eyebrow: "FRESH · LOCAL · NATURAL",
    title: "大地の恵みを、\n食卓へ。",
    lead: "地元の農家・漁師と直接つながり、旬の素材だけを丁寧にセレクト。添加物に頼らない、本物の味をお届けします。",
    cta: "商品を見る",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  },
  products: [
    {
      id: "1",
      name: "旬の野菜セット",
      description: "地元農家から届く週替わり野菜の詰め合わせ",
      price: "¥1,980",
      badge: "週替わり",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    },
    {
      id: "2",
      name: "こだわり地酒",
      description: "国内蔵元直送、季節限定の純米吟醸",
      price: "¥2,800",
      badge: "限定",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      id: "3",
      name: "手作り味噌",
      description: "麦麹と大豆を1年間熟成させた無添加味噌",
      price: "¥980",
      badge: "無添加",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    },
    {
      id: "4",
      name: "季節のフルーツ",
      description: "農薬不使用・有機栽培の旬のフルーツ",
      price: "¥1,280",
      badge: "有機栽培",
      image:
        "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80",
    },
    {
      id: "5",
      name: "自家製ぬか漬け",
      description: "創業当初から引き継ぐぬか床で漬けた本格漬物",
      price: "¥680",
      badge: "定番",
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    },
    {
      id: "6",
      name: "天然だしパック",
      description: "羅臼昆布と焼津鰹節のブレンド、本格だし",
      price: "¥1,480",
      badge: "人気No.1",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    },
  ],
  kodawari: [
    {
      label: "PRODUCER",
      title: "産地直送",
      body: "全商品を生産者と直接契約。流通コストを排除し、鮮度そのままでお届けします。農家の顔が見える食材だけを扱います。",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    },
    {
      label: "NO ADDITIVES",
      title: "無添加・無農薬",
      body: "保存料・着色料・化学農薬は一切使用しません。素材本来の味と栄養をそのままに。家族全員が安心して食べられます。",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
    {
      label: "SEASONAL",
      title: "旬の食材",
      body: "その季節に最も栄養価が高く、最も美味しい素材だけをセレクト。旬を食べることが、体に最も優しい食事です。",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
    },
  ],
  news: [
    {
      date: "2026.05.28",
      category: "新商品",
      title: "初夏の限定セット「青梅と新玉ねぎ」が入荷しました",
    },
    {
      date: "2026.05.15",
      category: "お知らせ",
      title: "6月の定休日変更のご案内（6月10日は営業いたします）",
    },
    {
      date: "2026.05.01",
      category: "イベント",
      title: "産地見学ツアー参加者募集中 ─ 千葉・九十九里の農場へ",
    },
    {
      date: "2026.04.20",
      category: "新商品",
      title: "春の新茶「さえみどり」入荷。静岡茶農家から直送",
    },
    {
      date: "2026.04.05",
      category: "お知らせ",
      title: "ゴールデンウィーク期間中の営業時間について",
    },
  ],
  footer: {
    nav: [
      { label: "商品一覧", href: "#products" },
      { label: "こだわり", href: "#kodawari" },
      { label: "お知らせ", href: "#news" },
      { label: "アクセス", href: "#access" },
    ],
    legal: [
      { label: "プライバシーポリシー", href: "/privacy" },
      { label: "特定商取引法に基づく表記", href: "/tokusho" },
    ],
  },
} as const;
