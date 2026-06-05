export const siteConfig = {
  company: {
    name: "○○運輸株式会社",
    tagline: "長野から、確実に届ける",
    description:
      "長野県を拠点に一般貨物輸送を手がける運送会社です。安全・確実・丁寧をモットーに、大切な貨物を責任を持ってお届けします。",
    tel: "000-000-0000",
    fax: "000-000-0000",
    email: "info@example.co.jp",
    address: "長野県○○市○○町○-○-○",
    url: "https://example.co.jp",
    established: "○○○○年",
    representative: "○○ ○○",
    capital: "○○○○万円",
    employees: "○○名",
    vehicles: "15台（2t・4t・10t）",
    license: "一般貨物自動車運送事業 関東信越運輸局 許可番号○○○○",
  },
  nav: [
    { label: "サービス", href: "#services" },
    { label: "選ばれる理由", href: "#strengths" },
    { label: "ご利用の流れ", href: "#flow" },
    { label: "会社概要", href: "#company" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  stats: [
    { value: "20年以上", label: "業歴" },
    { value: "15台", label: "保有車両" },
    { value: "100社以上", label: "お取引実績" },
    { value: "99.8%", label: "定時配達率" },
  ],
  service: {
    title: "一般貨物輸送",
    lead: "工業製品・建築資材・食品・日用品など、あらゆる貨物の輸送に対応しています。長野県内全域はもちろん、関東・中部・北陸方面への幹線輸送も承ります。",
    details: [
      { label: "対応エリア", value: "長野県内全域 / 関東・中部・北陸方面" },
      { label: "対応品目", value: "工業製品・建築資材・食品・日用品 など" },
      { label: "対応車両", value: "2t・4t・10t（平ボディ・バン）" },
      { label: "営業時間", value: "月〜土 8:00〜18:00（緊急時はご相談）" },
      { label: "貨物保険", value: "加入済み（万一の場合も安心）" },
      { label: "許認可", value: "一般貨物自動車運送事業 許可取得" },
    ],
  },
  strengths: [
    {
      icon: "shield",
      title: "安全運行の徹底",
      description:
        "全車両にデジタコグラフを搭載し、速度・運転状況を常時管理。定期的なドライバー研修と毎日の点呼管理で、安全な輸送を実現しています。",
    },
    {
      icon: "clock",
      title: "時間厳守",
      description:
        "お約束した集荷・配達時刻を守ることを最優先に。万一の遅延が見込まれる場合は速やかにご連絡し、代替策をご提案します。",
    },
    {
      icon: "package",
      title: "丁寧な荷物管理",
      description:
        "積み込みから納品まで、貨物を傷つけない取り扱いを徹底。必要に応じた養生・固定で、大切な商品を安全にお届けします。",
    },
    {
      icon: "headset",
      title: "迅速な見積・対応",
      description:
        "お問い合わせから原則24時間以内に見積もりをご回答。急な配送依頼にも柔軟に対応できるよう、体制を整えています。",
    },
  ],
  flow: [
    {
      step: "01",
      title: "お問い合わせ",
      description: "電話またはメールにて、お気軽にご連絡ください。",
    },
    {
      step: "02",
      title: "ヒアリング",
      description: "品目・数量・配送先・希望日時などをお伺いします。",
    },
    {
      step: "03",
      title: "お見積もり",
      description: "内容確認後、24時間以内にお見積もりをご連絡します。",
    },
    {
      step: "04",
      title: "輸送・納品",
      description: "ご指定の日時に集荷し、確実にお届けします。",
    },
  ],
  companyInfo: [
    { label: "会社名", value: "○○運輸株式会社" },
    { label: "所在地", value: "長野県○○市○○町○-○-○" },
    { label: "代表者", value: "代表取締役 ○○ ○○" },
    { label: "設立", value: "○○○○年○月" },
    { label: "資本金", value: "○○○○万円" },
    { label: "従業員数", value: "○○名" },
    { label: "保有車両", value: "15台（2t・4t・10t）" },
    { label: "事業内容", value: "一般貨物自動車運送事業" },
    { label: "許可番号", value: "関東信越運輸局 ○○○○号" },
  ],
} as const;
