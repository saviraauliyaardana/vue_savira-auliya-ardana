# (2) Version Control and Branch Management (Git)
Versioning atau version control adalah untuk mengatur versi dari source code program. GIT merupakan salah satu version control system pupuler yang digunakan para developer untuk mengembangkan software secara bersama-sama. Pemanfaatan git ini secara distribusi. Git dapat di jalankan pada system operasi macOS,Windows, dan Linux.

Perintah-perintah dasar pada Git antara lain:
1.	untuk membuat repository pada file lokal yang nantinya ada folder .git
```bash
git init
```
2.	 untuk mengetahui status dari repository lokal
```bash
git status 
```
3.	menambahkan file baru pada repository yang dipilih
```bash
git add 
```
4.	untuk menyimpan perubahan yang dilakukan, tetapi tidak ada perubahan pada remote repository.
```bash
git commit 
```
5. untuk mengirimkan perubahan file setelah di commit ke remote repository.
```bash
git push 
```
6. melihat seluruh branch yang ada pada repository
```bash
git branch
```
7.	menukar branch yang aktif dengan branchyang dipilih
```bash
git checkout 
```
8. untuk menggabungkan branch yang aktif dan branch yang dipilih
```bash
git merge 
```
9. membuat Salinan repository local
```bash
git clone
```
10.	 untuk mengetahui bagaimana perubahan yang terjadi di file yang telah di edit
```bash
git diff
```
11.	unruk menyimpan perubahan yang terjadi
```bash
git stash
```
12.	 untuk menampilkan setiap commit yang dilakukan
```bash
git log
```

Setelah Git terisntall selanjutnya setting dengan cara login dan masukkan perintah:
```bash
$ git config --global user.name "UsernameAnda" 

```
```bash
$ git config --global user.email IsiDenganEmailAnda@gmail.com
```

Untuk memastikan proses login berhasil masukkan perintah:
```bash
$ git config --list
```

Langkah selanjutnya dalam menggunakan Git adalah harus login ke dalam website GitHub. Github dan Git memiliki hubungan khusus, yaitu Git yang berperan sebagai version control system dan Github menjadi hosting atau sebagai penyimpan kode pemrograman. Setelah berhasil login ke GitHub, lalu membuat repository. Klik ikon + pada kanan atas dan pilih New Repositories untuk membuat repository baru. Anda perlu mengisi detail informasi berikut:

- Nama Repository : digunakan untuk identitas repository yang dibuat.

- Deskripsi Repository : berfungsi untuk deskripsi dari repository yang dibuat.

- Jenis Repository   : jenis repository  dibagi menjadi Public dan Private. 

Setelah mengisi informasi yang ada, klik Create Repository. 


