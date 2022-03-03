# 6 CSS (Cascading Style Sheets)
## Resume
Dalam materi ini mempelajari:
1.	Analogi CSS
2.	Cara menambahkan file CSS
3.	CSS Selector
4.	CSS Grouping
5.	CSS Font
6.	CSS Margin & Padding
7.	CSS Background
8.	CSS Link Event
9.	CSS Display
10.	CSS Table

### Analogi CSS
-	Dapat menghias halaman web. (color,size,font,background,width,height,dll)
-	Dapat mengatur posisi pada halaman web. (float,align,display,position,dll)
### Menambahkan file CSS
Ada 3 cara menambahkan file CSS ke dalam HTML:

1.External CSS
```bash
<link rel=”stylesheet” href=”main.css”>
```
Syntax ini disisipkan ke dalam tag ```<head>``` pada HTML. Ekstensi file CSS adalah ```.css```

2.Internal CSS
```bash
<style>
	body{
		background-color: #19355f;
	}
	h1{
			color: #f47523;
			margin-left: 40px;
		}
</style>
```
Syntax ini dapat digunakan di dalam satu file HTML. Didefinisikan di dalam elemen ```<style>```, didalam bagian ```<head>``` atau didalam bagian ```<body>```.

3.Inline CSS
```bash
<h1 style=”color: #19355f ;”> Hello World</h1>
```
Syntax ini dapat digunakan untuk elemen tunggal pada HTML. Diprioritaskan untuk menerapkan style yang unik.

### CSS Selector
Pola yang digunakan untuk memilih element, yang ingin di styling.
Penanda HTML ke dalam CSS dapat menggunakan selector ```ID``` dan ```Class```
1.	ID ```(#)```
-	Setiap elemen hanya dapat memiliki satu tag id
-	Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda
2.	Class ```(.)```
-	Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.
-	Satu elemen boleh memiliki lebih dari satu Class yang berbeda-beda
### CSS Grouping
Beberapa selector dapat dikelompokkan dalam satu deklarasi style
Seperti: 

HTML
```bash
<html>
	<body>
		<h1>Hai!</h1>
		<h2>Alpha Tech Academy</h2>
	</body>
<html>
```
CSS
```bash
h1,
h2{
	font-family:’muli’, sans-serif;
	color: #f47523;
}
```
### CSS Font
Beberapa style font di CSS
-	Font : menetapkan semua property font dalam satu deklarasi
-	Font-family : menentukan kelompok font teks
-	Font-size : menentukan ukuran font teks
-	Font-weight : menentukan ketebalan untuk font teks
-	Font-style : menentukan font teks menjadi miring
### CSS Margin & Padding
Membuat ruang disekitar element
```bash
.content{
	margin: 25px 20px;
	padding: 25px 40px;
}
```
### CSS Background
Beberapa style background di css
-	Backgound-color : menetapkan warna background pada suatu elemen 
-	Background-image : menentukan gambar background pada suatu elemen
-	Backgound-repeat : menentukan gambar background untuk diulang
-	Background-size : menentukan ukuran gambar untuk background
-	Background-position : menentukan posisi awal gambar background

### CSS Link Event
Beberapa link event pada CSS
-	```:hover ``` kondisi style Ketika mouse berada diatas elemen
```bash
a:hover{
color: #19355f;
}
```
-	```:active```style Ketika link “a” ditekan
```bash
a:active{
color: #19355f;
}
```
-	```:visited``` style dimana elemen link “a” telak dikunjungi/diklik
```bash
a:visited{
color: #19355f;
}
```
CSS Transisi

Transisi CSS dapat mengubah value property menjadi lebih halus dalam durasi yang ditentukan 
```bash
a{
	transition : all 0.5s ease;
}
a : hover{
	color : #19355f;
}
```
### CSS Display
Menentukan tampilan pada elemen 
-	Block : elemen ```block``` selalu dimulai pada baris baru (dimulai dari kiri ke kanan).
-	Inline-block : elemen ```inline-block``` membutuhkan lebar sesuai yang diperlukan 
-	None : menyembunyikan elemen untuk tidak ditampilkan

### CSS Table
Membuat style pada elemen table HTML
-	Border : menambahakan border pada table, th dan td
-	Border-collapse : membuat border menjadi single border
-	:nth-child(even) : membuat background stripe

## Task
pada task ini membuat sebuah tampilan halaman dengan hanya menggunakan CSS 

output:

![](https://drive.google.com/uc?export=view&id=1-7lbZxVcqacA_X5DDGtZV9GkU-m0856-)
![](https://drive.google.com/uc?export=view&id=1gFeS_f8a2LrIwQZ2fnXxEObvMIP3kWGa)
