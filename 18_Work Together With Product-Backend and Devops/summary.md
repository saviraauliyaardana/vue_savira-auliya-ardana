# 18 Work Together With Product-Backend and Devops
## Resume

Dalam materi ini mempelajari:
1. Tim Produk
2. Tim Backend
3. Tim Devops
4. Deployment

### Tim Produk
Tim Pengembangan Produk adalah sekelompok orang yang mengawasi proses desain produk baru. Setiap anggota berkolaborasi dengan yang lain untuk membuat dan menerapkan strategi

Tim Produk terdiri dari
- Product Management (PM) 
    Manajemen produk melibatkan penciptaan visi pengembangan strategi dan penerapan rencana untuk produk/fitur baru.
- User Experience (UX)
    Profesional UX memantau bagaimana pengguna berinteraksi dengan produk dengan membuat draf produk, melakukan penelitian, dan menguji kegunaan.
- User Interface (UI)
    Membangun antarmuka dengan fokus pada gaya dan interaktivitas. Tujuan perancang UI adalah untuk membuat antarmuka yang menurut pengguna mudah digunakan dan menyenangkan secara estetika.

Artefak Tim Produk
- Product Management (PM) => product requirements document
- User Interface (UI) => desain tampilan

Tools yang dipakai yaitu Figma, Zeplin, dan Adobe XD

### Tim Backend
Pengembangan Back-end mengacu pada pengembangan sisi server. Berfokus pada database, scripting dan arsitektur situs web.
Kode yang ditulis oleh pengembang back-end membantu browser untuk berkomunikasi dengan informasi database

Artefak Tim Backend
- API Endpoint
- Dokumentasi API

Tools yang dipakai yaitu Swaggerhub dan Postman 

### Tim Devops
Tim Devops adalah tim yang bertujuan untuk mempersingkat siklus hidup pengembangan sistem dan menyediakan pengiriman berkelanjutan dengan kualitas perangkat lunak yang tinggi. Tim devops membantu proses deployment.

Tool yang dipakai
- Tanpa perkakas
    Langsung meghubungkan kode dengan server host
- Docker
    Perkakas untuk mengisolasi dan menyeragamkan versi dependensi sebagai sebuah kontainer
- Travis CI/Github Actions
    Perkakas integrasi kontinyu yang secara otomatis menjalankan serangkaian tes/prosedur sebelum deployment

### Deployment
Deployment adalah kegiatan yang merupakan untuk mengembangkan aplikasi atau website yang tidak bisa lepas dari kegiatan para programmer.
Deployment dapat dilakukan dengan menggunakan website:
- SSG (Static-Site Generating) => Netlify
- SSR (Server-Side Rendering) => Heroku

## Task
Deploy aplikasi berita pada latihan materi Vue UI Framework menggunakan Netlify atau Heroku. Pastikan nama halaman tidak random dan halaman tidak rusak ketik dimuat ulang

Output:
[link deploy](https://6251261e3799d4626dd32bd7--fastidious-bubblegum-c363b6.netlify.app/)