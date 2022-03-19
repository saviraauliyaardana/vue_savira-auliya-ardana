# 12 Vue CLI (Command Line Interface)
## Resume

Dalam materi ini mempelajari:
1. Vue CLI
2. Vue Komponen File Tunggal
3. Vue Struktur Folder

### Vue CLI (Command Line Interface)
Vue-CLI adalah perkakas standar untuk memudahkan penyetelan/pembuatan aplikasi Vue baru.
Webpack adalah sebuah module bundler, digunakan untuk menggabungkan seluruh modul project aplikasi berupa file javascript, HTML, CSS, gambar dan  lain-lain menjadi satu file (tipe yang sama)
Cara kerja Vue CLI
- Pasang Vue CLI
Untuk memasang Vue CLI pada perangkat jalankan perintah:
  ```bash
  $ npm install -g @vue/cli
  ```
Untuk memastikan Vue CLI sudah terpasang dengan baik, jalankan perintah:
  ```bash
  $ vue --version
  ```
- Inisiasi Aplikasi
Untuk membuat sebuah aplikasi baru jalankan:
  ```bash
  $ vue create <nama aplikasi>
    //atau//
  $ vue create .
  ```
- Jalankan Aplikasi
Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script didalam package.json

```bash
"scripts":{
    "serve": "vue-cli-service serve",
    "serve": "vue-cli-service build",
    "Lint": "vue-cli-service lint",
}
```

```bash
$ npm run serve
```

Setelah selesai melakukan proses kompilasi dan tidak ada error, akan ada log informasi alamat aplikasi kita dapat diakses. Jika didalam direktori aplikasi kita tidak terdapat node_modules atau isinya tidak mutakhir, perlu melakukan perintah berikut:
```bash
$ npm install
```
Baru bisa melakukan proses kompilasi tanpa error
```bash
npm run serve
```

Perkakas Penting
Sebelum masuk ke Vue Single File Component, ada beberapa perkakas yang penting untuk membantu proses pengembangan pada VSCode antara lain yaitu:
- Highlighter/Penyorot (Vetur)
  Penyorot sintaks adalah perkakas untuk memberikan warna pada kodingan sesuai dengan setelan/peraturan dari ekstensi berkas yang digunakan.
- Linter (ESLint)
  Linter adalah alat yang memindai kode secara terprogram dengan tujuan menemukan masalah yang dapat menyebabkan bug atau ketidak konsistenan dengan standar yang berlaku.
- Code Formatter (Prettier)
  Code Formatter adalah perkakas untuk membantu menyeragamkan gaya kode yang kita tulis. Dapat mengubah secara otomatis gaya kode yang ditulis sesuai dengan pengaturan yang berlaku ketika kita menyimpan file
- Git Inspector (GitLens)
  Git Inspector adalah perkakas yang dapat mengetahui versi atau commit yang ada untuk setiap baris kode. Perkakas ini sangat membantu ketika berkolaborasi dengan rekan tim.

### Vue Komponen File Tunggal
Komponen File Tunggal memungkinkan kita membangun seluruh komponen (struktur, gaya, dan fungsi) dalam satu file. Dan sebagian besar editor kode menyediakan penyorotan sintaks dan linting. Komponen file tunggal memiliki ektensi .vue

Cara Kerja Komponen File Tunggal
Terdapat 3 tag utama pada komponen file tunggal yaitu:
```bash
<template>
<script>
<style>
```
- Template
  Sama seperti HTML body, memuat dan me render HTML tag pada umumnya
- Script
  Memuat sintaks CSS. Juga dapat menerima atribut lang yang biasanya untuk penggunaan Typescript
- Style
  Memuat sintaks CSS. Juga dapat menerima atribut lang yang biasanya untuk penggunaan CSS preprosesor seperti Stylus, SCSS. Atribut tambahan lainnya adalah scoped, yang berarti CSS hanya akan diterapkan di komponen ini saja.
  
### Vue Struktur Folder
- Default/Bawaan
- Lanjutan
  lanjutan artinya seiring berkembangnya aplikasi dan bertambah kompleksnya aplikasi, maka susunan direktori bisa berubah sesuai keinginan.

- Assets
  Di direktori asets ini digunakan untuk menyimpan semua file aset. Seperti halnya menyimpan font, ikon, gambar, style, dll.

- Components
  Pada direktori component ini digunakan untuk menyimpan semua file komponen file tunggal Vue.

- Router
  Didalam direktori router ini dapat digunakan untuk menyimpan semua file yang terkait dengan vue-router. Vue-router adalah library untuk mengatur routing alamat aplikasi vue.

- Store
  Store adalah direktori penyimpanan Vuex tempat untuk menyimpan semua file terkait vuex. Vuex adalah library untuk mengatur penyimpanan state berbasis global pada aplikasi vue.

- View
  Isinya mirip seperti direktori componen, yaitu komponen file tunggal namun yang membedakan adalah pada direktori ini digunakan sebagai halaman, dimana file didalam langsung dengan router. Sedangkan file direktori componen berhubungan langsung dengan file di direktori views atau sesama file di folder component.

- Test
  Direktori test berada diluar direktori src, karena direktori ini tidak berhubungan langsung dengan file yang dibutuhkan untuk proses pengembangan. Berisi berkas untuk melakukan unit testing komponen atau fungsi yang ada di dalam direktori src.

## Task
Membuat sebuah Todo list dengan menggunakan komponen file tunggal dengan kondisi dan contoh visual yang sudah ditentukan yaitu:
1. Memiliki sebuah input dan sebuah tombol.
2. Menunjukkan list todo yang telah ditambahkan dan reset (kosongkan) input setelah tombol di klik. Jangan tambahkan ke list jika tekan tombol namun input kosong.
3. jika list yang sudah dimasukkan sama dengan atau lebih besar dari 4 maka tunjukkan kata 'Hebat!' dibawah input.