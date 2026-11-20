# SEO, KEYWORD & MULTI-LANGUAGE (i18n) RULES — LOMBOKDEVLAB

## 1. IDENTITAS & POSISI BRAND
- **Nama Brand:** LombokDevLab
- **Layanan Utama:** Jasa Pembuatan Website, Full-Stack Web Development, Custom Sistem Informasi, Landing Page, E-Commerce, dan UI/UX Design.
- **Tech Stack Utama:** Laravel, React.js, Next.js, Tailwind CSS, WordPress Custom, REST API, Payment Gateway Integration.
- **Target Pasar (3 Tier):**
  1. **Lokal (ID):** Lombok & Nusa Tenggara Barat (NTB).
  2. **Nasional (ID):** Seluruh kota besar di Indonesia.
  3. **Internasional (EN):** Global — fokus pada Australia, Singapura, Eropa, dan US.

---

## 2. ATURAN ARSITEKTUR MULTI-BAHASA (ID & EN) & GEO-LOCATION
Setiap kali AI Agent membuat halaman, komponen UI, copywriting, atau struktur routing untuk website LombokDevLab, AI Agent **WAJIB** memproduksi **DUA VERSI SEKALIGUS (`id` dan `en`)** dengan aturan teknis berikut:

1. **Dual-Output Wajib:**
   - Dilarang hanya membuat versi Bahasa Indonesia saja atau Bahasa Inggris saja. Setiap konten atau file translasi (misal: `id.json` & `en.json` atau komponen React/Next.js/Laravel) harus selalu dibuat berpasangan (`ID` dan `EN`).
2. **Aturan Geo-Location Redirect / Auto-Translate:**
   - Implementasikan logika deteksi lokasi pengunjung berdasarkan IP / `Accept-Language` header (melalui Middleware atau Geo-IP API):
     - Jika pengunjung berasal dari **Indonesia (`country === 'ID'`)**, arahkan atau tampilkan konten versi **Bahasa Indonesia (`id`)** secara default.
     - Jika pengunjung berasal dari **luar Indonesia (`country !== 'ID'`)**, arahkan atau tampilkan konten versi **Bahasa Inggris (`en`)** secara default.
   - **Wajib sediakan Language Switcher manual (ID / EN)** di Navbar agar pengunjung tetap bebas mengganti bahasa kapan saja (penting untuk bot Google dan ekspatriat di Bali/Lombok).
3. **Lokalisasi Konteks & Mata Uang (Bukan Terjemahan Kaku):**
   - **Versi `id` (Indonesia):** Gunakan keyword **Tier 1 & Tier 2**. Tampilkan harga dalam **IDR (Rp)**, metode pembayaran lokal (Transfer Bank, QRIS, Midtrans/Xendit), dan studi kasus bisnis lokal/nasional.
   - **Versi `en` (Internasional):** Gunakan keyword **Tier 3**. Jangan terjemahkan kata per kata dari bahasa Indonesia—tulis dengan gaya *copywriting* agensi global yang natural. Tampilkan harga dalam **USD ($)**, metode pembayaran internasional (Stripe, PayPal, Wise, Bank Wire), dan tonjolkan nilai jual: *"Based in Lombok, Indonesia — Serving Clients Worldwide (GMT+8 Timezone)"*.
4. **Technical SEO Multi-Bahasa (`hreflang` & Canonical):**
   - Setiap halaman wajib menyertakan tag `<link rel="alternate" hreflang="..." />` yang menghubungkan versi `id` dan `en`, serta `x-default` yang mengarah ke versi bahasa utama agar tidak dianggap *duplicate content* oleh Google.

---

## 3. ATURAN ON-PAGE SEO
1. **Title Tag & H1:** Wajib mengandung *Primary Keyword* sesuai bahasa halaman tersebut (maks. 60 karakter untuk Meta Title).
2. **100 Kata Pertama:** Wajib menyisipkan *Primary Keyword* secara natural di paragraf pembuka.
3. **Subheading (H2 & H3):** Gunakan variasi *Secondary Keyword* dan *Long-Tail Keyword*.
4. **Anti-Keyword Stuffing:** Jaga *Keyword Density* di kisaran **1% – 2%**. Prioritaskan kenyamanan baca manusia dan tingkat konversi (*CRO*).

---

## 4. DATABASE KEYWORD BERDASARKAN TIER

### TIER 1: PASAR LOKAL — BAHASA INDONESIA (`id`)
*Gunakan untuk halaman Local SEO dan target klien area Lombok & NTB.*
- **Utama & Brand:**
  `jasa pembuatan website lombok`, `jasa buat website lombok`, `web developer lombok`, `software house lombok`, `digital agency lombok`, `jasa pembuatan website ntb`, `jasa web design lombok`, `lombokdevlab`
