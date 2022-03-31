# 15 Vue Data
## Resume

Dalam materi ini mempelajari:
1. Data Fetching
2. Penanganan Data Error
3. Validasi Data
4. Autentikasi

### Data Fetching
Data Fetching adalah pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.

Cara Kerja Fetch API
Application Programming Interface (API) adalah sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.

API Endpoint adalah saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebgai Endpoint yang berbentuk link.

Fetch Data dengan Axios
Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint

Request Queries
Jika Request adalah permohonan pengambilan data, maka Request Queries adalah syarat yang menyatakan data seperti apa yang ingin diambil.
```bash
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
```
 - ```https://pokeapi.co``` => Host endpoint
 - ```api/v2/pokemon``` => Nama path endpoint
 - ```?limit=20&offset=0``` => String query

Pagination dengan Queries
Salah satu cara penggunaan string query pada endpoint adalah untuk pembagian/manajemen halaman.
```bash
https://pokeapi.co/api/v2/pokemon?limit=5&offset=20
```
 - limit => batasan maksimal jumlah data yang diambil
 - offset => index untuk memulai pengambilan data

### Penanganan Data Error
Penanganan Data Error adalah konsep untuk mencegah terjadinya runtime-error.

Cara Kerja Try Catch Finally
Try Catch Finally adalah metode penanganan error bawaan dari javascript
```bash
try{
    //kode yang ingin dicek apakah terjadi error atau tidak. jika tidak, maka blok kode ini akan dijalankan sampai selesai. jika error tidak jadi dijalankan sama sekali
}catch (error){
    //blok kode yang akan dijalankan ketika terjadi error saja
}finally{
    //blok kode yang akan dijalankan tanpa menghiraukan apakah terjadi error atau tidak
}
```

Cara Kerja Promise
Objek promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkron dan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise
```bash
fungsiPromise().then(res => {}).catch(err => {});
```
 - ```fungsiPromise()``` : nama fungsi
 - ```then(res => {})``` : handler jika fungsi sukses
 - ```catch(err => {})``` : handler jika fungsi gagal
 
### Validasi Data
Validasi Data addalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.

Cara Kerja Validasi Data
Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false)

Tipe Validasi data
- Validasi manual dengan javascript
  Tipe ini sangat kustom, biasa menggunakan fungsi dengan if atau switch
- Validasi pada form
  Tag form HTML 5 memiliki fungsi bawaan untuk validasi input pengguna. HTML 5 juga menyediakan validasi yang lebih mutakhir, seperti email.
- Validasi dengan Regex
  Regex adalah singkatan dari Regular Expression. Regex merupakan sebuah teks (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu untuk melakukan matching (pencocokan) dan locate (pencarian).

  Simbol Regex:
  ![](https://drive.google.com/uc?export=view&id=1aCP_cM8BKGQML4fn3T9Ilc6_Zay3FYN1)

### Autentikasi
Autentikasi adalah suatu proses yang menjadi tindakan atau pembuktian (validasi)
terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu

Cara Kerja Autentikasi
Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password. jika cocok maka server akan mengirim akses token dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan B,C atau yang lain.
![](https://drive.google.com/uc?export=view&id=1bna-ebuaycObCQKRGjPs_YQpP-DWsjS_)

Otorisasi
- Authentication : Mengkonfirmasi pengguna sesuai dengan siapa yang dia claim
- Authorization : Mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna

Cara Kerja Otorisasi
Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password. jika cocok maka server akan mengirim akses token dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan B,C atau yang lain.
![](https://drive.google.com/uc?export=view&id=1TVAnAc_pty0o4GRKKip7UBM-OJDXTmEK)

Penerapan Autentikasi
list Path:
- Registrasi: ```/api/authaccount/registration``` [post]
- login: ```/api/authaccount/login`` [post]

sedangkan untuk otorisasi jika akan membatasi akses terhadap/akun hanya untuk pengguna yang sudah login saja yaitu dengan list path:
- Detail pengguna: ```/api/users/:id``` [get]

## Task
