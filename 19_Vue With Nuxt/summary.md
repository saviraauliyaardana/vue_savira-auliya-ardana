# 19 Vue With Nuxt
## Resume

Dalam materi ini mempelajari:
1. Pengenalan Nuxt
2. Struktur Direktori Nuxt
3. Nuxt SSG & SSR
4. SEO Meta
5. PWA

### Pengenalan Nuxt
Nuxt adalah kerangka kerja yang dibangun diatas Vue yang membuat pengembangan web menjadi sederhana dan ampuh

Cara Kerja Nuxt
- Inisiasi 
    Untuk membuat sebuah aplikasi baru jalankan perintah:

    ```bash
    npx create-nuxt-app <nama-proyek>
    //atau
    npx create-nuxt-app     ./ --overwrite-dir
    ```
- Jalankan Aplikasi
    Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script di dalam package.json

    ```bash
    npm run dev
    ```
### Struktur Direktori Nuxt
Perbedaan struktur direktori dengan Vue

|   Vue   |   Nuxt   |
|---------|----------|
| Src     | Pages    |
| Public  | Static   |
| Views   | Layouts  |
| Router  |

- Pages
    Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori/pages langsung terhubung menjadi path halaman

    ![](https://drive.google.com/uc?export=view&id=1bzbwAXx1-xKvqolGnLXwRMv1eURGSmER)

- Layouts
    Setiap file di direktori/layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman

    ![](https://drive.google.com/uc?export=view&id=1oLXxnZTHkL91C4A2rTqVUB7zAFP5Payz)

- Static
    Semua file yang disertakan akan secara otomatis diekspose oleh Nuxt dan dapat diakses melalui URL root proyek

    ![](https://drive.google.com/uc?export=view&id=1BPUMBzyVzMpyiOn-b-njJ0pgHcA1SyxH)


### Nuxt SSG & SSR
SSG (Static Site Generation) adalah metode pengembangan yang lebih cocok untuk digunakan pada situs web yang tidak memiliki halaman dinamis

Cara Kerja SSG 
Ketika sebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist,kemudian disuguhkan oleh server dan dapat diakses per masing-masing file HTML

![](https://drive.google.com/uc?export=view&id=1menK2fUN236-7Mk_ptE2iiFLofh4n_AI)

Implementasi SSG
jalankan perintah ```npm run generate``
Hasilnya berupa direktori/dist yang kemudian dapat di deploy ke Static Hosting
```bash
export default{
    target: 'static',
}
```

SSR (Server Side Rendering) adalah metode pengembangan solusi terbaik untuk digunakan pada sebuah proyek dimana halaman dibuat secara real time,yaitu melalui panel admin, misalnya halaman blog dan e-commerce

Cara Kerja SSR
Server yang dibangun kedalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, misalnya melalui API

![](https://drive.google.com/uc?export=view&id=1aJxleuhS1zTyY_n4KPtS0ybJxIYP44Uq)

Implementasi SSR
Jalankan perintah ```npm run build```
Hasilnya berupa direktori /.Nuxt yang kemudian dapat di deploy ke NodeJS server
```bash
export default{
    target: 'server',
}
```

### SEO Meta
SEO (Search Engine Optimization) yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin pencari. Sedangkan SEO Meta tag adalah tag tak terlihat didalam ```<head>``` yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web

Cara Kerja SEO Meta
SEO Meta Tag dapat diterapkan dari Nuxt untuk pengaturan global yaitu konten head akan sama disetiap halaman aplikasi
nuxt.config.js
```bash
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'my website desciption' 
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ...
}
```

Sedangkan untuk mengubah data head dari komponen individu:
```bash
<template>
    <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Home page'
      }
    },
    head () {
      return {
        title: this.title,
        meta:[
            {
             hid: 'description', 
             name: 'description', 
             content: 'Home page desciption'    
            }
        ]
      }
    }
  }
</script>
```

SEO Meta Tag Penting
- Informasi dasar: title dan description
- Identitas unik dengan lin canoncial
- Informasi untuk media sosial, open graph:
    - og:title
    - og:descrption
    - og:image

SEO didalam Body Tag
- judul: h1
- Text alteratif untuk gambar : alt

SEO Lainnya
- Peta indexing: sitemp
- Pengaruh crawler: robots.txt

### PWA
PWA (Progressive Web Apps) dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan,keandalan dan kemudahan pemasangan sekaligus menjangkau siapa saja, dimana saja, diperangkat apa pun dengan basis kode tunggal

Cara Kerja PWA
- Web App Manifest
- Service Workers
- Icon
- Disajikan melalui protokol HTTPS

Implementasi PWA
```bash
"dependencies": {
    "@nuxtjs/axios": "^5.13.6",
    "@nuxtjs/pwa": "^3.3.5",
    "core-js": "^3.15.1",
    "nuxt": "^2.15.7",
    "vuetify": "^2.5.5"
},
```
```bash
export default{
// PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Frontend Vue',
      short_name: 'FE Vue',
      lang: 'id',
      useWebmanifestExtension: false,
      start_url: '/',
      theme_color: '#ff6666',
    },
  },
  ...
}
```

## Task
Revaktor aplikasi berita pada latihan materi Vue UI Framework menggunakan Nuxt dan tambahkan fitur PWA

Output:
![](https://drive.google.com/uc?export=view&id=1kQcmcro7ujI55lXJ3AS6WpahndyOFELZ/)