- **Geo-Targeted (Kota & Kawasan Wisata):**
  `jasa pembuatan website mataram`, `web developer mataram`, `jasa pembuatan website lombok barat`, `jasa pembuatan website senggigi`, `jasa pembuatan website lombok tengah`, `jasa pembuatan website praya`, `jasa pembuatan website kuta lombok`, `jasa pembuatan website mandalika`, `jasa pembuatan website lombok timur`, `jasa pembuatan website selong`, `jasa pembuatan website pringgabaya`, `jasa pembuatan website sembalun`, `jasa pembuatan website lombok utara`, `jasa pembuatan website gili trawangan`, `jasa pembuatan website sumbawa`, `jasa pembuatan website bima`
- **Niche Lokal:**
  `jasa pembuatan website travel lombok`, `jasa buat website tour and travel mataram`, `jasa pembuatan website rental mobil lombok`, `jasa pembuatan website hotel lombok`, `jasa pembuatan website villa kuta lombok`, `jasa website booking wisata mandalika`, `jasa pembuatan website umkm ntb`, `jasa pembuatan website sekolah lombok`, `jasa pembuatan website desa lombok`

### TIER 2: PASAR NASIONAL — BAHASA INDONESIA (`id`)
*Gunakan untuk halaman utama versi Indonesia dan target klien seluruh Indonesia.*
- **Nasional Utama:**
  `jasa pembuatan website`, `jasa buat website profesional`, `jasa pembuatan website terpercaya`, `jasa pembuatan website murah berkualitas`, `jasa web design indonesia`, `web developer indonesia`, `software house indonesia`, `digital agency indonesia`, `jasa pembuatan sistem informasi`, `jasa pembuatan aplikasi berbasis web`, `jasa pembuatan website custom`, `jasa pembuatan website perusahaan`
- **Kota Besar Indonesia:**
  `jasa pembuatan website bali`, `jasa pembuatan website canggu`, `jasa pembuatan website denpasar`, `jasa pembuatan website jakarta`, `jasa pembuatan website surabaya`, `jasa pembuatan website bandung`, `jasa pembuatan website yogyakarta`, `jasa pembuatan website medan`, `jasa pembuatan website makassar`, `jasa pembuatan website semarang`, `jasa pembuatan website balikpapan`
- **Jenis Website & Tech Stack:**
  `jasa pembuatan website company profile`, `jasa pembuatan landing page konversi tinggi`, `jasa pembuatan website toko online`, `jasa pembuatan website e-commerce`, `jasa pembuatan website laravel`, `jasa web developer react js`, `jasa pembuatan website next js`, `jasa pembuatan website wordpress custom`, `jasa integrasi payment gateway midtrans xendit`, `jasa pembuatan dashboard admin custom`
- **Transactional:**
  `harga jasa pembuatan website`, `biaya pembuatan website company profile`, `paket pembuatan website terima beres`, `jasa pembuatan website seo friendly`, `jasa redesign website`, `jasa maintenance website`

### TIER 3: PASAR INTERNASIONAL — BAHASA INGGRIS (`en`)
*Gunakan khusus untuk versi Bahasa Inggris (`/en`) dan target pengunjung dari luar Indonesia.*
- **Core Global Agency:**
  `custom web development agency`, `full stack web development services`, `bespoke website design and development`, `modern web design agency`, `responsive web design services`, `web application development company`, `high converting landing page design`, `ui/ux design and web development`, `website redesign services`
- **Tech-Stack Specific:**
  `laravel development agency`, `hire laravel developer`, `react js development services`, `next js web development agency`, `custom wordpress development services`, `tailwind css web developer`, `custom cms development`, `api integration services`
- **Global Niche & Hospitality:**
  `hotel website design and booking engine`, `luxury villa website design`, `travel agency website development`, `tour operator booking website design`, `real estate website development`, `custom e-commerce website development`, `b2b company profile website design`, `saas landing page design agency`, `startup mvp web development`
- **Outsourcing & Geo-Targeted Global:**
  `web development agency indonesia`, `hire web developer indonesia`, `outsource web development to indonesia`, `web design agency bali lombok`, `affordable web development agency for startups`, `offshore full stack development team`, `white label web development agency`, `web design agency for australian businesses`, `web developer for singapore startups`

---

## 5. FORMAT OUTPUT YANG WAJIB DIHASILKAN AI AGENT
Setiap kali diminta membuat halaman, copywriting, atau kode komponen website, AI Agent harus selalu menyertakan struktur berikut:

### A. Versi Indonesia (`id`)
- **Meta Title (ID):** (Maks. 60 karakter + Primary Keyword Tier 1/2)
- **Meta Description (ID):** (Maks. 155 karakter + CTA)
- **Konten / Kode JSON `id`:** (Menggunakan Rupiah/IDR & konteks pasar Indonesia)

### B. Versi Internasional (`en`)
- **Meta Title (EN):** (Maks. 60 karakter + Primary Keyword Tier 3)
- **Meta Description (EN):** (Maks. 155 karakter + CTA)
- **Konten / Kode JSON `en`:** (Menggunakan USD & konteks pasar global)

### C. Catatan Teknis SEO & Geo-Routing (Jika membuat halaman/kode baru)
- Pastikan tag `hreflang="id"`, `hreflang="en"`, dan `hreflang="x-default"` terpasang serta terhubung dengan sistem deteksi lokasi IP pengunjung.