# Nusantara Mobile Studio — Website

Landing page resmi Nusantara Mobile Studio. Website statis bilingual (Indonesia / English), dibangun dari satu file konfigurasi terpusat.

---

## Daftar Isi

1. [Struktur File](#struktur-file)
2. [Cara Deploy](#cara-deploy)
3. [Cara Update Konten](#cara-update-konten)
   - [Identitas & Domain](#1-identitas--domain)
   - [Kontak & WhatsApp](#2-kontak--whatsapp)
   - [SEO & Social Media](#3-seo--social-media)
   - [Google Analytics](#4-google-analytics)
   - [Hero Section](#5-hero-section)
   - [Statistik Angka Besar](#6-statistik-angka-besar)
   - [Tambah / Update App Portfolio](#7-tambah--update-app-portfolio)
   - [Akun Developer](#8-akun-developer)
   - [Tahap Proses](#9-tahap-proses)
   - [Panel Fakta (Why Ads)](#10-panel-fakta-why-ads)
   - [Jangkauan Pasar](#11-jangkauan-pasar)
   - [Footer](#12-footer)
4. [Sistem Bilingual](#sistem-bilingual)
5. [Portfolio: Aturan Status App](#portfolio-aturan-status-app)
6. [Keamanan](#keamanan)
7. [Checklist Sebelum Live](#checklist-sebelum-live)
8. [Checklist Rutin (Setelah Live)](#checklist-rutin-setelah-live)
9. [Troubleshooting](#troubleshooting)

---

## Struktur File

```
nusantaramobilestudio/
│
├── index.html                ← Halaman utama (jangan edit isi teks di sini)
├── config.js                 ← ⭐ SATU-SATUNYA FILE YANG PERLU DIEDIT
├── privacy-policy.html       ← Halaman kebijakan privasi (wajib untuk AdMob)
├── robots.txt                ← Izin crawler mesin pencari
├── sitemap.xml               ← Peta halaman untuk Google Search
├── favicon.svg               ← Ikon browser
├── site.webmanifest          ← PWA manifest
│
├── _headers                  ← Security headers (Netlify / Cloudflare Pages)
├── .htaccess                 ← Security headers (cPanel / Apache)
└── vercel.json               ← Security headers (Vercel)

```

> **Aturan utama:** Semua update konten dilakukan di `config.js`. Jangan edit teks langsung di `index.html`.

---

## Cara Deploy

### Netlify (Direkomendasikan — gratis)

1. Buat akun di [netlify.com](https://netlify.com)
2. Drag & drop folder ini ke Netlify Drop, **atau** hubungkan ke GitHub repo
3. Netlify otomatis membaca `_headers` → security headers aktif
4. Pasang domain kustom di **Site settings → Domain management**

### Cloudflare Pages (Alternatif gratis)

1. Buat akun di [pages.cloudflare.com](https://pages.cloudflare.com)
2. Upload folder atau hubungkan GitHub repo
3. File `_headers` otomatis dibaca
4. Bonus: langsung dapat proteksi DDoS Cloudflare

### Vercel

1. `npm i -g vercel` → `vercel` di folder ini
2. File `vercel.json` otomatis terbaca untuk security headers

### cPanel / Apache Shared Hosting

1. Upload semua file ke `public_html/`
2. File `.htaccess` sudah mengandung security headers dan redirect HTTPS
3. Pastikan domain sudah dipasang SSL (biasanya gratis via Let's Encrypt di cPanel)

---

## Cara Update Konten

Buka `config.js` dan cari section yang relevan. Semua teks bilingual menggunakan format:

```js
field: {
  id: "Teks dalam Bahasa Indonesia",
  en: "Text in English",
}
```

Data non-teks (angka, URL, warna) cukup satu nilai.

---

### 1. Identitas & Domain

```js
studio: {
  name:    "Nusantara Mobile Studio",  // Nama studio (tidak diterjemahkan)
  since:   "2024",                     // Tahun berdiri
  domain:  "holisahmad.github.io/nusantaramobilestudio",   // Domain tanpa https://
  baseUrl: "https://holisahmad.github.io/nusantaramobilestudio/", // URL lengkap dengan https://
},
```

**Kapan diupdate:** Saat ganti domain hosting.

---

### 2. Kontak & WhatsApp

```js
contact: {
  email:    "lencakstudio@gmail.com",  // Email kontak
  whatsapp: "6285655268945",                 // Nomor WA tanpa + (62xxx...)
  whatsappMsg: {
    id: "Halo Nusantara Mobile Studio, saya ingin berdiskusi tentang:",
    en: "Hi Nusantara Mobile Studio, I'd like to discuss:",
  },
},
```

**Kapan diupdate:** Saat ganti nomor WA atau email.

> Jika `whatsapp` dikosongkan (`""`), tombol chat FAB otomatis beralih ke `mailto:`.

---

### 3. SEO & Social Media

```js
seo: {
  title: {
    id: "Nusantara Mobile Studio — Aplikasi Android Monetisasi Iklan",
    en: "Nusantara Mobile Studio — Ad-Monetized Android Apps",
  },
  description: {
    id: "Studio pengembang aplikasi Android...",
    en: "Indonesian Android app development studio...",
  },
  keywords: {
    id: "aplikasi android indonesia, developer android...",
    en: "android app developer indonesia, admob monetization...",
  },
  ogImage:       "/og-image.png",   // Gambar 1200×630px untuk preview sosmed
  twitterHandle: "@handle",         // Handle Twitter/X, kosongkan jika tidak ada
},
```

**Kapan diupdate:**
- Saat domain berubah → update `baseUrl` di `studio`
- Saat ingin optimasi keyword pencarian
- Setelah buat `og-image.png` (1200×630px) → path sudah benar

> **Buat og-image.png:** Gunakan Canva atau Figma, ukuran 1200×630px, export sebagai PNG, upload ke root folder bersama `index.html`.

---

### 4. Google Analytics

```js
analytics: {
  gaId: "G-XXXXXXXXXX",  // Measurement ID dari Google Analytics 4
},
```

**Cara mendapatkan GA4 ID:**
1. Buka [analytics.google.com](https://analytics.google.com)
2. Buat property baru → pilih Web
3. Salin Measurement ID (format: `G-XXXXXXXXXX`)
4. Tempel di field `gaId`

> Kosongkan `gaId: ""` jika tidak ingin pasang analytics.

---

### 5. Hero Section

```js
hero: {
  eyebrow: {
    id: "Studio pengembang aplikasi Android · sejak 2024",
    en: "Android app development studio · since 2024",
  },
  headline: {
    id: "Kami bangun <span class=\"highlight\">ratusan pulau aplikasi</span> di lautan Play Store.",
    en: "We build <span class=\"highlight\">hundreds of app islands</span> across the Play Store.",
  },
  lead: { id: "...", en: "..." },
  cta: {
    primary:   { label: { id: "Lihat Portofolio ↓", en: "View Portfolio ↓" }, href: "#portfolio" },
    secondary: { label: { id: "Diskusi Proyek Gratis", en: "Free Project Discussion" }, href: "#kontak" },
  },
  stats: [
    { value: 100, suffix: "+", label: { id: "ide app dalam pipeline", en: "app ideas in pipeline" } },
    { value: 4,   suffix: "",  label: { id: "akun developer aktif",   en: "active developer accounts" } },
    { value: 5,   suffix: "",  label: { id: "target pasar geografis", en: "geographic target markets" } },
  ],
},
```

**Kapan diupdate:**
- `stats.value` → perbarui angka sesuai perkembangan nyata
- `headline` → ganti jika tagline berubah
- `<span class="highlight">...</span>` di dalam headline → bagian yang berwarna gradasi, boleh diubah teksnya

---

### 6. Statistik Angka Besar

Angka besar yang tampil di band bawah hero (dengan animasi count-up):

```js
statsband: [
  { count: 100, label: { id: "Ide aplikasi dalam pipeline...", en: "App ideas in..." } },
  { count: 4,   label: { id: "Akun developer...",              en: "Developer accounts..." } },
  { count: 10,  label: { id: "Kategori aplikasi...",           en: "App categories..." } },
  { count: 5,   label: { id: "Target pasar...",                en: "Target markets..." } },
],
```

**Kapan diupdate:** Saat jumlah app, akun, atau pasar berubah.

---

### 7. Tambah / Update App Portfolio

Ini yang paling sering diupdate. Setiap app adalah satu objek di array `apps`:

```js
apps: [
  {
    id:           "app-tools-02",          // ID unik, bebas, tidak boleh duplikat
    name:         "Nama Aplikasi",         // Nama app (sama untuk semua bahasa)
    category:     "Tools & Utilities",     // Kategori Play Store
    market:       "Global",                // Target pasar
    emoji:        "🛠️",                    // Ikon sementara (ganti saat app live)
    gradient:     "linear-gradient(135deg,#8257FF,#5B2A8C)", // Warna background ikon
    iconDark:     false,                   // true = teks ikon warna gelap, false = putih
    status:       "soon",                  // "live" | "soon" | "dev"
    playStoreUrl: "",                      // URL Play Store (isi jika status "live")
    tags:         ["Ad-Supported"],        // Badge tambahan
  },
]
```

#### Status app — penjelasan

| Status | Tampilan | Kapan digunakan |
|--------|----------|-----------------|
| `"live"` | Badge hijau ✓ + link Play Store aktif | App sudah dipublish di Play Store |
| `"soon"` | Badge kuning "Segera Rilis" | App selesai dev, menunggu review / hampir rilis |
| `"dev"` | Badge abu-abu "Dalam Development" | App masih dalam pengerjaan |

#### Cara update app yang sudah live

```js
// Sebelum:
{ name: "Kalkulator Ringan", status: "soon", playStoreUrl: "" }

// Sesudah:
{ name: "Kalkulator Ringan", status: "live", playStoreUrl: "https://play.google.com/store/apps/details?id=com.nusantara.kalkulator" }
```

#### Cara tambah app baru

Tambahkan objek baru di akhir array `apps` (sebelum `]`):

```js
  // ... app sebelumnya
  {
    id:           "app-games-02",
    name:         "Puzzle Nusantara",
    category:     "Games",
    market:       "Indonesia",
    emoji:        "🧩",
    gradient:     "linear-gradient(135deg,#FF5D73,#FFB627)",
    iconDark:     true,
    status:       "dev",
    playStoreUrl: "",
    tags:         ["Ad-Supported"],
  },
],
```

#### Pilihan warna gradient

Gunakan kombinasi dari palet ini:

| Warna | Kode hex |
|-------|----------|
| Gold | `#FFB627` |
| Coral | `#FF5D73` |
| Coral Soft | `#FF8A65` |
| Violet | `#8257FF` |
| Violet Deep | `#5B2A8C` |
| Teal | `#00D9A3` |
| Teal Dark | `#00A87E` |

Contoh: `"linear-gradient(135deg,#FFB627,#FF5D73)"`

#### Jumlah app per halaman

```js
portfolio: {
  perPage: 8,   // Ganti ke 12 atau 16 saat app sudah banyak
},
```

---

### 8. Akun Developer

```js
accounts: [
  {
    num:   { id: "KATEGORI 01", en: "CATEGORY 01" },
    glow:  "#FF5D73",              // Warna efek glow di kartu
    title: "Games",                // Nama kategori (tidak diterjemahkan)
    desc:  { id: "...", en: "..." },
    count: 17,                     // Jumlah app dalam pipeline
    unit:  { id: "app dalam pipeline", en: "apps in pipeline" },
  },
],
```

**Kapan diupdate:** Saat jumlah app di tiap kategori berubah, atau saat nama/deskripsi kategori berubah.

---

### 9. Tahap Proses

```js
steps: [
  {
    num:    "01",
    active: true,    // true = highlight dengan warna teal (tahap aktif saat ini)
    title:  { id: "Riset & Perencanaan", en: "Research & Planning" },
    desc:   { id: "...", en: "..." },
  },
],
```

**Kapan diupdate:** Saat ingin menunjukkan tahap mana yang sedang aktif. Hanya satu step yang sebaiknya `active: true` sekaligus.

---

### 10. Panel Fakta (Why Ads)

```js
whyFacts: [
  { k: { id: "Kategori terbesar",   en: "Largest category"  }, v: "Health, Finance & Lifestyle" },
  { k: { id: "Fokus pasar terluas", en: "Widest market focus"}, v: "Global (43 app)"             },
  // ...
],
```

`k` = label (kiri), `v` = nilai (kanan, berwarna teal).

Nilai `v` bisa berupa string biasa atau bilingual `{ id: "...", en: "..." }`.

**Kapan diupdate:** Saat statistik pasar atau kategori berubah.

---

### 11. Jangkauan Pasar

```js
markets: [
  { flag: "🇮🇩", name: "Indonesia", count: "35 app" },
  { flag: "🌍",  name: "Global",    count: "43 app" },
  { flag: "🇺🇸", name: "US",        count: "28 app" },
  { flag: "🇦🇺", name: "Australia", count: "17 app" },
  { flag: "🇲🇾", name: "Malaysia",  count: "9 app"  },
],
```

**Kapan diupdate:** Saat jumlah app per pasar berubah, atau saat menambah pasar baru.

---

### 12. Footer

```js
footer: {
  copyright: {
    id: "© 2026 Nusantara Mobile Studio...",
    en: "© 2026 Nusantara Mobile Studio...",
  },
  links: [
    { label: { id: "Portofolio", en: "Portfolio" }, href: "#portfolio" },
    // ... tambah link baru di sini jika perlu
  ],
},
```

**Kapan diupdate:** Saat ganti tahun copyright, atau menambah halaman baru.

---

## Sistem Bilingual

Website mendukung dua bahasa: **Indonesia (ID)** dan **English (EN)**.

### Cara kerja

- Tombol `[ID]` / `[EN]` di navbar kanan atas untuk toggle bahasa
- Pilihan bahasa disimpan di browser (`localStorage`) — visitor yang kembali langsung dapat bahasa yang sama
- Visitor dari luar Indonesia → default otomatis **English**
- Visitor dari Indonesia → default otomatis **Indonesia**

### Format teks bilingual

```js
// Format bilingual — untuk semua teks yang tampil ke pengguna
field: {
  id: "Teks Indonesia",
  en: "English text",
}

// Format satu bahasa — untuk data universal (angka, URL, nama brand)
field: "nilai_universal"
```

### Yang TIDAK perlu diterjemahkan

- Nama aplikasi (`name` di `apps`) — nama brand tetap sama
- Nama kategori Play Store (`category`) — sudah dalam bahasa Inggris
- Nama negara/pasar (`market`, `markets[].name`) — nama universal
- Email, nomor WA, URL
- Angka statistik

---

## Portfolio: Aturan Status App

```
Alur normal setiap app:
  "dev" → "soon" → "live"

dev  = masih dibangun, belum selesai
soon = selesai, menunggu review Play Store atau hampir rilis
live = sudah live, wajib isi playStoreUrl
```

Saat mengubah status ke `"live"`, wajib isi `playStoreUrl`:

```js
playStoreUrl: "https://play.google.com/store/apps/details?id=com.nama.paket"
```

URL Play Store bisa didapat dari:
- Google Play Console → pilih app → lihat di browser → salin URL
- Format: `https://play.google.com/store/apps/details?id=PACKAGE_NAME`

---

## Keamanan

### Perlindungan yang sudah ada di HTML

| Ancaman | Perlindungan |
|---------|-------------|
| XSS | Semua output melalui fungsi `esc()` |
| Clickjacking | Header `X-Frame-Options: DENY` |
| MIME Sniffing | Header `X-Content-Type-Options: nosniff` |
| Downgrade HTTPS | Header `Strict-Transport-Security` |
| Info server bocor | Header `Server` dan `X-Powered-By` dikosongkan |

### File security headers per hosting

| Hosting | File |
|---------|------|
| Netlify / Cloudflare Pages | `_headers` |
| Vercel | `vercel.json` |
| cPanel / Apache | `.htaccess` |

Upload **semua** file ke hosting. File yang tidak dikenali hosting hanya diabaikan.

### Perlindungan DDoS — Cloudflare Free

Aktifkan Cloudflare Free setelah domain live:
1. Daftar di [cloudflare.com](https://cloudflare.com) (gratis)
2. Tambahkan domain → ikuti wizard
3. Ganti nameserver di registrar ke nameserver Cloudflare
4. Dapat: DDoS protection, CDN global, SSL gratis, bot protection

---

## Checklist Sebelum Live

Lakukan ini **sebelum** publish domain ke publik:

- [ ] Ganti `studio.domain` dan `studio.baseUrl` di `config.js` dengan domain asli
- [ ] Isi `contact.email` dengan email aktif
- [ ] Isi `contact.whatsapp` dengan nomor WhatsApp aktif
- [ ] Buat dan upload `og-image.png` (1200×630px) ke root folder
- [ ] Daftar dan isi `analytics.gaId` dengan Measurement ID GA4
- [ ] Pastikan SSL aktif di hosting (HTTPS)
- [ ] Test buka di browser: `https://namadomain.com`
- [ ] Test toggle bahasa ID/EN berfungsi
- [ ] Test tombol chat FAB mengarah ke WA yang benar
- [ ] Test link Privacy Policy di footer terbuka
- [ ] Submit `sitemap.xml` ke [Google Search Console](https://search.google.com/search-console)
- [ ] Aktifkan Cloudflare Free untuk proteksi DDoS
- [ ] Hapus file lama `nusantara-mobile-studio.html`

---

## Checklist Rutin (Setelah Live)

### Setiap kali ada app baru live di Play Store

1. Buka `config.js`
2. Cari app yang bersangkutan di array `apps`
3. Ubah `status: "soon"` → `status: "live"`
4. Isi `playStoreUrl` dengan URL Play Store yang benar
5. Simpan file
6. Upload ulang `config.js` ke hosting

### Setiap bulan

- Update angka di `statsband` dan `hero.stats` sesuai perkembangan
- Update `accounts[].count` sesuai jumlah app terbaru per kategori
- Update `markets[].count` sesuai distribusi app per pasar
- Update `whyFacts` jika ada data yang berubah

### Setiap tahun

- Update tahun di `footer.copyright` (contoh: `© 2026` → `© 2027`)
- Perbarui tanggal di `sitemap.xml` (`<lastmod>`)
- Perbarui tanggal di `privacy-policy.html` ("Terakhir diperbarui")

---

## Troubleshooting

**Website tampil tapi teks kosong / tidak muncul**
→ Pastikan `config.js` ada di folder yang sama dengan `index.html`
→ Buka DevTools browser (F12) → Console → cari pesan error merah

**Toggle bahasa tidak berfungsi**
→ Buka DevTools → Console → cari `config.js missing`
→ Pastikan `config.js` terupload ke hosting

**Gambar og-image tidak muncul saat share ke sosmed**
→ Pastikan file `og-image.png` sudah diupload ke root folder
→ Gunakan [opengraph.xyz](https://www.opengraph.xyz) untuk preview

**Tombol WhatsApp tidak mengarah ke nomor yang benar**
→ Cek `contact.whatsapp` di `config.js` — harus format `62xxx` tanpa tanda `+`

**Link Play Store tidak aktif di portfolio card**
→ Pastikan `status: "live"` DAN `playStoreUrl` sudah diisi (keduanya wajib)

**Security headers tidak aktif**
→ Periksa hosting yang dipakai, upload file yang sesuai:
  - Netlify/Cloudflare Pages: upload `_headers`
  - Vercel: upload `vercel.json`
  - cPanel: upload `.htaccess` ke `public_html/`

---

*README ini dibuat: 29 Agustus 2026 · Nusantara Mobile Studio*
