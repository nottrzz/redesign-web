# PROMPT FLOW LAYANAN - LOMBOK DEVLAB
# JANGAN BAHAS DESAIN. DESAIN SUDAH DIATUR SKILL LAIN. FOKUS HANYA KE FLOW & STRUKTUR & KONTEN.

## KONTEKS BISNIS

Nama: Lombok Devlab
Apa yang kami jual: Sistem Direct Booking / Direct Order untuk UMKM & Villa & Bisnis jasa.
Masalah yang kami selesaikan: Pemilik bisnis kehilangan 15-25% omset karena potongan platform (Booking.com, Agoda, GrabFood, GoFood, Airbnb, ShopeeFood, dll). Kami bikin sistem agar customer order langsung ke pemilik bisnis via Website + WhatsApp, tanpa perantara.

Target market:
- PRIMARY: Seluruh Indonesia
- SECONDARY: Luar Negeri - Owner bisnis di Bali, Lombok, Asia Tenggara yang punya customer bule, butuh sistem bilingual (Indonesia + Inggris)

JANGAN tulis "Nomor 1 di Lombok" atau "Hanya untuk Lombok". Target kami seluruh Indonesia + Luar Negeri.

## DAFTAR BISNIS YANG KAMI TARGET - INI PENTING, JANGAN DIHILANGKAN

Kami TIDAK hanya menargetkan Villa dan Laundry. Kami menargetkan SEMUA jenis UMKM di bawah ini. Di setiap page layanan, contoh bisnisnya HARUS mencakup contoh-contoh ini, jangan hanya villa/laundry saja:

1. Restoran / Resto Pizza / Warung Makan / Kafe / Kuliner - Contoh nyata: Restoran pizza tempat founder kami bekerja sebagai kasir. Masalahnya: Order masuk via WA, input manual ke POS (ESB), capek, lambat pas rame. Solusi kami: Order via WA otomatis, hitung total otomatis, kirim QRIS.
2. Toko Bangunan / Toko Material / Toko Besi / Toko Cat - Jual semen, pasir, cat, pipa, dll. Customer biasanya tanya harga via WA, butuh katalog + hitung ongkir.
3. Toko Roti / Bakery / Toko Kue / Toko Bahan Kue - Jual roti, kue ulang tahun, bahan kue. Butuh sistem Pre-Order H-1, karena produknya fresh.
4. Laundry / Laundry Kiloan / Laundry Sepatu
5. Villa / Homestay / Guesthouse / Hotel Kecil
6. Rental Motor / Rental Mobil / Travel / Tour Guide
7. Toko Kelontong / Toko Sembako / Frozen Food / Lauk Siap Saji
8. Barbershop / Salon / Klinik / Bengkel / Jasa Servis
9. Fashion / Kerajinan / Oleh-oleh / Toko Souvenir

Kalau di page layanan kamu hanya menulis contoh "Villa dan Laundry", itu SALAH. Harus menulis contoh yang beragam seperti di atas, terutama Restoran Pizza, Toko Bangunan, dan Toko Roti, karena itu contoh UMKM yang paling sering ditemui.

## STRUKTUR NAVIGASI & FLOW

Buat menu "Layanan" sebagai DROPDOWN.

Flow navigasi:
User di Beranda -> Hover/Klik "Layanan" -> Muncul dropdown berisi 7 layanan di bawah ini -> User klik salah satu -> Masuk ke Page Detail layanan tersebut -> Di page detail, user bisa klik CTA -> Masuk ke WhatsApp dengan pesan yang sudah terisi sesuai layanan yang dipilih.

Jangan buat 7 layanan dalam 1 page panjang. Wajib: 1 layanan = 1 page terpisah.

Daftar 7 layanan, urutan dan slug HARUS persis ini:

1. Direct Booking / Direct Order -> /layanan/direct-booking
2. WA Bot + AI Admin -> /layanan/wa-bot-ai-admin
3. Google Maps + SEO Lokal / GEO -> /layanan/google-maps-seo
4. Website UMKM -> /layanan/website-umkm
5. Company Profile & Landing Page -> /layanan/company-profile
6. E-Commerce / Toko Online -> /layanan/e-commerce
7. Villa Management + Direct Booking -> /layanan/villa-management

Di dropdown, setiap item harus menampilkan:
- Nama layanan
- 1 kalimat deskripsi singkat
- Link ke page-nya

