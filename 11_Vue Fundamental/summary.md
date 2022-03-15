# 11 Vue Fundamental
## Resume

Dalam materi ini mempelajari:
1. Pengenalan Vue
2. Vue Setup dan Resources
3. Dasar-dasar Vue
4. Vue Directive
5. Events dan Method
6. Computed Properties dan Watchers
7. Component

### Pengenalan Vue

    Vue adalah framework dari javascript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis.

    Kenapa Vue?
        - Mudah membuat aplikasi frontend dan website
        - Mudah dipelajari dan menyenangkan 
        - Dokumentasi yang lengkap dan rapi
        - Ramping dan cepat
    
    **Cara Kerja Vue**
    - Vue CDN
        Vue dapat digunakan langsung di file HTML degan menambahkan perintah : 
        ```bash
        <script src="https://unpkg.com.vue"></script>
        ```
    - Vue CLI
        Menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup/pembuatan aplikasi Vue

### Vue Setup dan Resources

    Yang dibutuhkan Vue Setup dan Resources yaitu:
    - Text Editor 
        [Visual Studio Code](https://code.visualstudio.com/download)
    - Browser 
        [Google Chrome](https://www.google.co.id/intl/id/chrome/)
    Sumber Daya Tambahan
    - Dokumentasi
        [dokumentasi](https://docs.vuejs.id/v2/guide/index.html)
    - Kumpulan contoh resmi
        [contoh resmi](https://awesome-vue.js.org/resources/official-examples.html)
    - Kumpulan contoh lainnya
        [contoh lain](https://awesome-vue.js.org/resources/examples.html)
    - Kumpulan buku
        [buku](https://awesome-vue.js.org/resources/books.html)

### Dasar-dasar Vue
- Vue Instance
    setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue
        ```bash
        var vm = new Vue({
           // option
        })
        ```
- Vue Data Binding
    Vue,js menggunakan sintaks template berbasis HTML yang memungkinkan untuk secara deklaratif mengikat DOM yang dirender ke data instance Vue yang mendasarinya. Ada 3 jenis data binding pada Vue yaitu:
        1. Di Dalam Konten
            Untuk menambahkan text kedalam konten element dapat menggunakan ```kurung kurawal```
            ``` bash
            <span>Message: {{ msg }}</span>
            ```
        2. Di Atribut Elemen
            Untuk menambahkan variabel kedalam atribut elemen dapat menggunakan ```v-bind```
            ```bash
            <div v-bind:id="dynamicId"></div>
            ```
        3. Elemen HTML
            Untuk menambahkan HTML elemen kedalam DOM dapat menggunakan atribut ```v-html```
            ```bash
            <p>Menggunakan v-html directive: <span v-html="rawHtml"></span></p>
            ```
- Vue Reactivity
    Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang.
    ```bash
    var vm = new Vue({
        data: {
            a: 1
        }
    })
    // 'vm.a' adalah reaktiv

    vm.b = 2
    // 'vm.b' adalah tidak reaktiv
    ```
    ```bash
    var vm = new Vue({
        data: {
            // declare message dengan string kosong
            message: ''
        }
    })

    //set 'message' ketika dibutuhkan
    vm.message = 'Hello!'
    ```
### Vue Directive
Directive adalah atribut khusus yang diawali dengan ```v-```. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript didalam atribut.

**Macam Vue Directive**
1. v-bind
    Directive untuk memberitahu Vue kalau kita ingin melakukan one way data binding
    ```bash
    <html>
        <head>
            <title>Belajar Frontend</title>
        </head>

        <body>
            <div id="app">
                <input type="text" v-bind:value="nama" />
                <p>{{ nama }}</p>
            </div>
    
            <script src="https://unpkg.com/vue"></script>
            <script>
                new Vue({
                el: '#app',
                data: {
                    nama: 'vue'
                }
            })
            </script>
        </body>
    </html>
    ```
2. v-model
    Directive untuk memberitahu Vue kalau kita ingin melakukan two way data binding
    ```bash
    <html>
        <head>
            <title>Belajar Frontend</title>
        </head>

        <body>
            <div id="app">
                <input type="text" v-model:value="nama" />
                <p>{{ nama }}</p>
            </div>
    
            <script src="https://unpkg.com/vue"></script>
            <script>
                new Vue({
                el: '#app',
                data: {
                    nama: 'vue'
                }
            })
            </script>
        </body>
    </html>
    ```
3. v-if,v-else dan v-else-if 
    Directive yang digunakan untuk melakukan rendering secara kondisional
    ```bash
    <html>
        <head>
            <title>Belajar Frontend</title>
        </head>

        <body>
            <div id="app">
                <input type="number" v-model:value="angka" />
                <p v-if="angka > 9">Sangat Bagus</p>
                <p v-else-if="angka > 7">Bagus</p>
                <p v-else>Tetap Semangat! Jangan Menyerah :)</p>
            </div>
    
            <script src="https://unpkg.com/vue"></script>
            <script>
                new Vue({
                el: '#app',
                data: {
                    angka: 0
                }
            })
            </script>
        </body>
    </html>
    ```
4. v-on
    Directive untuk memberitahu Vue kalau kita ingin memanggil fungsi
    ```bash
    <html>
    <head>
        <title>Belajar Frontend</title>
    </head>

    <body>
        <div id="app">
            <button v-on:click="lakukanSesuatu">Lakukan Sesuatu</button>
        </div>
    
        <script src="https://unpkg.com/vue"></script>
        <script>
    	    new Vue({
            el: '#app',
            methods: {
                lakukanSesuatu() {
                    alert('Halo Vue');
                }
            }
        })
        </script>
    </body>
    </html>
    ```
5. v-for
    Directive untuk memberitahu Vue kalau kita ingin melakukan pengulangan
    ```bash
    <html>
        <head>
            <title>Belajar Frontend</title>
        </head>

        <body>
            <div id="app">
            <ul>
                <li v-for="buah in listBuah">
                {{ buah }}
                </li>
            </ul>
            </div>
    
            <script src="https://unpkg.com/vue"></script>
            <script>
                new Vue({
                el: '#app',
                data: {
                    listBuah: ['Apel', 'Jeruk', 'Melon']
                }
            })
            </script>
        </body>
    </html>
    ```

**Shorthand Vue Directive**
Khusus untuk v-bind dan v-on dapat disingkat dengan sintaks sperti berikut:
```bash
//tanpa disingkat
<a v-blind:href="url">...</a>
//disingkat
<a : href="url">...</a>

//tanpa disingkat
<a v-on:click="doSomething">...</a>
//disingkat
<a @click="doSomething">...</a>
```
Vue Directive yang Perlu Diingat
1. Direktif Data Binding: v-bind, v-model, v-html, v-text
2. Direktif Conditional Rendering: v-if, v-else, v-else-if
3. Direktif Perulangan: v-for
4. Direktif Event: v-on

### Events dan Method
**Memantau Events**
    Menggunakan direktif v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa javascript saat di picu.
    ```bash
    <html>
      <head>
         <tittle>Belajar Frontend</tittle>
      </head>

      <body>
        <div id="app">
        <button v-on:click="penghitung += 1">Tambah 1</button>
        <p>Tombol ini telah di klik sebanyak {{ penghitung }} kali.</p>
        </div>

        <script src="https://unpkg.com/vue"></script>
        <script>
            new Vue ({
                el: '#app',
                data: {
                    penghitung: 0
                }
            })
        </script>
      </body>
    </html>
    ```

**Menggunakan Methods**
    Methods adalah fungsi, yang dapat diakses secara langsung pada instance VM, atau menggunakannya dalam ekspresi direktif. Semua metode akan memiliki konteks "this" secara otomatis terikat ke instance Vue.
     ```bash
    <html>
      <head>
         <tittle>Belajar Frontend</tittle>
      </head>

      <body>
        <div id="app">
        <button v-on:click="penghitung += 1">Tambah 1</button>
        <p>Tombol ini telah di klik sebanyak {{ penghitung }} kali.</p>
        </div>

        <script src="https://unpkg.com/vue"></script>
        <script>
            new Vue ({
                el: '#app',
                data: {
                    penghitung: 0
                },
                methods:{
                    tambahkan(){
                        this.penghitung += 1;
                    }
                }
            })
        </script>
      </body>
    </html>
    ```
    
### Computed Properties dan Watchers
Computed Properties memberikan terlalu banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk dipelihara.
```bash
<div id="example">
    {{ message.split('').reverse().join('') }}
</div>
```
Pada poin diatas, template tiak lagi sederhana dan deklaratif. Masalahnya diperburuk kita ingin memasukkan pesan terbalik itu kedalam template lebih dari sekali. Itulah mengapa untuk logika yang kompleks, kita harus menggunakan **computed properties**
```bash
<html>
      <head>
         <tittle>Belajar Frontend</tittle>
      </head>

      <body>
        <div id="app">
         <div id="example">
            <p>Pesan Asli: "{{ message }}"</p>
            <p>Pesan Terbalik yang dihitung: "{{ reversedMessage }}"</p>
         </div>
        </div>

        <script src="https://unpkg.com/vue"></script>
        <script>
            new Vue ({
                el: '#app',
                data: {
                    message: 'Hai'
                },
                computed: {
                    // sebuah computed getter
                    reversedMessage: function(){
                        // this mengarah ke instance Vue
                        return this.message.split('')..reverse().join('')
                    }
                }
            })
        </script>
      </body>
    </html>
```

Watcher di Vue.js adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah.
```bash
   <html>
      <head>
         <tittle>Belajar Frontend</tittle>
      </head>

      <body>
        <div id="app">
         <div>
            <p><input type="number" v-model:value="bilanganDasar" /> dikalikan dengan 4</p>
            Hasilnya adalah {{ hasil }}
         </div>
        </div>

        <script src="https://unpkg.com/vue"></script>
        <script>
            new Vue ({
                el: '#app',
                data: {
                    bilanganDasar: 0,
                    hasil: 0
                },
                watch: {
                    bilanganDasar: function (val){
                        this.hasil = val * 4;
                    }
                }
            })
        </script>
      </body>
    </html>
```
### Component
    Komponen adalah Vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen didalam instance root Vue yang dibuat dengan new Vue.
    ```bash
    <script>
        Vue.component('tombol-penghitung',{
            data: function(){
                return {
                    penghitung: 0
                }
            },
            template: '<button v-on:click="penghitung++">Kamu telah klik tombol ini{{ penghitung }} kali.</button>'
        })
        new Vue ({
            el: '#app'
        })
    </script>

## Task 