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
Untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada. Seperti jika ingin berpindah dari halaman home ke about maka harus mengetik manual di address bar :/about.
Cara yang lebih layak sediakan opsi kontroler pengguna untuk mengakses halaman tersebut dengan link atau tombol.

Macam jenis redireksi:
Params dan Query:
Navigasi Beranak
Navigasi beranak adalah sub-path dari path yang ada.
/user/setting/privacy
    - user => induk dari setting
    - setting => anak dari user dan induk dari privacy
    - privacy => anak dari setting


### Layout Template Vue
### Penyimpanan Global
### Penyimpanan Global Permanen
Nilai yang ada didalam Vuex store akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang. Karena nilai state yang ada di store disimpan didalam memory instance