Di bawah dropdown, tambahkan link: "Lihat Semua Layanan -> /layanan"

Buat juga halaman induk /layanan yang menampilkan 7 card layanan, masing-masing card link ke page detailnya.

## STRUKTUR WAJIB SETIAP PAGE LAYANAN

Setiap dari 7 page di atas WAJIB punya flow section yang sama, urutannya jangan dibalik:

1. HERO: Nama layanan + 1 kalimat masalah yang diselesaikan + 2 tombol CTA: [Trial 3 Hari Gratis - Chat WA] dan [Lihat Harga]
2. MASALAH: 3 masalah yang dialami customer jika tidak pakai layanan ini. Contoh masalahnya harus nyambung ke contoh bisnis di atas (Resto Pizza, Toko Bangunan, Toko Roti, dll)
3. CARA KERJA / FLOW: Langkah-langkah 1-2-3-4 bagaimana layanan ini berjalan dari sudut pandang customer akhir. Harus jelas: Customer ngapain dulu, terus apa yang terjadi, terus hasilnya apa.
4. YANG KAMU DAPAT: List fitur apa saja yang didapat
5. HARGA: Harga transparan
6. FAQ: 4 pertanyaan yang sering ditanya
7. CTA AKHIR: Ajakan trial gratis + tombol WA

Flow CTA WhatsApp:
Setiap tombol WA di setiap page harus membawa pesan yang berbeda sesuai layanannya.
Format pesan WA: "Halo Lombok Devlab, saya mau tanya tentang [Nama Layanan]."

## ISI KONTEN & FLOW PER LAYANAN

### 1. DIRECT BOOKING / DIRECT ORDER - /layanan/direct-booking
Target: Semua bisnis di daftar di atas.
Contoh penggunaan yang HARUS disebutkan di page ini:
- Restoran Pizza: Customer order pizza via WA, sistem hitung total otomatis, kirim QRIS, kasir tidak perlu input manual lagi.
- Toko Bangunan: Customer tanya "Harga semen 10 sak + ongkir ke Mataram berapa?" Sistem jawab harga dari katalog + hitung ongkir.
- Toko Roti: Customer pre-order roti H-1 via WA, sistem catat orderan, kirim pengingat.
- Villa: Tamu booking langsung, tanpa potongan Airbnb.
- Laundry: Customer order laundry 5kg, sistem hitung total.
Masalah: 1. Order masuk dipotong 15-25% platform 2. Customer chat nanya harga, slow respon, pindah ke kompetitor 3. Tidak punya data customer, datanya milik platform
Flow Cara Kerja (dari sisi customer akhir):
Langkah 1: Customer cari di Google / Instagram -> Ketemu website bisnis
Langkah 2: Customer klik tombol -> Langsung terbuka chat WhatsApp otomatis (tanpa simpan nomor)
Langkah 3: Bot / Sistem hitung total + kirim ringkasan order + QRIS
Langkah 4: Customer bayar -> Pemilik bisnis terima notif order baru -> Proses order
Yang Didapat: Website 1 Halaman, Tombol WA Otomatis, Bot Balas Harga, Hitung Total Otomatis, Kirim QRIS, Rekap Order Harian
Harga: Setup Rp 1.500.000 (sekali bayar) + Rp 150.000 / bulan
FAQ: 1. Berapa lama setup? 3-7 hari. 2. Kalau saya gaptek? Kami yang setup semua. 3. Apakah nomor WA saya aman? Ya, kami pakai nomor khusus bot. 4. Bisa untuk bisnis di luar Lombok? Bisa, seluruh Indonesia & luar negeri. 5. Apakah bisa untuk Toko Bangunan yang produknya banyak? Bisa, kami buatkan katalog.
Untuk customer luar negeri: Support bilingual Indonesia + Inggris, mata uang bisa IDR / USD.

