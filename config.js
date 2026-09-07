/**
 * ============================================================
 * NUSANTARA MOBILE STUDIO — CONFIG TERPUSAT
 * ============================================================
 * Dua bahasa: Indonesia (id) dan English (en)
 * Untuk update konten, cukup edit file ini saja.
 *
 * Cara update teks:
 *   Setiap field yang berisi teks punya { id: "...", en: "..." }
 *   Edit keduanya agar tetap sinkron.
 *
 * Cara update data (angka, URL, status app):
 *   Data non-teks cukup satu nilai, tidak perlu duplikat.
 * ============================================================
 */

const CONFIG = {

  /* ----------------------------------------------------------
   * IDENTITAS STUDIO (tidak diterjemahkan)
   * ---------------------------------------------------------- */
  studio: {
    name: "Nusantara Mobile Studio",
    since: "2024",
    domain: "holisahmad.github.io/nusantaramobilestudio",
    baseUrl: "https://holisahmad.github.io/nusantaramobilestudio/",
  },

  /* ----------------------------------------------------------
   * KONTAK (tidak diterjemahkan)
   * ---------------------------------------------------------- */
  contact: {
    email: "lencakstudio@gmail.com",
    whatsapp: "6285655268945",
    whatsappMsg: {
      id: "Halo Nusantara Mobile Studio, saya ingin berdiskusi tentang:",
      en: "Hi Nusantara Mobile Studio, I'd like to discuss:",
    },
  },

  /* ----------------------------------------------------------
   * SEO & SOCIAL META (per bahasa)
   * ---------------------------------------------------------- */
  seo: {
    title: {
      id: "Nusantara Mobile Studio — Aplikasi Android Monetisasi Iklan",
      en: "Nusantara Mobile Studio — Ad-Monetized Android Apps",
    },
    description: {
      id: "Studio pengembang aplikasi Android Indonesia. 100+ app dalam pipeline, 4 akun developer, monetisasi AdMob. Games, Tools, Health, Finance, Education & Lifestyle.",
      en: "Indonesian Android app development studio. 100+ apps in pipeline, 4 developer accounts, AdMob monetization. Games, Tools, Health, Finance, Education & Lifestyle.",
    },
    keywords: {
      id: "aplikasi android indonesia, developer android, admob monetisasi, play store indonesia, nusantara mobile studio",
      en: "android app developer indonesia, admob monetization, play store apps, nusantara mobile studio, android apps",
    },
    ogImage: "/og-image.png",
    twitterHandle: "",
  },

  /* ----------------------------------------------------------
   * ANALYTICS
   * ---------------------------------------------------------- */
  analytics: {
    gaId: "G-G6941KDQ7L",
  },

  /* ----------------------------------------------------------
   * HERO SECTION
   * ---------------------------------------------------------- */
  hero: {
    eyebrow: {
      id: "Studio pengembang aplikasi Android · sejak 2024",
      en: "Android app development studio · since 2024",
    },
    headline: {
      id: "Kami bangun <span class=\"highlight\">ratusan pulau aplikasi</span> di lautan Play Store.",
      en: "We build <span class=\"highlight\">hundreds of app islands</span> across the Play Store.",
    },
    lead: {
      id: "Nusantara Mobile Studio merancang, membangun, dan menerbitkan aplikasi Android ber-monetisasi iklan — dari game kasual sampai tools harian — lewat 4 lini akun developer yang terorganisir rapi dan siap scale.",
      en: "Nusantara Mobile Studio designs, builds, and publishes ad-monetized Android apps — from casual games to daily tools — through 4 organized developer accounts built to scale.",
    },
    cta: {
      primary: {
        label: { id: "Lihat Portofolio ↓", en: "View Portfolio ↓" },
        href: "#portfolio",
      },
      secondary: {
        label: { id: "Diskusi Proyek Gratis", en: "Free Project Discussion" },
        href: "#kontak",
      },
    },
    stats: [
      { value: 100, suffix: "+", label: { id: "ide app dalam pipeline", en: "app ideas in pipeline" } },
      { value: 4, suffix: "", label: { id: "akun developer aktif", en: "active developer accounts" } },
      { value: 5, suffix: "", label: { id: "target pasar geografis", en: "geographic target markets" } },
    ],
  },

  /* ----------------------------------------------------------
   * STATS BAND
   * ---------------------------------------------------------- */
  statsband: [
    { count: 100, label: { id: "Ide aplikasi dalam pipeline riset & produksi", en: "App ideas in research & production pipeline" } },
    { count: 4, label: { id: "Akun developer terorganisir per fokus kategori", en: "Developer accounts organized by category focus" } },
    { count: 10, label: { id: "Kategori aplikasi — dari game sampai finance", en: "App categories — from games to finance" } },
    { count: 5, label: { id: "Target pasar: Indonesia, Global, US, Australia, Malaysia", en: "Target markets: Indonesia, Global, US, Australia, Malaysia" } },
  ],

  /* ----------------------------------------------------------
   * PORTFOLIO — pengaturan tampilan
   * ---------------------------------------------------------- */
  portfolio: {
    perPage: 8,
    heading: {
      id: "Beberapa pulau yang sedang kami bangun",
      en: "Some of the islands we're building",
    },
    subtext: {
      id: "App yang sudah live memiliki badge hijau dan tautan langsung ke Play Store. Status lainnya masih dalam pipeline aktif.",
      en: "Live apps have a green badge with a direct Play Store link. Other statuses are still in the active pipeline.",
    },
    filterLabels: {
      all: { id: "Semua", en: "All" },
      live: { id: "✓ Live", en: "✓ Live" },
      soon: { id: "Segera Rilis", en: "Coming Soon" },
      dev: { id: "Dalam Development", en: "In Development" },
    },
    counterText: {
      showing: { id: "Menampilkan", en: "Showing" },
      of: { id: "dari", en: "of" },
      apps: { id: "app", en: "apps" },
      liveApps: { id: "app live", en: "live apps" },
      soonApps: { id: "app segera rilis", en: "coming soon apps" },
      devApps: { id: "app dalam development", en: "apps in development" },
      noneYet: { id: "Belum ada app yang live — menampilkan", en: "No live apps yet — showing" },
      pipelineText: { id: "dari pipeline aktif", en: "from active pipeline" },
    },
    loadMore: {
      id: "Tampilkan lebih banyak",
      en: "Show more",
    },
    playStoreLink: {
      id: "Buka di Play Store →",
      en: "Open on Play Store →",
    },
  },

  /* ----------------------------------------------------------
   * PORTFOLIO APPS
   * ----------------------------------------------------------
   * name & category bisa bilingual jika perlu, tapi karena
   * nama app biasanya sama di semua bahasa, cukup satu string.
   * market tetap satu string (nama negara universal).
   * ---------------------------------------------------------- */
    apps: [
    {
      id: "badminton",
      name: "Badminton Smash Indonesia",
      category: "Games",
      market: "Indonesia",
      emoji: "🏸",
      gradient: "linear-gradient(135deg,#FFB627,#FF5D73)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/badminton.html",
      tags: ["AdMob", "Offline-First"],
    },
    {
      id: "ojek_racer",
      name: "Ojek Racer Indonesia",
      category: "Games",
      market: "Indonesia",
      emoji: "🛵",
      gradient: "linear-gradient(135deg,#FF5D73,#FFB627)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/ojek-racer.html",
      tags: ["AdMob", "3D Game"],
    },
    {
      id: "simulasi_kpr",
      name: "Simulasi KPR & Finansial",
      category: "Finance",
      market: "Indonesia",
      emoji: "🏠",
      gradient: "linear-gradient(135deg,#2563EB,#1D4ED8)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/simulasi-kpr.html",
      tags: ["Finance", "AdMob"],
    },
    {
      id: "hafalan_quran",
      name: "Hafalan Quran Tracker",
      category: "Education",
      market: "Indonesia",
      emoji: "📖",
      gradient: "linear-gradient(135deg,#10B981,#059669)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/hafalan-quran.html",
      tags: ["Education", "Offline"],
    },
    {
      id: "batiknusantara",
      name: "Batik Nusantara Guide",
      category: "Lifestyle",
      market: "Indonesia",
      emoji: "🎨",
      gradient: "linear-gradient(135deg,#F59E0B,#D97706)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/batik-nusantara.html",
      tags: ["Culture", "AdMob"],
    },
    {
      id: "waroeng_ayam",
      name: "Waroeng Ayam Tycoon",
      category: "Games",
      market: "Indonesia",
      emoji: "🍗",
      gradient: "linear-gradient(135deg,#EF4444,#DC2626)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/waroeng-ayam.html",
      tags: ["Tycoon Game", "AdMob"],
    },
    {
      id: "wordconnect",
      name: "Word Connect Nusantara",
      category: "Games",
      market: "Indonesia",
      emoji: "🔤",
      gradient: "linear-gradient(135deg,#8B5CF6,#7C3AED)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/word-connect.html",
      tags: ["Puzzle", "AdMob"],
    },
    {
      id: "app_compunding",
      name: "Buku Tabungan Bunga Majemuk",
      category: "Finance",
      market: "Indonesia",
      emoji: "📈",
      gradient: "linear-gradient(135deg,#2563EB,#3B82F6)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/app-compounding.html",
      tags: ["Finance", "Capacitor"],
    },
    {
      id: "hitungyuk",
      name: "HitungYuk - Kalkulator Belanja",
      category: "Finance",
      market: "Indonesia",
      emoji: "🛒",
      gradient: "linear-gradient(135deg,#059669,#10B981)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/hitungyuk.html",
      tags: ["Shopping", "AdMob"],
    },
    {
      id: "kalkulator_hpl_anak",
      name: "Kalkulator Kehamilan & Anak",
      category: "Health & Fitness",
      market: "Indonesia",
      emoji: "👶",
      gradient: "linear-gradient(135deg,#EC4899,#DB2777)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/kalkulator-kehamilan-anak.html",
      tags: ["Parenting", "AdMob"],
    },
    {
      id: "jadwalsholat",
      name: "Jadwal Sholat & Kiblat",
      category: "Lifestyle",
      market: "Indonesia",
      emoji: "🕌",
      gradient: "linear-gradient(135deg,#059669,#047857)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/jadwal-sholat-kiblat.html",
      tags: ["Islamic", "AdMob"],
    },
    {
      id: "kalkulator_zakatwaris",
      name: "Kalkulator Zakat & Waris",
      category: "Finance",
      market: "Indonesia",
      emoji: "⚖️",
      gradient: "linear-gradient(135deg,#D97706,#B45309)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/kalkulator-zakat-waris.html",
      tags: ["Islamic Finance"],
    },
    {
      id: "cakram",
      name: "Lempar Cakram Nusantara",
      category: "Games",
      market: "Indonesia",
      emoji: "🥏",
      gradient: "linear-gradient(135deg,#F97316,#EA580C)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/lempar-cakram-nusantara.html",
      tags: ["Sports Game", "AdMob"],
    },
    {
      id: "kalkulatortoken",
      name: "Kalkulator Listrik & Token PLN",
      category: "Tools & Utilities",
      market: "Indonesia",
      emoji: "⚡",
      gradient: "linear-gradient(135deg,#EAB308,#CA8A04)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/kalkulator-listrik.html",
      tags: ["Utility", "PLN"],
    },
    {
      id: "kalender_jawa",
      name: "Kalender Jawa Lengkap",
      category: "Lifestyle",
      market: "Indonesia",
      emoji: "📅",
      gradient: "linear-gradient(135deg,#84CC16,#65A30D)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/kalender-jawa.html",
      tags: ["Culture", "Calendar"],
    },
    {
      id: "kalkulatoremas",
      name: "Harga Emas & Kalkulator",
      category: "Finance",
      market: "Indonesia",
      emoji: "🥇",
      gradient: "linear-gradient(135deg,#EAB308,#D97706)",
      iconDark: true,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/kalkulator-emas.html",
      tags: ["Gold Investment"],
    },
    {
      id: "scancode_device",
      name: "ScanCode Device Profile",
      category: "Tools & Utilities",
      market: "Global",
      emoji: "📱",
      gradient: "linear-gradient(135deg,#06B6D4,#0891B2)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/scancode-device.html",
      tags: ["Device Info", "Global"],
    },
    {
      id: "konvertersatuan",
      name: "Konverter Satuan Masak",
      category: "Tools & Utilities",
      market: "Indonesia",
      emoji: "🍳",
      gradient: "linear-gradient(135deg,#F43F5E,#E11D48)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/konverter-satuan.html",
      tags: ["Culinary", "Converter"],
    },
    {
      id: "jadwalsholatlengkap",
      name: "Jadwal Sholat Lengkap",
      category: "Lifestyle",
      market: "Indonesia",
      emoji: "🌙",
      gradient: "linear-gradient(135deg,#14B8A6,#0D9488)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/jadwal-sholat-lengkap.html",
      tags: ["Islamic", "Prayer"],
    },
    {
      id: "LamaranKerja",
      name: "Generate Lamaran Kerja",
      category: "Productivity",
      market: "Indonesia",
      emoji: "📄",
      gradient: "linear-gradient(135deg,#3B82F6,#2563EB)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/generate-lamaran-kerja.html",
      tags: ["Career", "Generator"],
    },
    {
      id: "OfficeDocScanner",
      name: "ScanSign - Document Scanner",
      category: "Productivity",
      market: "Global",
      emoji: "🔍",
      gradient: "linear-gradient(135deg,#6366F1,#4F46E5)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/scansign-document-scanner.html",
      tags: ["Scanner", "PDF"],
    },
    {
      id: "NusantaraMobileStudio",
      name: "Nusantara Mobile Studio Showcase",
      category: "Productivity",
      market: "Indonesia",
      emoji: "🇮🇩",
      gradient: "linear-gradient(135deg,#0F172A,#1E293B)",
      iconDark: false,
      status: "live",
      playStoreUrl: "",
      privacyUrl: "https://holisahmad.github.io/privacy-policy/nusantara-mobile-studio.html",
      tags: ["Portfolio App"],
    },
  ],

  /* ----------------------------------------------------------
   * AKUN / KATEGORI DEVELOPER
   * ---------------------------------------------------------- */
  accounts: [
    {
      num: { id: "KATEGORI 01", en: "CATEGORY 01" },
      glow: "#FF5D73",
      title: "Games",
      desc: {
        id: "Semua aplikasi kategori game — dibangun untuk saling cross-promo dan menaikkan retensi antar judul.",
        en: "All gaming apps — built for cross-promotion and boosting retention across titles.",
      },
      count: 17,
      unit: { id: "app dalam pipeline", en: "apps in pipeline" },
    },
    {
      num: { id: "KATEGORI 02", en: "CATEGORY 02" },
      glow: "#8257FF",
      title: "Tools & Utilities",
      desc: {
        id: "Tools, Business, Music & Audio, Entertainment — install base besar dengan maintenance yang ringan.",
        en: "Tools, Business, Music & Audio, Entertainment — large install base with lightweight maintenance.",
      },
      count: 19,
      unit: { id: "app dalam pipeline", en: "apps in pipeline" },
    },
    {
      num: { id: "KATEGORI 03", en: "CATEGORY 03" },
      glow: "#00D9A3",
      title: "Health, Finance & Lifestyle",
      desc: {
        id: "Menyasar audiens dewasa dan affluent — CPM iklan tertinggi di antara seluruh kategori kami.",
        en: "Targeting adult and affluent audiences — highest ad CPM across all our categories.",
      },
      count: 41,
      unit: { id: "app dalam pipeline", en: "apps in pipeline" },
    },
    {
      num: { id: "KATEGORI 04", en: "CATEGORY 04" },
      glow: "#FFB627",
      title: "Education & Productivity",
      desc: {
        id: "Audiens pelajar & profesional — potensi cross-sell tinggi antar app edukasi dan produktivitas.",
        en: "Students & professionals audience — high cross-sell potential across education and productivity apps.",
      },
      count: 23,
      unit: { id: "app dalam pipeline", en: "apps in pipeline" },
    },
  ],

  /* Teks heading section akun */
  accountsSection: {
    eyebrow: { id: "Struktur Tim", en: "Team Structure" },
    heading: { id: "Diorganisir dalam 4 akun developer", en: "Organized across 4 developer accounts" },
    subtext: {
      id: "Tiap akun fokus pada satu klaster kategori — memudahkan cross-promotion antar app dan menjaga kualitas maintenance tetap konsisten.",
      en: "Each account focuses on one category cluster — making cross-promotion easier and keeping maintenance quality consistent.",
    },
  },

  /* ----------------------------------------------------------
   * PROCESS STEPS
   * ---------------------------------------------------------- */
  processSection: {
    eyebrow: { id: "Cara Kerja", en: "How It Works" },
    heading: { id: "Dari ide sampai live di Play Store", en: "From idea to live on the Play Store" },
    subtext: {
      id: "Setiap aplikasi melewati 5 tahap yang sama — kami lacak progresnya sampai ke level individual app di tracker internal kami.",
      en: "Every app goes through the same 5 stages — we track progress down to the individual app level in our internal tracker.",
    },
  },
  steps: [
    {
      num: "01", active: true,
      title: { id: "Riset & Perencanaan", en: "Research & Planning" },
      desc: {
        id: "Riset kompetitor, keyword ASO, dan tingkat kompetisi sebelum development dimulai.",
        en: "Competitor research, ASO keywords, and competition analysis before development begins."
      }
    },
    {
      num: "02", active: false,
      title: { id: "Development", en: "Development" },
      desc: {
        id: "Dikerjakan tim developer & AI agent, mengikuti pola dan best practice yang sudah teruji.",
        en: "Built by our developer team & AI agents, following proven patterns and best practices."
      }
    },
    {
      num: "03", active: false,
      title: { id: "Testing / QA", en: "Testing / QA" },
      desc: {
        id: "APK diuji menyeluruh — performa, stabilitas iklan, dan pengalaman pengguna — sebelum rilis.",
        en: "APK thoroughly tested — performance, ad stability, and user experience — before release."
      }
    },
    {
      num: "04", active: false,
      title: { id: "Published", en: "Published" },
      desc: {
        id: "Live di Google Play Store, lengkap dengan privacy policy dan listing yang dioptimasi.",
        en: "Live on the Google Play Store, complete with privacy policy and optimized listing."
      }
    },
    {
      num: "05", active: false,
      title: { id: "Growth & Maintenance", en: "Growth & Maintenance" },
      desc: {
        id: "Pantau performa, update rutin, dan optimasi monetisasi iklan secara berkelanjutan.",
        en: "Monitor performance, regular updates, and continuously optimize ad monetization."
      }
    },
  ],

  /* ----------------------------------------------------------
   * WHY ADS SECTION
   * ---------------------------------------------------------- */
  whySection: {
    eyebrow: { id: "Model Bisnis", en: "Business Model" },
    heading: {
      id: "Dibangun untuk skala, dimonetisasi lewat iklan",
      en: "Built to scale, monetized through ads",
    },
    points: [
      {
        num: "01",
        title: { id: "Niche yang jarang digarap", en: "Underserved niches" },
        desc: {
          id: "Kami memburu celah pasar yang kompetitornya masih kecil dan terfragmentasi — bukan bersaing head-to-head dengan raksasa global.",
          en: "We target market gaps where competition is still small and fragmented — not competing head-to-head with global giants."
        },
      },
      {
        num: "02",
        title: { id: "Multi-akun, multi-kategori", en: "Multi-account, multi-category" },
        desc: {
          id: "4 akun developer memisahkan risiko dan mempermudah cross-promotion antar app dalam kategori yang sama.",
          en: "4 developer accounts separate risk and simplify cross-promotion between apps in the same category."
        },
      },
      {
        num: "03",
        title: { id: "Target pasar terukur", en: "Measured target markets" },
        desc: {
          id: "Setiap app diarahkan ke pasar spesifik — Indonesia, Global, US, Australia, atau Malaysia — sesuai potensi CPM & demand.",
          en: "Each app is directed to a specific market — Indonesia, Global, US, Australia, or Malaysia — based on CPM potential & demand."
        },
      },
      {
        num: "04",
        title: { id: "Ringan tapi rapi", en: "Lean but polished" },
        desc: {
          id: "Development cepat dengan checklist ASO, privacy policy, dan QA yang konsisten di setiap app.",
          en: "Fast development with consistent ASO checklist, privacy policy, and QA across every app."
        },
      },
    ],
  },
  whyFacts: [
    { k: { id: "Kategori terbesar", en: "Largest category" }, v: "Health, Finance & Lifestyle" },
    { k: { id: "Fokus pasar terluas", en: "Widest market focus" }, v: "Global (43 app)" },
    { k: { id: "Fokus pasar lokal", en: "Local market focus" }, v: "Indonesia (35 app)" },
    { k: { id: "Model monetisasi", en: "Monetization model" }, v: "Ad-Supported" },
    { k: { id: "Tahap pipeline saat ini", en: "Current pipeline stage" }, v: { id: "Riset & Perencanaan", en: "Research & Planning" } },
  ],

  /* ----------------------------------------------------------
   * MARKETS SECTION
   * ---------------------------------------------------------- */
  marketsSection: {
    eyebrow: { id: "Jangkauan Pasar", en: "Market Reach" },
    heading: { id: "Dari Nusantara ke pasar global", en: "From Nusantara to global markets" },
    subtext: {
      id: "Setiap ide app dipetakan ke target pasar berdasarkan riset kompetisi — satu app bisa menyasar lebih dari satu pasar sekaligus.",
      en: "Every app idea is mapped to a target market based on competition research — one app can target more than one market at once.",
    },
  },
  markets: [
    { flag: "🇮🇩", name: "Indonesia", count: "35 app" },
    { flag: "🌍", name: "Global", count: "43 app" },
    { flag: "🇺🇸", name: "US", count: "28 app" },
    { flag: "🇦🇺", name: "Australia", count: "17 app" },
    { flag: "🇲🇾", name: "Malaysia", count: "9 app" },
  ],

  /* ----------------------------------------------------------
   * CTA SECTION
   * ---------------------------------------------------------- */
  ctaSection: {
    heading: {
      id: "Punya ide app? Mari kita bangun bareng.",
      en: "Have an app idea? Let's build it together.",
    },
    subtext: {
      id: "Diskusi awal selalu gratis — ceritakan ide, target pasar, atau kebutuhan teknismu, dan kami bantu petakan jalannya sampai ke Play Store.",
      en: "Initial discussion is always free — share your idea, target market, or technical needs, and we'll help map the path to the Play Store.",
    },
    btnChat: {
      id: "Mulai Chat Sekarang",
      en: "Start Chat Now",
    },
    btnWa: { id: " (WA)", en: " (WhatsApp)" },
  },

  /* ----------------------------------------------------------
   * NAV LABELS
   * ---------------------------------------------------------- */
  nav: {
    portfolio: { id: "Portofolio", en: "Portfolio" },
    accounts: { id: "Akun Developer", en: "Developer Accts" },
    process: { id: "Proses", en: "Process" },
    markets: { id: "Pasar", en: "Markets" },
    contact: { id: "Kontak", en: "Contact" },
    cta: { id: "Mulai Ngobrol →", en: "Let's Talk →" },
  },

  /* ----------------------------------------------------------
   * FOOTER
   * ---------------------------------------------------------- */
  footer: {
    copyright: {
      id: "© 2026 Nusantara Mobile Studio. Dibangun dengan semangat archipelago, satu pulau aplikasi pada satu waktu.",
      en: "© 2026 Nusantara Mobile Studio. Built with archipelago spirit, one app island at a time.",
    },
    links: [
      { label: { id: "Portofolio", en: "Portfolio" }, href: "#portfolio" },
      { label: { id: "Akun Developer", en: "Developer Accts" }, href: "#akun" },
      { label: { id: "Proses", en: "Process" }, href: "#proses" },
      { label: { id: "Pasar", en: "Markets" }, href: "#pasar" },
      { label: { id: "Kontak", en: "Contact" }, href: "#kontak" },
      { label: { id: "Privacy Policy", en: "Privacy Policy" }, href: "/nusantaramobilestudio/privacy-policy.html" },
    ],
  },

};

window.__NMS_CONFIG__ = CONFIG;
