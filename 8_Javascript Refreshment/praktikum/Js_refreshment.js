console.log("1")
var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        " perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
array = nama;

console.log("array = " + array);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();
console.log("");


console.log("2.\n" +
    "a. karena pengkondisian if (terdaftar === true) tetapi pada value variabel bernilai false sehingga tidak dapat ditampilkan \n" +
    "b. karena tipe data yang dideklarasikan berupa const dimana const nilai nya tidak dapat diubah \n" +
    "c. tidak dapat di eksekusi karena variabel asal terdapat di dalam function perkenalan\n"
);


console.log("3.");
const foo = ['Budi', 'Sita', 'Ayu'];
console.log(foo);
const [A, B, C] = foo;
console.log(A); //Budi
console.log(B); //Sita
console.log(C); //Ayu
console.log("");

console.log("4");
let bdays = ['10-17', '05-19', '20-19'];
console.log(bdays);
bdays = bdays.map(tgl => tgl.replace('-', '/'))
console.log(bdays);
console.log("");

console.log("5");
let value = [1, 2, 3, 4, 5, 6];
console.log(value);
value = value.map(x => x * 2)
console.log(value);
console.log("");

console.log("6");
let arr = [1.5, 2.56, 5.1, 12.33];
console.log(arr);
arr = arr.map(y => Math.round(y))
console.log(arr);
console.log("");