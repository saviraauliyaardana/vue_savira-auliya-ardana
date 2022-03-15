# 10 Frontend Fundamental
## Resume

Dalam materi ini mempelajari:
1. HTML
2. CSS
3. Javascript
4. Node.js
5. NPM (Node Package Manager)
6. Git

### HTML
Singkatan dati Hypertext Markup Language. Bahasa markup standar untuk membuat dan menyusun halaman pada aplikasi web

Cara kerja HTML
    File HTML diakhiri dengan ekstensi .html atau .htm, ekstensi tersebut bisa dirender dengan menggunakan web browser apapun (seperti Google Chrome, Safari, atau Mozila Firefox)

HTML Tag
    Sebuah file HTML terdiri atas serangkaian tags (bisa disebut juga elements). Sebagian besar elemen bahasa markup ini memiliki tag pembuka dan penutup yang menggunakan syntax ```<tag></tag>```. Sisanya memiliki syntax penutup sendiri ```<input/>``` dan juga komentar ```<!--komentar-->```.
    Tag HTML memiliki dua tipe utama yaitu block-level dan inline tags. Tiga tag block-level yang harus dimiliki oleh setiap dokumen HTML adalah
    1. ```<html>```
    2. ```<head>```
    3. ```<body>```

### CSS
Singkatan dari Cascading Style Sheets. CSS dipakai untuk mendesain halaman depan atau tampilan website. CSS menangani tampilan dan 'rasa' dari halaman website

Cara kerja CSS
    CSS membuat style didalam halaman web yang dapat berinteraksi dengan element HTML

Macam CSS didalam kode HTML
    - Inline CSS
        ```bash
        <h1 style=”font-size:20px; color:mediumblue;”> Hello World</h1>
        ```
    - Eksternal CSS
        ```bash
        <head>
            <link rel=”stylesheet” type="text/CSS" href=”fileCSSAnda.css”>
        </head>
        ```
    - Internal CSS
        ```bash
        <head>
            <style>
	            body {background-color: blur;}
	            p { font-size: 20px color: mediumblue; }
            </style>
        </head>
        ```

Media Queries
    Media query merupakan modul CSS yang berguna membuat layout kita responsive dengan menyesuaikan tampilan berdasarkan ukuran layar perangkat

### Javascript
Javascript adalah script yang membuat halaman web menjadi hidup, yang memungkinkan adanya interaksi dengan pengguna. Javascript bisa ditulis langsung kedalam kode HTML dari sebuah web dan berjalan otomatis saat halaman dimuat. Sekarang Javascript bisa berjalan tak hanya pada browser, tapi juga di server, atau diperangkat manapun yang memiliki program khusus Javascript engine

Cara Kerja Javascript
    Bisa langsung menambahkan Javascript di HTML dengan menggunakan tag ```<script></script>```. Kode Js yang bisa ditambahkan:
    - diantara tag ```<head>```
    - diantara tag ```<body>```
  
Pengetahuan Dasar
- Variabel
    wadah untuk menyimpan atau mengingat sebuah nilai
- Operasi Matematika
    memungkinkan untuk melakukan penambahan, pengurangan, perkalian, dll terhadap variabel dan angka
- Fungsi
    wadah untuk menyimpan logika atau algoritma yang dapat digunakan lagi dengan praktis
- Kelas
    sebuah fungsi khusus yang bisa dipakai sebagai template untuk membuat obyek dengan mudah
- Kondisi
    sebuah logika pemisah antara dua nilai, true dan false
- pengulangan
    untuk melakukan pengulangan sesuai syarat kondisi yang ditentukan
- pengulangan - ForEach
- pengulangan - Map
- pengulangan - Filter

Aturan nama
- Variabel
- Fungsi
- Kelas

### Node.js
Node.js adalah Runtime environment untuk javascript. Dengan Node.js kita dapat menjalankan kode javascript dimanapun, tidak hanya terbatas pada lingkungan browser

Cara kerja Node.js
Node.js akan melakukan eksekusi atau menjalankan file yang memiliki ekstensi js