### 2. WA BOT + AI ADMIN - /layanan/wa-bot-ai-admin
Target: Bisnis yang chat-nya numpuk.
Contoh penggunaan yang HARUS disebutkan:
- Restoran Pizza: Customer tanya "Pizza ini pakai pork atau beef? Saya vegetarian, bisa makan apa? Ingredient-nya apa?" Bot jawab dari database menu.
- Toko Bangunan: Customer tanya "Semen Tiga Roda ready gak? Harga per sak berapa?" Bot jawab dari katalog.
- Toko Roti: Customer tanya "Roti coklat masih ada? Bisa order untuk besok?" Bot jawab stok + pre-order.
Masalah: 1. Chat numpuk, balesin satu-satu capek 2. Customer chat jam 11 malam, tidak dibalas, pindah ke kompetitor 3. Banyak chat hanya nanya harga, buang waktu
Flow Cara Kerja:
Langkah 1: Customer chat ke WhatsApp bisnis
Langkah 2: Sistem cek: Ini nanya harga / order / lokasi / jam buka / ingredient / stok?
Langkah 3: Bot jawab pakai data asli dari bisnis (harga dari database, bukan ngarang)
Langkah 4: Kalau order besar / pertanyaan aneh / di luar topik bisnis, bot lempar ke owner (manusia)
Yang Didapat: Balas Otomatis 24 Jam, Guardrail (Bot hanya bahas bisnis tersebut, tolak topik lain), Sistem Hemat AI (3 lapis: Keyword + Cache + AI), Limit Anti-Spam, Log Semua Chat, Notif ke Owner kalau ada order besar
Harga: Rp 150.000 / bulan (sudah termasuk AI)
FAQ: 1. Apakah bot bisa ngaco jawab topik lain? Tidak, bot dikunci hanya bahas bisnis tersebut. 2. Kalau bot tidak mengerti? Dilempar ke owner. 3. Apakah AI-nya cepat habis limit? Tidak, kami pakai sistem 3 lapis jadi hemat. 4. Bisa bahasa Inggris? Ya, otomatis menyesuaikan bahasa customer.

### 3. GOOGLE MAPS + SEO LOKAL / GEO - /layanan/google-maps-seo
Target: Semua bisnis yang punya lokasi fisik.
Contoh: Restoran Pizza di Mataram harus muncul saat orang cari "Pizza terdekat", Toko Bangunan harus muncul saat orang cari "Toko bangunan terdekat", Toko Roti harus muncul saat orang cari "Toko roti terdekat".
Masalah: 1. Bisnis tidak muncul di Google Maps 2. Foto di Maps jelek, review sedikit 3. Customer nanya ke AI "bisnis terdekat", AI menyarankan kompetitor
Flow: 1. Audit Maps 2. Betulkan nama, alamat, jam buka, foto, deskripsi 3. Setup sistem minta review otomatis 4. Bisnis muncul di pencarian "terdekat" + di jawaban AI
Yang Didapat: Audit Maps Gratis, Optimasi Profil, Upload Foto, Sistem Minta Review, Keyword Lokal, Laporan Bulanan
Harga: Rp 300.000 (setup sekali) + Rp 100.000 / bulan
FAQ: 1. Berapa lama muncul? 7-14 hari. 2. Apakah garansi ranking 1? Tidak ada yang bisa garansi, tapi peluang naik 3x lipat. 3. Apakah harus punya website? Tidak wajib, tapi lebih bagus kalau ada.

### 4. WEBSITE UMKM - /layanan/website-umkm
Target: UMKM di seluruh Indonesia.
Contoh yang HARUS disebutkan: Website untuk Restoran Pizza (menu + order), Website untuk Toko Bangunan (katalog semen, cat, dll), Website untuk Toko Roti (katalog roti + pre-order), Website untuk Laundry, Website untuk Rental.
Masalah: 1. Tidak punya website, kelihatan tidak serius 2. Bikin website di agency lain mahal 5-10 juta 3. Website lama loading lama, tidak ada tombol WA
Flow: 1. Kamu kirim foto + harga + lokasi via WA 2. Kami bikinkan dalam 1-3 hari 3. Kamu cek, revisi 2x gratis 4. Website live + tombol WA jalan
Yang Didapat: 1 Halaman Cepat, Tombol WA, Foto + Harga, Google Maps Embed, Mobile-Friendly, Revisi 2x Gratis
Harga: Rp 750.000 (sekali bayar)
FAQ: 1. Apakah dapat domain? Ya, .com / .id. 2. Berapa lama? 1-3 hari. 3. Bisa update harga sendiri? Ya, kami ajarin.

