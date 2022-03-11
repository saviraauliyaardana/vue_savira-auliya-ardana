# 9 Clean Code
## Resume
Dalam materi ini mempelajari:
1. Clean Code
2. Karakteristik Clean Code
3. Clean Code Principle

### Clean Code
Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.

Kenapa Clean Code?

untuk kolaborasi yang akan dikerjakan secara tim sehingga dengan kode yang baik dan benar antar programmer tidak akan mengalami kesulitan ketika akan melanjutkan pekerjaan dari programmer lain. Selain itu penerapan Clean Code bisa menghemat waktu dan biaya saat harus melakukan maintenance terhadap sistem.

### Karakteristik Clean Code
1. Mudah difahami
   Penamaan mudah difahami
   
   Example:
   ```bash
   let userBalance = 125.0;         //let b =   // salah
   let primelist = [2, 3, 4, 7];    //let data = // salah

   const locations = ['Austin', 'New York', 'San Francisco'];
   locations.forEach(location) => {
       doStuff();
       doSomeOtherStuff();
       //...
       //...
       dispatchh(location);
   }
   ```
2. Mudah dieja dan dicari

   Example:
   ```bash
   const currentDate = moment ().format('YYYY/MM/DD');
   let fullName = "Iswanul Umam";
   let divider = 3;

   const MILLISECONDS_IN_A_DAY = 86400000;
   setTimeouut (blastOff, MILLISECONDS_IN_A_DAY);
   ```
3. Singkat namun mendeskripsikan konteks

   Example:
   ```bash
   function inviteUser(emailAddress){}      //function inv (user){} // salah

   const address = 'One infinite Loop, Cupertino 95014';
   const cityZipCodeRegex = /^[^,\\]+[,\\s]+(.+?)\s*(\d{5}?$/);
   const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
   saveCityZipCode(city, zipCode);
   ```
4. Konsisten
   
   Example:
   ```bash
   getUser();           // getUserId(); //salah
   getUserName();
   getUserRecord();

   const DAYS_IN_WEEK = 7;
   const DAYS_IN_MONTH = 30;

   const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
   const artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

   function eraseDatabase() {}
   function restoreDatabase() {}

   class Animal {}
   class Alpace {}
   ```
5. Hindari penambahan konteks yang tidak perlu
   
   Example:
   ```bash
    let fullName; //let fullNameString;
    const Car = {
        make : 'Honda',      //carMake : 'Honda' // salah
        model : 'Acord',
        color : 'Blue',
    };
    function paintCar(car){
        car.color ='Red';
    }
    ```
6. Komentar
   
   Example:
   ```bash
        benar                   salah
    doStuff();          | doStuff();  
                        |   //doOtherStuff();
                        |   //doSomeMoreStuff();
    ```
7. Good function
   
   Example:
   ```bash
   function createMenu (title, body, buttonText, cancellable){}             // salah, terlalu banyak argumen
   function createMenu ({title, body, buttonText, cancellable}){}           // benar
   createMenu({
       title: 'Foto',
       body: 'Bar',
       buttonText: 'Baz',
       cancellable: true
   });
   ``` 
8. Gunakan konvensi
   
   Example "Style Guide" 
    - Airbnb JavaScript Style Guide
    - Google Python Style GUide
9.  Formating
    saran formating
    - lebar baris code 80-120 karakter
    - satu class 300-500 baris
    - baris code yang berhubungan saling berdekatan
    - dekatkan fungsi dengan pemanggilnya
    - deklarasi variabel berdekatan dengan penggunanya
    - perhatikan indentasi
    - menggunakan prettier atau formatter

### Clean Code Principle
1. KISS (Keep It So Simple)

   - Hindari membuat fungsi yag dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
   - Fungsi atau class harus kecil
   - Fungsi dibuat untuk melakukan satu tugas saja
   - Jangan gunakan terlallu banyak argumen pada fungsi
   - Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal
   
2. DRY (Don't Repeat Yourself)

   duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang
   
3. Refactoring
   
   Refactoring adalah restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan refactor
   Teknik Refactoring
    - membuat sebuah abstraksi
    - memecah kode dengan fungsi/class
    - perbaiki penamaan dan lokasi kode
    - deteksi kode yang memiliki duplikasi

## Task
pada task pertama yaitu menganalisis sebuah code dan pada task ke dua mengubah code yang sudah ada agar bisa di run

output :

![](https://drive.google.com/uc?export=view&id=10-Y1Zwf9JEUtOLerPvMc-s4q4Mk_r1NN)
