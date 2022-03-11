// jawaban problem 1
// a. berapa banyak kekurangan dalam penulisan kode tersebut? ada 4
// b. bagian mana saja terjadi kekurangan tersebut? 
//     "1. class user 
//     "2. pendeklarasian variabel var yang seharusnya memakai this
//     "3. class userservice
//     "4. penamaan 

// c. tuliskan alasan dari tiap kekurangan!
//     "1. class user 
//          - perlu constructor (variabel properti berada disini) 
//          - kurang dalam penggunaan method this pada penyebutan variabel properti (id, username, password).
//     "2. pendeklarasian variabel var yang seharusnya memakai this
//          - Konteks dalam class, keyword this merujuk pada instance(pemanggilan class) dari class tersebut. Sehingga this dapat digunakan untuk mengelola properti yang terdapat pada instance.
//     "3. class userservice 
//          - extends ke class induk
//          - perlu constructor juga dengan memakai super()
//          - method2 yg dibutuhkan seperti getAllUsers, dan lainnya berada di dlm class ini, tanpa menyebutkan lagi user[ ] atau user.
//     "4. penamaan
//          - nama class userservice seharusnya menggunakan huruf besar setelah kata pertama, seperti userService agar mudah dieja dan difahami
//          - nama method getallusers dan getuserbyid seharusnya menggunakan huruf besar setelah kata pertama dan setiap kata, seperti getAllUsers dan getUserById agar mudah difahami dan di eja


class Kendaraan {
    constructor() {
        this.roda = 0;
        this.kecepatan = 0;
    }
}

class Mobil extends Kendaraan {
    berjalan() {
        this.tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru) {
        this.kecepatan = this.kecepatan + kecepatanBaru;
    }
}

function main() {
    const mobil = new Mobil();
    mobil.berjalan();
    mobil.berjalan();
    mobil.berjalan();

    console.log("TEST");
    console.log(mobil.kecepatan);
}

main();