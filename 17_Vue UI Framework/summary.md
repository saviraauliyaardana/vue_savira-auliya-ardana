# 17 Vue UI Framework
## Resume

Dalam materi ini mempelajari:
1. Pengenalan Rangka UI
2. Vuetify
3. Manajemen Warna Tema
4. Gelap Terang
5. Reaktivitas dengan Kerangka Kerja UI

### Pengenalan Rangka UI
UI Framework adalah kumpulan visual(seperti tombol,ikon dll) dan fungsionalitas yang bisa dipakai secara instan.

Cara Kerja Rangka Kerja UI yaitu Rangka kerja menyediakan komponen siap pakai yang kemudian komponen bisa di impor sesuai dengan komponen yang dibutuhkan ke dalam aplikasi.

Rangka Kerja UI yang tersedia yaitu: Vuetify, BootstrapVue, Ant Design of Vue, Vuesax, Buefy, dls.

### Vuetify
Vuetify adalah library yang memungkinkan untuk membuat aplikasi dengan tampilan yang indah walaupun bukan seorang designer. Vuetify memiliki lebih dari 80 komponen berbasis material design yang mana komponen tersebut dapat membantu lebih cepat dalam pengembangan aplikasi.

Cara Kerja Vuetify yaitu vuetify telah menyiapkan komponen siap pakai yang bisa digunakan di aplikasi yang dibuat. Sebagai contoh, pada komponen tombol
```bash
<v-btn
    color="primary"
    elevation="2"
></v-btn>
```

Dokumentasi Komponen Vuetify dapat diakses melalui halaman resmi vuetify yaitu ```https://vuetifyjs.com/en/```
Penerapan Vuetify
- memasang vuetify sebagai dependency dengan menuliskan perintah ```vue add vuetify```
- mendaftarkan vuetify kedalam berkas entry main.js
    ```bash
    import Vue from "vue";
    import App from "./App.vue";
    import router from "./router";
    import store from "./store";
    import Vuetify from "vuetify";
    import "vuetify/dist/vuetify.min.css";

    Vue.config.productionTip = false;
    Vue.use(Vuetify);

    const vuetify = new Vuetify({

    });

    new Vue({
        router,
        store,
        vuetify,
        render: (h) => h(App),
    }).$mount("#app");
    ```
- ubah app.vue dengan cara Vuetify harus dibungkus dengan v-app untuk dapat berfungsi dengan baik
    ```bash
    <template>
        <v-app id="app">
            <router-view />
        </v-app>
    </template>
    ```
- tambahkan font ke dalam public/index.html
    ```bash
    <link
    href=’https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    rel=”stylesheet” />
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
    ```

### Manajemen Warna Tema
Manajemen Warna Tema adalah pengaturan set warna yang dapat kita terapkan terhadap tampilan di aplikasi

Cara Kerja Manajemen Warna Tema
Vuetify menyimpan warna tema bawaan yang bisa di setel secara manual ketika aplikasi berjalan

### Gelap Terang
Tema Gelap Terang adalah fitur peralihan warna latar belakang aplikasi dari terang ke gelap atau sebaliknya

Cara Kerja Gelap Terang
Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap
```bash
const vuetify = new Vuetify({
  theme: {
    dark: false,    //this.$vuetify.theme.dark
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {        //this.$vuetify.theme.themes.dark
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
```
### Reaktivitas dengan Kerangka Kerja UI
Reaktifitas Viewport adalah perubahan ukuran yang menyesuaikan dengan lebar layar tampilan

Cara Kerja Reaktivitas pada Vuetify
lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut 
![](https://drive.google.com/uc?export=view&id=1Vl0zEe8XUZAzJ1vyrCCKqQAZGkPvwku-)

### Extra
1. Tabel => mempunyai fitur tambahan untuk pagination, filter dan sort
2. Validasi Input => komponen input memiliki props untuk validasi yang cukup canggih, menerima array of functions
3. Skeleton Loader => bisa digunakan untuk membuat loading seperti aplikasi bintang 5
4. Dialog => untuk membuat pop-up dialog 

## Task
Merevaktor aplikasi berita pada latihan vue data menggunakan Vuetify dan menambahkan fitur menu pilihan kategori dan juga pencarian

Output:
![](https://drive.google.com/uc?export=view&id=1t0H2LqaXSnQLaS6Hok7LGL-66v2962BS)