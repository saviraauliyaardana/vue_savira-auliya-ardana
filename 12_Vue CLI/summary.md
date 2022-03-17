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
    "
}
```
```bash
```
Perkakas Penting
Sebelum masuk ke Vue Single File Component, ada beberapa perkakas yang penting untuk membantu proses pengembangan pada VSCode

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
  Memuat sintaks CSS. Juga dapat
- Style
  
### Vue Struktur Folder