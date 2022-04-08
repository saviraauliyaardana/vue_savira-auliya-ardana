# 16 Vue Quality Control
## Resume

Dalam materi ini mempelajari:
1. Debugging
2. Unit Testing
3. Jest
4. Matriks Ukur Kinerja
5. Mengoptimalkan Kinerja

### Debugging
Debugging adalah proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak komputer

Cara Kerja Debugging
1. Identifikasi Kesalahan
2. Indentifikasi solusi

Perkakas untuk Identifikasi Kesalahan
- Devtools
- Consoles
- Logs

Tips Identifikasi Kesalahan
- Tenang dan fokus
- Rasional dan kontekstual
- Perhatian yang detail untuk petunjuk sekecil apapun
- Tidak tergesa-gesa untuk bertanya

Sumber Identifikasi Solusi
- Diri Sendiri (Pengetahuan dan pengalaman)
- Rekan Kerja (Peer,Senior atau leader)
- Google (Dokumentasi, Stackoverflow, Isu Repository, Blog/Vlog tutorial, dll.)
- Komunitas (Forum, Telegram, Discord, Media Sosial, dll)

### Unit Testing
Unit Testing adalah proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi

Cara Kerja Unit Testing
Unit Testing memberikan kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk Test Assertion. Test Assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada kesalahan atau perilaku yang tidak diharapkan pada kode.

Perkakas Unit Testing
Unit Testing pada aplikasi vue umumnya dilakukan oleh pustaka rangka kerja pendukung. Tersedia 2 pilihan library yaitu: Jest dan Mocha

Kenapa Harus Unit Testing?
- Meningkatkan rasa percaya diri
- Meningkatkan standar kode
- Mencegah kesalahan sebelum benar-benar terjadi
- Memberi batasan dan kriteria yang jelas jika melakukan refactor

### Jest
Jest adalah salah satu kerangka kerja untuk melakukan unit testing pada aplikasi yang berbasis javascript

### Matriks Ukur Kinerja
Matriks Ukur Kinerja adalah tolak ukur penting yang menunjukkan informasi seberapa baik kinerja aplikasi

Cara Kerja Matriks Ukur Kinerja
Dengan bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja halaman.

Lighthouse Audit adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web

Mengukur Matriks dengan Lighthouse Audit
Jalankan aplikasi pada peramban Google Chrome, buka Devtools pada tab lighthouse kemudian "Generate Report"

### Mengoptimalkan Kinerja
Mengoptimalkan Kinerja adalah proses untuk meningkatkan kinerja aplikasi web berdasarkan informasi skor matriks ukur

Core Web Vitals
Core Web Vitals adalah kumpulan metrik website yang ditentukan oleh google. Kumpulan metrik ini ditetapkan sebagai bagian dari indikator ranking pencarian terbaru google, yaitu page experience.

3 Indikator Core Web Vitals
1. (loading) 
   LCP (Largest Contentful Paint)
   Berkaitan dengan kecepatan website

2. (interactivity)
   FID (First Input Delay)
   Berkaitan dengan baik atau tidaknya respons elemen halaman website

3. (Visual Stability)
   CLS (Cumulative Layout Shift)
   Berkaitan dengan stabilitas layout halaman website

## Task
Membuat sebuah file pembantu yang berisikan operasi aritmatika yang valid. Kemudian buatlah unit test yang meliputi 100% coverage dari file tersebut

Output:
![](https://drive.google.com/uc?export=view&id=1Ht5rbyLBgACLPvbcRoR4HTlL_xKX0HgF/)
![](https://drive.google.com/uc?export=view&id=143WeXN8X_QUFLxIHtzwqby9Qs7_KubqH/)