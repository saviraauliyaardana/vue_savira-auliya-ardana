# 8 Javascript Refreshment
## Resume

Dalam materi ini mempelajari:
1. Javascript
2. Mengapa Javascript
3. Var, Let, Const
4. Values & References
5. Destucturing 
6. Method 
7. Control Flow 
8. Function 
9. Async - Await 
10. Classes 
11. DOM (Document Object Model)

### Javascript
Javascript adalah bahasa pemrograman yang High level, Scripting, Untyped dan Interpreted. 

### Mengapa Javascript
- Javascript dikatakan bahasa pemrograman tingkat tinggi karena dari beberapa bahasa pemrograman yang ada mulai dari bawah yaitu C, C++, Python, dan Javascript. semakin keatas bahasanya semakin dimengerti oleh manusia dan Javascript berada dikategori bahasa pemrograman tingkat tinggi.
- Berikutnya Scripting, javascript dibuat untuk berinteraksi dengan halaman web, apapun web browsernya, seperti google chrome, internet explorer, mozilla firefox, opera, dls.
- Javascript bersifat untyped yang merupakan bahasa yang tidak berpengaruh terhadap tipe data. hal ini memudahkan seorang pemula dalam mempelajari bahasa pemrograman karena tidak dibingunngkan mendeklarasikan tipe data
- Interpreted, selama mempunyai web browser javascript bisa dijalankan, bahasanya fleksibel, mudah untuk di uji, javascript mempunyai banyak framework yaitu bootstrap, vue, react dls, ini yang biasa orang bilang mudah dipelajari, sulit dikuasai

### Pengertian Var, Let, Const
Declaration adalah proses pembuatan variabel untuk menyimpan data. Variabel yang sifatnya tetap atau dengan kata lain nama dan isi dari variabel tidak bisa diubah.
cara mendeklarasikan variabel yaitu
1. Var
   pada umumnya variabel ```var``` ini jarang dipakai.

   ```bash
   var num1
   console.log(num1);
   ```
2. Let
   variabel ```let``` digunakan saat membutuhkan sebuah nilai yang dapat diubah.
   ```bash
   let num2
   console.log(num2);
   ```
3. Const
   variabel ```const``` digunakan saat membutuhkan sebuah nilai yang tidak bisa di "reassign". Saat mendeklarasikan variabel const harus diberi nilai.

   Redeclaration
   ```bash
   const num3 = 1
   console.log(num3);
   ```

   Reassignment
   ```bash
   const num3 = 20
   console.log(num3);
   
   num3 = 30
   console.log(num3);
   ```

Scoping menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam code. ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.
Global
```bash
var name = 'Bani';
let age = 23;
const isMarried = true;
```
Function/local
```bash
function countAverage(){
    var num1 = 7;
    let num2 = 8;
    const num3 = 9;
}
```
Block
```bash
if (true){
    var num1 = 7;
    let num2 = 8;
    const num3 = 9;
    num4 = num1 + num2 + num3;
}
```
Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan.
```bash
b = 7;
var b;
console.log(b);
```
```bash
callMe();

function callMe(){
    console.log('Hello Bro')
}
```
Deklarasi ```var``` dan ```function``` adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi.

```bash
a = 7;
let a;
console.log(a);
```
```bash
console.log(c);
const c = 7;
```
```let``` dan ```const``` tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi

### Values & References
Javascript mempunyai 2 kategori dalam tipe data, yaitu 
- Primitive 
  Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. Primitive merupakan salah satu kategori tipe data pada javascript, ada tipe data Number, String, Boolean, Undifined, Null, Symbol, dan BigInteger.
- Object
  Object adalah unit yang menyimpan properti dan fungsi (method).

Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam javascript diteruskan oleh nilai. 
```bash
let a = 1; // a=1
let b = a; // b=1
```
Meneruskan references bagaimanapun, akan memberikan references yang sama
```bash
let x = [1];   // x & y = [1]
let y = x;
```
Dalam javascript kita dapat meneruskan nilai dan referensi. Perbedaan utama antara keduanya adalah bahwa melewatkan nilai terjadi saat menugaskan primitif, saat meneruskan referensi saat menugaskan objek. 

### Destucturing
Destucturing adalah ekspresi dari Javascript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, kedalam variabel yang berbeda.
- Array 
    seperti assignment, maka kita harus mendeklarasikan variabel tersebut terlebih dahulu
    ```bash
    const [firstElement, secondElement] = list;
    ```
    menggunakan const ketika data tersebut kosong atau undifined tidak akan terjadi error.
- Object
    kita dapat menyalin nilai properti object ke dalam suatu variabel
    ```bash
    const user ={
        id = 42
        is_verfied = true
    };

    const {id, is_verfied} = user;
    console.log(id); //42
    console.log(is_verfied); //true
    ```

Spread syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar

### Method
Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se sederhana mungkin sesuai kegunaan masing-masing.
- Concat
  menggabungkan dua atau lebih array, dan mengembalikan salinan array yang digabungkan
  ```bash
  const array 1 = ['a', 'b', 'c'];
  const array 2 = ['d', 'e', 'f'];
  const array 3 = array1.concat(array2);

  console.log(array3);
  ```

- Map
  membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array
  ```bash
  const array 1 = [1, 4, 9, 16];
  const map1 = array1.map (x => x * 2);

  console.log(map1);
  ```
  
- Foreach
  memanggil fungsi untuk setiap elemen array
  ```bash
  const array 1 = ['a', 'b', 'c'];
  array1.foreach(element => console.log(element));
  ```
  
