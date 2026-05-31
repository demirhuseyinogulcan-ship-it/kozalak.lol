export const siteUrl = "https://kozalak.lol";

export const locales = ["en", "tr", "ja"] as const;

export type Locale = (typeof locales)[number];

export const localePaths: Record<Locale, string> = {
  en: "/",
  tr: "/tr",
  ja: "/ja",
};

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/tr" || pathname.startsWith("/tr/")) return "tr";
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return "ja";
  return "en";
}

export function localizedHref(locale: Locale, hash = "") {
  const path = localePaths[locale];
  return hash ? `${path}${hash}` : path;
}

export const dictionaries = {
  en: {
    metadata: {
      title: "Kozalak AI | AI-Powered Pine Cone Device",
      description:
        "Kozalak AI is an AI-powered pine cone device with a sealed local intelligence base, voice interface, and physical room presence.",
      keywords: [
        "Kozalak AI",
        "AI-powered pine cone",
        "local AI device",
        "botanical AI interface",
        "physical AI object",
      ],
    },
    nav: {
      logoAlt: "Kozalak AI mark",
      toggle: "Toggle menu",
      items: [
        { name: "Product", hash: "#product" },
        { name: "Hardware", hash: "#hardware" },
        { name: "Launch", hash: "#launch" },
        { name: "Reserve", hash: "#pricing" },
      ],
    },
    hero: {
      eyebrow: "Local botanical intelligence device",
      title: "Intelligence, sealed in nature.",
      body: "Kozalak AI is a self-contained local intelligence object built around a natural pine cone interface, voice interaction, and a sealed titanium base.",
      primary: "Reserve device",
      secondary: "View hardware",
    },
    product: {
      eyebrow: "Product system",
      title: "A natural interface for synthetic thought.",
      body: "The pine cone is not decoration. It is the visible identity of an AI-powered pine cone device: quiet, sealed, and intentionally physical.",
      features: [
        {
          title: "Local AI Core",
          desc: "Inference is designed to run from the sealed base, keeping the device present, private, and independent from cloud latency.",
        },
        {
          title: "Voice Interface",
          desc: "A small microphone array and internal speaker turn the object into a direct room-scale conversational surface.",
        },
        {
          title: "Sealed Object Design",
          desc: "The acrylic dome, LED gasket, and titanium base create a protected product form for desk, home, and exhibition use.",
        },
      ],
      hardwareEyebrow: "Architecture",
      hardwareTitle: "Electronics stay in the base. The object stays silent.",
      hardwareBody:
        "The dome keeps the pine cone visually isolated while the base carries compute, audio, power, and thermal design. The product reads as one object, not a kit.",
    },
    gallery: {
      eyebrow: "Launch imagery",
      title: "Built to look inevitable.",
      images: {
        front: "Front",
        profile: "Profile",
        back: "Back",
        interface: "Interface",
      },
      launch: {
        eyebrow: "Launch presentation",
        title: "Introduced as a new category of local intelligence.",
        body: "The first Kozalak AI presentation frames the product as a physical AI object: private, self-contained, and designed to live in the room rather than inside a browser tab.",
      },
      fair: {
        eyebrow: "China High-Tech Fair",
        title: "Presented for desks, labs, showrooms, and premium interiors.",
        body: "The fair demo focuses on the sealed base, voice interface, local compute, and a botanical hardware category designed without visible screen dependency.",
        floor: "Fair floor",
        demo: "Product demo",
      },
    },
    stats: [
      { value: 100, suffix: "%", label: "local-first architecture" },
      { value: 0, suffix: "", label: "cloud dependency in object mode" },
      { value: 1, suffix: "", label: "sealed botanical interface" },
      { value: 24, suffix: "/7", label: "ambient presence" },
    ],
    pricing: {
      eyebrow: "Reservations",
      title: "Choose the object.",
      reserve: "Reserve",
      plans: [
        {
          name: "Seed",
          desc: "Single device reservation",
          price: "€499",
          features: [
            "Kozalak AI device",
            "Local voice mode",
            "USB-C base",
            "Launch firmware",
          ],
        },
        {
          name: "Dome",
          desc: "For studios and desks",
          price: "€999",
          featured: true,
          features: [
            "Everything in Seed",
            "Titanium finish",
            "Priority firmware access",
            "Display waveform interface",
            "Desk calibration profile",
          ],
        },
        {
          name: "Forest",
          desc: "Enterprise installations",
          price: "Custom",
          features: [
            "Multi-device deployment",
            "Private model configuration",
            "Exhibition hardware kit",
            "Dedicated installation support",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Details",
      title: "Questions, contained.",
      items: [
        {
          title: "Does Kozalak AI require cloud access?",
          content:
            "The product direction is local-first. Voice, response, and device state are designed to operate from the base hardware where possible.",
        },
        {
          title: "Is the pine cone replaceable?",
          content:
            "Yes. The botanical interface is physically isolated from the compute base and can be replaced without exposing the electronics.",
        },
        {
          title: "Is the device waterproof?",
          content:
            "The base is designed as splash-resistant, not submersible. Ports and acoustic openings are protected through placement and gasket design.",
        },
        {
          title: "What does it actually do?",
          content:
            "It provides a physical voice interface for local AI interaction, ambient status, and object-level presence in a room.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      line: "Local intelligence, naturally sealed.",
    },
  },
  tr: {
    metadata: {
      title: "Kozalak AI | Yapay Zeka Destekli Kozalak",
      description:
        "Kozalak AI, doğal kozalak arayüzü ve lokal işlem tabanıyla tasarlanan yapay zeka destekli kozalak cihazıdır.",
      keywords: [
        "Kozalak AI",
        "AI destekli kozalak",
        "yapay zeka destekli kozalak",
        "lokal yapay zeka cihazı",
        "akıllı kozalak",
      ],
    },
    nav: {
      logoAlt: "Kozalak AI işareti",
      toggle: "Menüyü aç veya kapat",
      items: [
        { name: "Ürün", hash: "#product" },
        { name: "Donanım", hash: "#hardware" },
        { name: "Lansman", hash: "#launch" },
        { name: "Rezervasyon", hash: "#pricing" },
      ],
    },
    hero: {
      eyebrow: "Lokal botanik zeka cihazı",
      title: "Yapay zeka destekli kozalak.",
      body: "Kozalak AI; doğal kozalak arayüzü, sesli etkileşim ve kapalı titanyum tabanı etrafında tasarlanmış bağımsız bir AI destekli kozalak cihazıdır.",
      primary: "Cihazı rezerve et",
      secondary: "Donanımı gör",
    },
    product: {
      eyebrow: "Ürün sistemi",
      title: "Sentetik düşünce için doğal bir arayüz.",
      body: "Kozalak dekor değildir. Yapay zeka destekli kozalak formunda, sessiz, kapalı ve bilinçli olarak fiziksel kalmak isteyen lokal bir zeka cihazının görünen kimliğidir.",
      features: [
        {
          title: "Lokal AI Çekirdeği",
          desc: "Çıkarım işlemleri kapalı tabanda çalışacak şekilde tasarlanır; cihazı mevcut, özel ve bulut gecikmesinden bağımsız tutar.",
        },
        {
          title: "Ses Arayüzü",
          desc: "Küçük mikrofon dizisi ve dahili hoparlör, objeyi oda ölçeğinde doğrudan konuşulabilir bir yüzeye dönüştürür.",
        },
        {
          title: "Kapalı Obje Tasarımı",
          desc: "Akrilik fanus, LED conta ve titanyum taban; masa, ev ve sergi kullanımı için korumalı bir ürün formu oluşturur.",
        },
      ],
      hardwareEyebrow: "Mimari",
      hardwareTitle: "Elektronik tabanda kalır. Obje sessiz kalır.",
      hardwareBody:
        "Fanus kozalağı görsel olarak izole eder; taban ise işlemci, ses, güç ve termal tasarımı taşır. Ürün bir kit gibi değil, tek bir obje gibi okunur.",
    },
    gallery: {
      eyebrow: "Lansman görselleri",
      title: "Kaçınılmaz görünmek için tasarlandı.",
      images: {
        front: "Ön",
        profile: "Profil",
        back: "Arka",
        interface: "Arayüz",
      },
      launch: {
        eyebrow: "Lansman sunumu",
        title: "Lokal zeka için yeni bir kategori olarak tanıtıldı.",
        body: "İlk Kozalak AI sunumu ürünü fiziksel bir AI objesi olarak konumlandırır: özel, bağımsız ve tarayıcı sekmesi yerine odanın içinde yaşamaya tasarlanmış.",
      },
      fair: {
        eyebrow: "Çin Yüksek Teknoloji Fuarı",
        title: "Masalar, laboratuvarlar, showroomlar ve premium iç mekanlar için sunuldu.",
        body: "Fuar demosu kapalı tabana, ses arayüzüne, lokal işlem gücüne ve ekrana bağımlı olmayan botanik donanım vaadine odaklanır.",
        floor: "Fuar alanı",
        demo: "Ürün demosu",
      },
    },
    stats: [
      { value: 100, suffix: "%", label: "lokal öncelikli mimari" },
      { value: 0, suffix: "", label: "obje modunda bulut bağımlılığı" },
      { value: 1, suffix: "", label: "kapalı botanik arayüz" },
      { value: 24, suffix: "/7", label: "ortamsal varlık" },
    ],
    pricing: {
      eyebrow: "Rezervasyonlar",
      title: "Objeyi seç.",
      reserve: "Rezerve et",
      plans: [
        {
          name: "Seed",
          desc: "Tek cihaz rezervasyonu",
          price: "€499",
          features: [
            "Kozalak AI cihazı",
            "Lokal ses modu",
            "USB-C taban",
            "Lansman yazılımı",
          ],
        },
        {
          name: "Dome",
          desc: "Stüdyolar ve masalar için",
          price: "€999",
          featured: true,
          features: [
            "Seed paketindeki her şey",
            "Titanyum kaplama",
            "Öncelikli yazılım erişimi",
            "Dalga formu ekran arayüzü",
            "Masa kalibrasyon profili",
          ],
        },
        {
          name: "Forest",
          desc: "Kurumsal kurulumlar",
          price: "Özel",
          features: [
            "Çoklu cihaz kurulumu",
            "Özel model yapılandırması",
            "Sergi donanım kiti",
            "Özel kurulum desteği",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Detaylar",
      title: "Sorular, kontrol altında.",
      items: [
        {
          title: "Kozalak AI bulut erişimi ister mi?",
          content:
            "Ürün lokal önceliklidir. Ses, yanıt ve cihaz durumu mümkün olduğunca taban donanımı üzerinden çalışacak şekilde tasarlanır.",
        },
        {
          title: "Kozalak değiştirilebilir mi?",
          content:
            "Evet. Botanik arayüz işlem tabanından fiziksel olarak ayrıdır ve elektronik aksam açığa çıkmadan değiştirilebilir.",
        },
        {
          title: "Cihaz su geçirmez mi?",
          content:
            "Taban sıçramalara dayanıklı olarak tasarlanır, suya batırılabilir değildir. Portlar ve akustik açıklıklar yerleşim ve conta tasarımıyla korunur.",
        },
        {
          title: "Tam olarak ne yapıyor?",
          content:
            "Lokal AI etkileşimi, ortam durumu ve oda içinde fiziksel bir zeka varlığı için sesli bir obje arayüzü sağlar.",
        },
      ],
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      line: "Lokal zeka, doğallıkla mühürlendi.",
    },
  },
  ja: {
    metadata: {
      title: "Kozalak AI | AI搭載松ぼっくりデバイス",
      description:
        "Kozalak AIは、自然の松ぼっくりインターフェースと密閉型ローカル処理ベースを備えたAI搭載松ぼっくりデバイスです。",
      keywords: [
        "Kozalak AI",
        "AI搭載松ぼっくり",
        "ローカルAIデバイス",
        "植物インターフェース",
        "物理AIオブジェクト",
      ],
    },
    nav: {
      logoAlt: "Kozalak AI マーク",
      toggle: "メニューを切り替える",
      items: [
        { name: "製品", hash: "#product" },
        { name: "ハードウェア", hash: "#hardware" },
        { name: "ローンチ", hash: "#launch" },
        { name: "予約", hash: "#pricing" },
      ],
    },
    hero: {
      eyebrow: "ローカル植物知能デバイス",
      title: "知能は、自然の中に封じられた。",
      body: "Kozalak AI は、自然の松ぼっくりインターフェース、音声操作、密閉チタンベースを中心に構成された自立型ローカル知能オブジェクトです。",
      primary: "デバイスを予約",
      secondary: "構造を見る",
    },
    product: {
      eyebrow: "製品システム",
      title: "合成思考のための自然なインターフェース。",
      body: "松ぼっくりは装飾ではありません。静かで、密閉され、意図的に物理的であるAI搭載松ぼっくりデバイスの可視化されたアイデンティティです。",
      features: [
        {
          title: "ローカルAIコア",
          desc: "推論は密閉ベース上で動作するよう設計され、クラウド遅延に依存しないプライベートな体験を保ちます。",
        },
        {
          title: "音声インターフェース",
          desc: "小型マイクアレイと内蔵スピーカーにより、オブジェクトは室内で直接会話できる存在になります。",
        },
        {
          title: "密閉オブジェクト設計",
          desc: "アクリルドーム、LEDガスケット、チタンベースが、デスク、家庭、展示向けの保護された製品形状を作ります。",
        },
      ],
      hardwareEyebrow: "アーキテクチャ",
      hardwareTitle: "電子部品はベースに。オブジェクトは静かに。",
      hardwareBody:
        "ドームは松ぼっくりを視覚的に隔離し、ベースは計算、音声、電源、熱設計を担います。製品はキットではなく、一つのオブジェクトとして見えます。",
    },
    gallery: {
      eyebrow: "ローンチイメージ",
      title: "必然に見えるように設計された。",
      images: {
        front: "正面",
        profile: "側面",
        back: "背面",
        interface: "インターフェース",
      },
      launch: {
        eyebrow: "ローンチプレゼンテーション",
        title: "ローカル知能の新しいカテゴリとして発表。",
        body: "最初の Kozalak AI プレゼンテーションでは、製品をブラウザの中ではなく部屋に存在する、プライベートで自立した物理AIオブジェクトとして提示します。",
      },
      fair: {
        eyebrow: "中国ハイテクフェア",
        title: "デスク、ラボ、ショールーム、上質な空間のために展示。",
        body: "フェアデモは、密閉ベース、音声インターフェース、ローカル計算、そして画面に依存しない植物的ハードウェアの約束に焦点を当てます。",
        floor: "展示フロア",
        demo: "製品デモ",
      },
    },
    stats: [
      { value: 100, suffix: "%", label: "ローカルファースト設計" },
      { value: 0, suffix: "", label: "オブジェクトモードでのクラウド依存" },
      { value: 1, suffix: "", label: "密閉型植物インターフェース" },
      { value: 24, suffix: "/7", label: "空間内での常時存在" },
    ],
    pricing: {
      eyebrow: "予約",
      title: "オブジェクトを選ぶ。",
      reserve: "予約する",
      plans: [
        {
          name: "Seed",
          desc: "単体デバイス予約",
          price: "€499",
          features: [
            "Kozalak AI デバイス",
            "ローカル音声モード",
            "USB-C ベース",
            "ローンチファームウェア",
          ],
        },
        {
          name: "Dome",
          desc: "スタジオとデスク向け",
          price: "€999",
          featured: true,
          features: [
            "Seed のすべて",
            "チタン仕上げ",
            "優先ファームウェアアクセス",
            "波形表示インターフェース",
            "デスク補正プロファイル",
          ],
        },
        {
          name: "Forest",
          desc: "企業向け設置",
          price: "Custom",
          features: [
            "複数デバイス展開",
            "プライベートモデル設定",
            "展示用ハードウェアキット",
            "専用設置サポート",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "詳細",
      title: "質問も、封じ込める。",
      items: [
        {
          title: "Kozalak AI にクラウド接続は必要ですか？",
          content:
            "製品方針はローカルファーストです。音声、応答、デバイス状態は可能な限りベース内のハードウェアで動作するよう設計されています。",
        },
        {
          title: "松ぼっくりは交換できますか？",
          content:
            "はい。植物インターフェースは計算ベースから物理的に分離されており、電子部品を露出せずに交換できます。",
        },
        {
          title: "防水ですか？",
          content:
            "ベースは生活防滴設計で、水没には対応しません。ポートと音響開口部は配置とガスケット設計で保護されます。",
        },
        {
          title: "実際には何をするのですか？",
          content:
            "ローカルAI操作、アンビエント状態表示、部屋の中の物理的な知能存在のための音声オブジェクトインターフェースです。",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      line: "ローカル知能を、自然に封じ込める。",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

export function absoluteLocaleUrl(locale: Locale) {
  return new URL(localePaths[locale], siteUrl).toString();
}