### 5. COMPANY PROFILE & LANDING PAGE - /layanan/company-profile
Target: PT, CV, Startup, Toko Bangunan besar, Resto yang mau pitching ke korporat / investor.
Contoh: Toko Bangunan yang mau ikut tender proyek, Restoran Pizza yang mau buka cabang / cari investor.
Masalah: 1. Mau ikut tender / pitching, tapi tidak punya company profile 2. Instagram saja tidak cukup, klien korporat mau lihat website 3. Company profile lama bentuknya PDF, tidak ada yang baca
Flow: 1. Briefing 30 menit via WA / Zoom (Indonesia / Inggris) 2. Kami bikin struktur + copywriting 3. Desain + revisi 4. Live + domain
Yang Didapat: Desain Premium, Copywriting, Section Tentang + Layanan + Testimoni, Form Kontak, Domain .com, SEO Dasar
Harga: Rp 1.200.000 (sekali bayar)
FAQ: 1. Bedanya dengan Website UMKM? Ini lebih lengkap, ada profil perusahaan, visi misi, portofolio. 2. Bisa untuk PT / CV? Bisa. 3. Berapa halaman? 3-5 halaman.

### 6. E-COMMERCE / TOKO ONLINE - /layanan/e-commerce
Target: UMKM yang jualan produk fisik.
Contoh yang HARUS disebutkan: Toko Bangunan (jual cat, semen, alat), Toko Roti (jual roti + bahan kue), Toko Kelontong / Frozen Food.
Masalah: 1. Jualan di marketplace dipotong 5-10% + admin 2. Tidak punya data customer 3. Mau bikin toko online tapi tidak ngerti coding
Flow: 1. Kamu kirim katalog produk (foto + harga + stok) 2. Kami input ke toko online kamu 3. Customer pilih produk -> Checkout via WA 4. Kamu kirim pesanan, customer bayar via QRIS / Transfer
Yang Didapat: Katalog Produk, Keranjang, Checkout WA, Payment QRIS, Ongkir Manual, Dashboard Order
Harga: Rp 2.000.000 (setup) + Rp 200.000 / bulan
FAQ: 1. Apakah bisa COD? Bisa. 2. Berapa produk maksimal? 50 produk di awal. 3. Apakah bisa untuk customer luar negeri? Bisa, support USD + Inggris.

### 7. VILLA MANAGEMENT + DIRECT BOOKING - /layanan/villa-management
Target: Owner Villa / Homestay / Guesthouse di Bali, Lombok, Asia Tenggara, termasuk owner dari luar negeri.
Masalah: 1. Villa kosong, tidak tau cara promosi 2. Booking masuk dari Airbnb, dipotong 15-20% 3. Tidak ada waktu balesin chat tamu bule jam 2 pagi
Flow: 1. Kami foto + bikin website villa (Indonesia + Inggris) 2. Setup Direct Booking + Kalender Booking 3. Bot balesin chat tamu (Bilingual) + hitung total + kirim payment link 4. Laporan bulanan ke owner
Yang Didapat: Website Villa, Kalender Booking, Bot Bilingual, Laporan Bulanan, Koordinasi Cleaning & Laundry, Harga Dinamis Musim
Harga: Rp 500.000 / bulan atau 10% dari booking langsung (pilih salah satu)
FAQ: 1. Apakah saya harus keluar dari Airbnb? Tidak, ini tambahan channel. 2. Apakah bot bisa bahasa Inggris? Ya, bilingual. 3. Area mana saja? Seluruh Indonesia + Asia Tenggara.

## ATURAN KERAS FLOW - JANGAN DILANGGAR

- Jangan ubah nama layanan, urutan, atau slug URL di atas.
- Jangan gabungkan 2 layanan dalam 1 page. 1 layanan = 1 page.
- Jangan ubah target market menjadi hanya Lombok. Target selalu Indonesia + Luar Negeri.
- Jangan hanya menulis contoh Villa dan Laundry. Wajib menulis contoh Restoran Pizza, Toko Bangunan, Toko Roti, dan contoh UMKM lain di daftar di atas di setiap page yang relevan.
- Jangan tambahkan klaim "Nomor 1 di Lombok".
- Semua CTA harus ke WhatsApp dengan pesan sesuai layanan.
- Setelah selesai, berikan checklist: Apakah 7 page sudah dibuat? Apakah dropdown berisi 7 item sesuai urutan? Apakah semua contoh bisnis (Pizza, Bangunan, Roti) sudah masuk? Apakah semua link WA sudah benar?
- Kerjakan bertahap: Langkah 1: Dropdown + Halaman Induk /layanan. Tunggu konfirmasi saya. Baru lanjut ke Page 1, Page 2, dst. Jangan kerjakan 7 page sekaligus dalam 1 kali jalan.