- Slice
  memilih bagian array, dan mengembalikan array baru
  ```bash
  const Hewan = ['semut', 'kambing', 'Unta', 'Bebek', 'Gajah'];
  console.log (Hewan.slice(2));
  ```
- Filter
  membuat array baru dengan setiap elemen dalam array yang lulus seleksi
  ```bash
  const angka = [1, 2, 3, 4, 5, 6];
  const result = angka.filter(nomor => nomor > 2);
  console.log(result);
  ```
- Reduce
  melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)
  ```bash
  const array = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(array1.reduce(reducer));
  ```

### Control Flow
Normal Flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan.
Control Flow yaitu mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan. Untuk melakukan control flow dibutuhkan pengulangan atau pengkondisian
- Pengulangan (Loop/iterasi)
  for, while, Do While
- Pengkondisian (percabangan)
   - if...else
   - switch
   - block
   - break
   - continue
   - try...catch
     Try bertugas mengeksekusi statement didalamnya, sedangkan catch bertugas menangkap error yang terjadi pada statement didalam try
        ```bash
        try{
            TidakKetemu();
        }   catch (error) {
            console.error(error);
        }
        ```
   - throw
     Throw terjadi didalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh catch
        ```bash
        function percobaan(angka){
            if (angka * 0 !== 0){
              throw new Error ("Bukan angka !")
            }
            return "Ini Angka"
        }

        try{
            console.log (percobaan ('a'))
        }   catch (error) {
            console.error(error)
        }
        ```

### Function
function didalam javascript adalah sebuah objek. karena memiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali
Deklarasi Fungsi
```bash
// nama fungsi,         //parameter
function namaLengkap(depan,belakang){ 
    console.log(depan+" "+belakang); //area atau scope fungsi
}
namaLengkap('Hedy', 'Yanto'); // memanggil fungsi
```
Function Expression
```bash
let namaLengkap = function (depan,belakang){ 
    console.log(depan+" "+belakang); 
}
namaLengkap('Hedy', 'Yanto');
```
Arrow Function
```bash
let namaLengkap = (depan,belakang) => { 
    console.log(depan+" "+belakang); 
}
namaLengkap('Hedy', 'Yanto');
```

### Async - Await
- Synchronous mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
    ```bash
    console.log("Mulai");
    console.log("Proses...");
    console.log("Berhenti");
    ```
    otput dari code sesuai dengan urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai.

- Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses
    ```bash
    console.log("Mulai");
    setTimeout() => {console.log("proses..."),1000}
    console.log("Berhenti");
    ```
    setTimeout digunakan untuk menunda eksekusi, karena ada salah satu eksekusi membutuhkan proses yang agak lama, sembari menunggu proses tersebut javascript mengeksekusi perintah selanjutnya

- Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.
  Synchronous Callback
  ```bash
  function cekLuas (panjang, Lebar){
      return panjang * lebar ;
  }
   function cekUkuran(angka1, angka2, callback){
       let luas = callback(angka1, angka2);
       if (luas >= 100){
           return "Besar";
       }
       else{
           return "Kecil":
       }
   }
   console.log(cekUkuran(10, 10, cekLuas));
  ```
- Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang
- Asynchronous function, Fungsi asynchronous sebuah function yang bekerja secara asynchronous yang menghasilkan promise sebagai return valuenya, tetapi penulisan codenya menggunakan penulisan yang synchronous(standar)
- Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promisenya selesai


### Classes
- Class adalah prototype dari suatu object yang akan dibuat
- Constructor adalah method didalam class yang akan selalu terpanggil pertama kali ketika membuat object
- Method adalah sebuah fungsi yang berada didalam class
- Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class
- Extends digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan metode dari kelas induk.
```bash
class orang{ //class
    constructor(nama,umur){ //constructor
        this.nama = nama;   // attributes
        this.umur = umur;
    }
    perkenalan(){ //method
    return 'Saya ${this.nama}, umur ${this.umur} tahun';
    }
class Guru extends Orang{ //extends
    constructor(nama,umur, pelajaran){
        super(nama, umur);
        this.pelajaran = pelajaran;
    }
}
}
```

### DOM (Document Object Model)
Document Object Model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object

DOM Selection Method
- ```getElementById()``` untuk Element
- ```getElementsByTagName()``` untuk HTML Collection
- ```getElementsByClassName()``` untuk HTML Collection
- ```querySelection()``` untuk Element
- ```querySelectorAll()``` untuk node List
  
DOM Manipulation
- ```element.innerHTML``` digunakan merubah isi tag yang sudah kita seleksi
- ```element.style.<propertyCSS>``` digunakan merubah style dari tag yang sudah di seleksi
- ```element.setAtribute()``` digunakan mengelola/memanipulasi attribute yang sudah di seleksi
- ```element.classList.add()``` digunakan mengelola/memanipulasi class yang sudah di seleksi

DOM Event
- ```onclick``` digunakan ketika pengguna mengetik mouse
- ```onchange``` digunakan dalam kombinasi dengan validasi bidang input
- ```onblur``` digunakan ketika meninggalkan kolom input
- ```onmouseover``` digunakan ketika pengguna mengarahkan mouse ke atas pada suatu object
- ```onmouseout``` digunakan ketika pengguna mengarahkan mouse ke keluar pada suatu object
- ```oncopy``` digunakan ketika pengguna mengcopy suatu object


## Task
[Task](https://docs.google.com/document/d/1Ke6H5HerrxYGt6QuDHtCCbqQwPUFcgGLoFI1a0n-6D8/edit)

output:

![](https://drive.google.com/uc?export=view&id=1utpR8xI9APuvxdcKTT3FkXVbEQPY0D2D)
