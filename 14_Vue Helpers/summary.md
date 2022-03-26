# 14 Vue Helpers
## Resume

Dalam materi ini mempelajari:
1. Navigasi Pada Vue
2. Layout Template Vue
3. Penyimpanan Global
4. Penyimpanan Global Permanen

### Navigasi Pada Vue
Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain. Pada dasarnya, Vue adalah Single Page Application yang berarti hanya ada satu entry halaman HTML saja namun konten dari halaman HTML tersebut dirender ulang (dengan bantuan javascript) sehingga seolah-olah berganti halaman.

Cara Vue Melakukan Navigasi
Untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada. Seperti jika ingin berpindah dari halaman home ke about maka harus mengetik manual di address bar :/about. Cara yang lebih layak sediakan opsi kontroler pengguna untuk mengakses halaman tersebut dengan link atau tombol seperti berikut:
```bash
<router-link to="/about">About</router-link>
<!--atau-->
<a href="/about">About</a>
```
Macam jenis redireksi:
```bash
this.$router.push('/user')
this.$router.replace('/user')

this.$router.go(-1); //back
this.$router.go(1); //forward
```
Params dan Query:
```bash
this.$router.push('/user'); // /user

const userId =123; // /user/123
this.$router.push({name: 'user', params: {userId: userId}});
this.$router.push({path: '/user/${userId}'});

this.$router.push({path: 'register', query: {plan: 'private'}}); // /register?plan=private
```
Navigasi Beranak adalah sub-path dari path yang ada.
```/user/setting/privacy```
    - user => induk dari setting
    - setting => anak dari user dan induk dari privacy
    - privacy => anak dari setting
Navigasi Dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu persatu.
```/user/123456131237```
    - user => navigasi statis (path didefinisikan manual sebagai /user)
    - 123456131237 => navigasi dinamis (path tidak didefinisikan sesuai nilainya, namun sesuai key parameter /user/:id)

### Layout Template Vue
Layout Template adalah susunan tata letak, Layout Template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.
    - Layout : memuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer.
    - Halaman : memuat komponen yang berubah-ubah sesuai konten halaman, namun tidak perlu lagi menyertakan navbar disetiap komponen view halaman.
Layout juga dapat diterapkan untuk mengisolasi logika tampilan viewport supaya kode di setiap halaman tetap bbersih dan efisien.

Cara Kerja Layout Template
layout hanya komponen biasa, yang membedakan adalah layout dapat meneruskan konten dari anak komponennya.
```bash
<router-view />
//atau
<router-view></router-view>
```

Direktori Layout
Umumnya layout memiliki direktori terpisah sejajar dengan direktori router atau sejajar dengan direktori view.

Membuat dan Menggunakan Layout
jika memiliki 3 path, langkah pertama adalah membuat komponen layoutnya. Buatlah kontroler navigasinya dengan menambahkan ```<router-view />```
```bash
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
    ]
  },
];
```
### Penyimpanan Global
Penyimpanan Global adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah diseluruh bagian aplikasi.
- State Komponen (Hanya tersimpan dan valid pada satu komponen saja)
- Props (Hanya tersimpan dan valid di induk atau anak komponen saja)
- Store (Tersimpan dan Valid dibagian manapun dari aplikasi)

Penyimpanan Global dengan Vuex
Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js.

Vuex dan Cara Kerjanya
yaitu dengan melakukan penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara terstruktur dan terprediksi

Membuat dan Menggunakan Vuex
Untuk membuat store dengan Vuex dapat menggunakan sintaks sebagai berikut, kemudian sisipkan store ke dalam inisiasi Vue yang ada di main.js
```bash
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```
Direktori Vuex Store
Umumnya Vuex store memiliki direktori sendiri bernama store yang sejajar dengan direktori main.js. Biasanya direktori store juga menyimpan modul-modul store untuk pengelompokan state agar lebih rapi dan terstruktur.

Mutation hanya bertujuan untuk mengubah nilai variabel yang ada didalam store tanpa ada logika pengolahan muatan didalam fungsi mutation tersebut.
- Vuex Mutations
  ```bash
  store.commit("setAngka", this.newInputValue);
  ```
  - commit => key untuk melakukan mutation
  - setAngka => nama mutation
  - this.newInputValue => Payload/mutation
- Vuex Actions
   ```bash
  store.dispatch("changeAngkaValue", this.newInputValue);
  ```
    - dispatch => Key untuk melakukan action
    - changeAngkaValue => Nama action
    - this.newInputValue => Payload/mutation

### Penyimpanan Global Permanen
Nilai yang ada didalam Vuex store akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang. Karena nilai state yang ada di store disimpan didalam memory instance.

Penyimpanan Global Permanen merupakan sebuah konsep mempermanenkan state yang ada di store supaya tidak hilang jika halaman dimuat ulang.

Penyimpanan Permanen dengan Vuex-persistedstate
Vuex-persistedstate dapat mempertahankan dan rehidrasi Vuex State di antara permuatan ulang halaman, dengan menyimpannya di localstorage atau di dalam cookies.
Contoh:
```bash
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "./user";
import demo from "./demo";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["demo"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    demo: {
      namespaced: true,
      ...demo,
    },
    user: {
      namespaced: true,
      ...user,
    },
  },
});
```
## Task
Pada task ini membuat sebuah todo list dengan menggunakan komponen file tunggal dengan kondisi dan contoh visual yang sudah ditentukan sebagai berikut:
1. Input todo yang lebarnya memenuhi layar

   Output:
   ![](https://drive.google.com/uc?export=view&id=12u5ikZv6yWSjTG_SDuYI-ogAO8EMTvym)
   
2. Masing item memiliki tombol hapus dan edit dengan fungsionalitasnya
   
   Output:
   ![](https://drive.google.com/uc?export=view&id=1SnmYfqOB6dwGMulF-J3JmwXAxtv8kPuM)
   
    - Tampilan ketika tombol edit ditekan, simpan perubahan setelah tombol edit ditekan kembali
      
      Output:
      ![](https://drive.google.com/uc?export=view&id=1YhGIiwOiyTGtkO7hXt8xIjrFPAtmYEkR)
      
    - Jika tombol hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan
      
      Output:
      ![](https://drive.google.com/uc?export=view&id=1KgIL8pfDCCb96YKPQgN6cr2Q4pNaB-jh)
      
3. List tidak boleh hilang meskipun halaman dimuat ulang
    
    Output:
    ![](https://drive.google.com/uc?export=view&id=1KgIL8pfDCCb96YKPQgN6cr2Q4pNaB-jh)

4. Jika judul salah satu di klik, maka navigasi ke halaman detail
    Output:
    ![](https://drive.google.com/uc?export=view&id=1tUYXF9nl--Cju7IfGYvuNGgUR8wh8Z2L)
    
      