Cara Pasang Node.js
kunjungi website resmi nodejs.org kemudian navigasikan ke halaman download dan jalankan sesuai instruksi

### NPM (Node Package Manager)
Tool ini merupakan command line yang dapat menginstall dan meng-uninstall package, mengelola versi dan dependensi yang diperlukan untuk menjalankan proyek.

Cara pasang NPM
    NPM otomatis terpasang ketika menginstall Node.js. untuk memastikannya dapat menggunakan cara
    ```bash
    $ node -v
    $ npm -v
    ```
Cara kerja NPM
    NPM bekerja untuk mengatur package pada proyek yang berjalan dengan node.js. Package pada node.js memuat semua file yang dibutuhkan sebagai module. Module adalah library javascript yang dapat kita masukkan ke dalam proyek.

Struktur proyek NPM
    untuk membuat proyek aplikasi, jalankan perintah berikut kemudian tekan enter untuk semua pertanyaan dibawahnya
    ```bash
    $ npm init
    ```
    sebuah file bernama package.json akan muncul pada direktori proyek.
    Key yang penting untuk diingat :
    - name adalah nama proyek
    - scripts adalah daftar perintah yang bisa dijalankan didalam proyek
        contoh : npm run test
    - dependencies adalah daftar library yang dipakai di proyek ketika      production
    - devDependencies adalah daftar library yang dipakai di proyek ketika tahap pengembangan

Menambahkan Dependensi
untuk menambahkan dependensi dapat dengan menjalankan perintah
```bash
$ npm install <nama module>
$ npm install <nama module> -D
```
setelah berhasil, pada direktori proyek akan ditambahkan file :
- package-lock.json, untuk menyimpan informasi isi dan versi node_modules
- node_modules, untuk menampung library yang telah didownload dan siap digunakan di aplikasi

Memasang Dependensi
node_modules memiliki ukuran yang relatif besar, jika ketika akan memberikan proyek ke penyimpanan atau rekan maka node_modules umumnya dihapus. Jadi untuk mendapatkan node_modules kembali berdasarkan informasi dari dependencies dan devDependencies di package.json hanya perlu menjalankan
```bash
$ npm install 
```

### Git
Git adalah salah satu sistem pengontrol versi pada proyek perangkat lunak. pengontrol versi bertugas untuk mencatat setiap perubahan pada file proyek yang dikerjakan.

Cara kerja Git
Git memantau semua perubahan yang terjadi pada file proyek, lalu menyimpannya ke dalam database. Git memiliki 3 area kerja 
    1. Working Directory
    2. Staging Area
    3. Repository

Kata kunci penting pada Git
    1. Modified
        file yang telah di rubah, perubahan tercatat dan dapat dibandingkan dengan versi commit sebelumnya
    2. Staged
        file yang telah di modified dan telah di add, file ini akan menjadi commit selanjutnya
    3. Commit
        mengambil berkas-berkas yang ada pada staging area dan menyimpan snapshot tersebut secara tetap ke dalam direktori Git
    4. Branch
        cerminan direktori Git

## Task
1. membuat kode CSS yang akan menampilkan sebuah kotak warna warni seperti yang ada pada contoh dengan hanya menggunakan tag HTML yang ditentukan di dalam body.
    - jika lebar kurang dari 600px
        output :
        ![](https://drive.google.com/uc?export=view&id=1piLPtOwxe4ujfgnAeVMe4KZqU6A0GCRM)

    - jika lebar lebih dari atau sama dengan 600px dan kurang dari 960px
        output :
        ![](https://drive.google.com/uc?export=view&id=1tS41ksw4blOoF_JhDfKHE6RNi8L3FZ-G)

    - jika lebar lebih dari atau sama dengan 960px
        output :
        ![](https://drive.google.com/uc?export=view&id=1P7BXXHQzIOPOBpOGY8i4P7LuZ1V7zB2x)

2. membuat repository baru dan buat sebuah branch yang bernama "latihan-materi-1" berisi latihan yang sebelumnya kemudian push ke Github
   