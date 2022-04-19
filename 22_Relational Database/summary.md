# 22 Relational Database
## Resume

Dalam materi ini mempelajari:
1. Introduction Database
2. Relationship Database
3. Entity Relationship Diagram
4. SQL Statement

### Introduction Database
Data base adalah sekumpulan data yang terorganisir, umumnya disimpan dan diakses secara elektronik dari sistem komputer.

### Relationship Database
ada 3 jenis relationship database, antara lain yaitu:

- One to One

    Relasi One to One adalah relasi yang mana setiap satu baris data pada tabel hanya berhubungan dengan satu baris pada tabel lainnya.

    Contoh : 
    Pada pengajaran private satu guru satu siswa. Seorang guru mengajar seorang siswa, Seorang siswa diajar oleh seorang guru.

- One to Many
   
   Relasi One to Many adalah relasi yang mana setiap satu baris data pada tabel pertama berhubungan dengan lebih dari satu baris pada tabel kedua. 

    Contoh :
    relasi antara tabel Mahasiswa dan tabel Mata Kuliah. Satu mahasiswa bisa berhubungan dengan satu baris atau lebih mata kuliah

- Many to Many
    
    Relasi Many to Many adalah relasi yang mana setiap lebih dari satu baris data dari tabel pertama berhubungan dengan lebih dari satu baris data pada tabel kedua. Artinya, kedua tabel masing-masing dapat mengakses banyak data dari tabel yang direlasikan.

    Contoh: mahasiswa dengan mata kuliah. 1 mahasiswa bisa ambil banyak mata kuliah dan 1 mata kuliah bisa dipilih oleh banyak mahasiswa

### Entity Relationship Diagram
ERD (Entity Relationship Diagram) atau diagram hubungan entitas adalah diagram yang digunakan untuk perancangan suatu database dan menunjukan relasi antar objek atau entitas beserta atribut-atributnya secara detail

### SQL Statement
Jenis Perintah SQL
- Data Definition Language (DDL)

- Data Manipulation Language (DML)
    Perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database

    DML Statement
    - LIKE/BETWEEN
    - AND/OR
    - ORDER BY
    - LIMIT

- Data Control Language (DCL)

Tipe Data MySQL
- Num
- Huruf
- Date

Statement Operation
- INSERT
- SELECT
- UPDATE
- DELETE

JOIN 
sebuah klausa untuk mengkombinasikan record dari dua atau lebih tabel

JOIN STANDAR SQL ANSI
- INNER JOIN
    
    Inner join akan mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat
    
- LEFT JOIN
    
    Left join akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi join
    
- RIGHT JOIN
   
   Right join akan mengembalikan semua baris dari tebel sebelah kanan yang dikenal kondisi ON dengan data dari tabel sebelah kiri yang memenuhi kondisi join. Teknik ini merupakan kebalikan dari left join

UNION 

hal yang harus diperhatikan dari union adalah jumlah field yang dikeluarkan/dipanggil harus sama

AGGREGATE

Fungsi agregasi adalah fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal

Fungsi agregasi SQL
- MIN, fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal
- MAX, untuk mendapatkan nilai maksimum atau nilai terbesar dari sebuah data record di tabel
- SUM, untuk mendapatkan jumlah total nilai dari sebuah data atau record di tabel
- AVG, untuk mencari nilai rata-rata dari sebuah data atau record tabel
- COUNT, untuk mencari jumlah dari sebuah data atau record di tabel
- HAVING, untuk menyeleksi data berdasarkan kriteria tertentu, dimana kriteria berupa fungsi aggregat

SUBQUERY

subquery/inner query/nested query adalah query didalam query SQL lain. Sebuah subquery digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk lebih membatasi data yang akan diambil

FUNCTION

sebuah kumpulan statement yang akan mengembalikan sebuah nilai baik pada pemanggilnya. Nilai yang dihasilkan function harus ditampung kedalam sebuah variabel

## Task
Pada task ini melakukan relasi database one to one dan pne to many pada databse kampus_merdeka yang sudah dibuat sebelumnya

1. Relasi database one to one, yang mana akan menghubungkan id_anggota pada tabel keterangan dengan nama pada tabel anggota

Output:

2. Relasi database one to many, yang mana akan menghubungkan id pada tabel anggota dengan pelajaran pada tabel keterangan

Output:

