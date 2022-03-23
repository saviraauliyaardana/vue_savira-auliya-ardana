# 13 Komponen Vue
## Resume

Dalam materi ini mempelajari:
1. Module Export & Import
2. Komponen Dapat digunakan kembali
3. Paradigma Fungsi Pembantu
4. Instance Lifecycle Hooks

### Module Export & Import
Javascript module yaitu modul bisa berisi kelas atau pustaka fungdi untuk tujuan tertentu. Modul hanya sebuah file. Satu kode skrip adalah satu modul.
Perbedaan Module dan Reguler Script
Modul bisa memuat satu sama lain dan menggunakan pengarah khusus **export** dan **import** untuk fungsi pertukaran, memanggil fungsi dari satu modul ke modul lainnya
- CJS => Impor semua isi
- ESM => Impor yang dibutuhkan saja

Export digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import. Ada 2 tipe Export antara lain yaitu:

- Named Exports (Ekspor nol atau lebih per modul)

  export const
  
  ```bash
  const mencobaFungsi = (nama) => {
    return "Halo " + nama + "!";
  };

  const variabelPercobaan = 100;

  const obyekUjicoba = {
    nama: "Vue",
    jenis: "Kerangka kerja Frontend",
  };

  export { mencobaFungsi, variabelPercobaan, obyekUjicoba };
  ``` 
  ```bash
  export const mencobaFungsi = (nama) => {
    return "Halo " + nama + "!";
  };

  export const variabelPercobaan = 100;

  export const obyekUjicoba = {
    nama: "Vue",
    jenis: "Kerangka kerja Frontend",
  };
  ```

- Default Exports (satu per modul)
  
  export default
  
  ```bash 
  const variabelPercobaan2 = 100;
  export default variabelPercobaan2;
  ```
  ```bash
  const variabelPercobaan = 100;
  export { variabelPercobaan as default };
  ```
  ```bash
  const mencobaFungsi = (nama) => {
  return "Halo " + nama + "!";
  };
  export default mencobaFungsi;
  ```

Import digunakan untuk mengambil variabel, obyek atau fungsi yang disediakan oleh modul lain. Ada 4 tipe Import antara lain yaitu:

- Importing defaults
  
  import target
  
  ```bash
  const mencobaFungsi = (nama) => {
   return "Halo " + nama + "!";
  };
  export default mencobaFungsi;
  ```
  ```bash
  import mencobaFungsi from "@/utils/contoh-export-3";

  const hasil = mencobaFungsi("Vue");
  console.log(hasil); // Halo Vue!
  ```

- Import multiple exports
  
  import { target }
  
  ```bash
  export const variabelPercobaan = 100;
  export const obyekUjicoba = {
    nama: "Vue",
    jenis: "Kerangka kerja Frontend",
  };

  const mencobaFungsi = (nama) => {
    return "Halo " + nama + "!";
  };
  export default mencobaFungsi;
  ```
  ```bash
  import { variabelPercobaan, obyekUjicoba } from "@/utils/contoh-export-4";

  console.log(variabelPercobaan); // 100
  console.log(obyekUjicoba); // { nama: "Vue", jenis: "Kerangka kerja Frontend" }
  ```
- Rename multiple exports
  
  import { target as t }
  
  ```bash
  export const variabelPercobaan = 100;
  export const obyekUjicoba = {
    nama: "Vue",
    jenis: "Kerangka kerja Frontend",
  };

  const mencobaFungsi = (nama) => {
    return "Halo " + nama + "!";
  };
  export default mencobaFungsi;
  ```
  ```bash
  import {
    variabelPercobaan as variabelExport,
    obyekUjicoba as obyekExport,
  } from "@/utils/contoh-export-4";

  console.log(variabelExport); // 100
  console.log(obyekExport); // { nama: "Vue", jenis: "Kerangka kerja Frontend" }
  ```
  ```bash
  import * as semuaExport from "@/utils/contoh-export-4";

  console.log(semuaExport.variabelPercobaan); // 100
  console.log(semuaExport.obyekUjicoba); // { nama: "Vue", jenis: "Kerangka kerja Frontend" }
  ```
- Import defaults + multiple
  
  import targetDefault, { target as t }
  
  ```bash
  export const variabelPercobaan = 100;
  export const obyekUjicoba = {
    nama: "Vue",
    jenis: "Kerangka kerja Frontend",
  };

  const mencobaFungsi = (nama) => {
    return "Halo " + nama + "!";
  };
  export default mencobaFungsi;
  ```
  ```bash
  import mencobaFungsi, { variabelPercobaan } from "@/utils/contoh-export-4";

  const hasil = mencobaFungsi("Vue");
  console.log(hasil); // Halo Vue!
  console.log(variabelPercobaan); // 100
  ```

### Komponen Dapat digunakan kembali
Komponen Vue yang Dapat digunakan kembali adalah sebuah komponen file tunggal vue yang bertujuan untuk dapat digunakan lebih dari satu kali ditempat yang berbeda. Lebih rapi, lebih mudah dirawat, dan lebih berkualitas.

Cara Kerja Komponen Vue
- Induk (parent)
  ```bash
  <template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
    export default {
        name: "Home",
        components: {
            HelloWorld,
        },
    };
  </script>
  ```
- Anak (Child)
  ```bash
  <template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
  </template>

  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  };
  </script>
  ```

Direktori Komponen
Pada umumnya komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman.
- halaman dapat menggunakan komponen namun komponen tidak dapat menggunakan halaman.
- komponen dapat menggunakan komponen lain
Didalam direktori components tidak menutup kemungkinan untuk dibuat sub-direktori.

Komunikasi Anak Komponen dan Induk Komponen
Untuk mengekspos data dari induk ke anak dapat dilakukan dengan:
```bash
<HelloWorld msg="Welcome to Your Vue.js App" @click="showAlert"/>
             ^                                  ^
      //props => variabel               //Emits => Fungsi/Event
```
- Props
```bash
<template>
  <div class="demo">
    <DemoComponent
      :pesan="pesanSingkat"
      :jumlahHitungan="jumlahHitunganSaatIni"
      :apakahSelesai="apakahSudahSelesai"
      :alamat="alamatLengkap"
      :list="listNominasiPenghargaan"
    />
    <DemoIncrementButton @update-counter="updateCounterValue" />
  </div>
</template>

<script>
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: "Demo",
  components: {
    DemoComponent,
  },
  data() {
    return {
      pesanSingkat: "Halo Vue",
      jumlahHitunganSaatIni: 0,
      apakahSudahSelesai: false,
      alamatLengkap: {
        titikLokasi: "Indonesia",
      },
      listNominasiPenghargaan: [
        "Vue Cepat",
        "Vue Mudah Dipelajari",
        "Vue Menyenangkan",
      ],
    };
  },
};
</script>
```

```bash
<template>
  <div>
    <h1>{{ pesan }}</h1>
    <p>Jumlah Hitungan saat ini: {{ jumlahHitungan }}</p>
    <p>Apakah sudah ditutup: {{ apakahSelesai ? "Sudah" : "Belum" }}</p>
    <p>Alamat Lokasi: {{ alamat.titikLokasi }}</p>
    <p>Daftar nominasi yang tersedia: {{ list }}</p>
  </div>
</template>

<script>
export default {
  name: "DemoComponent",
  props: {
    pesan: String,
    jumlahHitungan: Number,
    apakahSelesai: Boolean,
    alamat: Object,
    list: Array,
  },
};
</script>
```

- Emit
```bash
<template>
  <div class="demo">
    <DemoComponent
      :pesan="pesanSingkat"
      :jumlahHitungan="jumlahHitunganSaatIni"
      :apakahSelesai="apakahSudahSelesai"
      :alamat="alamatLengkap"
      :list="listNominasiPenghargaan"
    />
    <DemoIncrementButton @update-counter="updateCounterValue" />
  </div>
</template>

<script>
import DemoComponent from "@/components/DemoComponent.vue";
import DemoIncrementButton from "@/components/DemoIncrementButton.vue";
export default {
  name: "Demo",
  components: {
    DemoComponent,
    DemoIncrementButton,
  },
  data() {
    return {
      pesanSingkat: "Halo Vue",
      jumlahHitunganSaatIni: 0,
      apakahSudahSelesai: false,
      alamatLengkap: {
        titikLokasi: "Indonesia",
      },
      listNominasiPenghargaan: [
        "Vue Cepat",
        "Vue Mudah Dipelajari",
        "Vue Menyenangkan",
      ],
    };
  },
  methods: {
    updateCounterValue() {
      this.jumlahHitunganSaatIni += 1;
    },
  },
};
</script>
```

```bash
<template>
  <div>
    <button @click="doIncrement">Tambah Hitungan</button>
  </div>
</template>

<script>
export default {
  name: "DemoIncrementButton",
  methods: {
    doIncrement() {
      this.$emit("update-counter");
    },
  },
};
</script>
```

### Paradigma Fungsi Pembantu
Paradigma Fungsi Pembantu adalah sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali ditempat yang berbeda. Keuntungannya adalah Lebih efektif, Lebih Efisien, Menghindari Huru-hara.

Cara Kerja Fungsi Pembantu
```bash
<template>
  <div class="demo">
    <input type="number" v-model.number="variabelSatu" />
    <input type="number" v-model.number="variabelDua" />
    <p>Hasil: {{ hasil }}</p>
    <button @click="lakukanPenjumlahan">Tambah</button>
    <button @click="lakukanPengurangan">Kurang</button>
  </div>
</template>

<script>
import { penambahan, pengurangan } from "@/utils/operasi-matematika";
export default {
  name: "Tool",
  data() {
    return {
      variabelSatu: 0,
      variabelDua: 0,
      hasil: 0,
    };
  },
  methods: {
    lakukanPenjumlahan() {
      this.hasil = penambahan(this.variabelSatu, this.variabelDua);
    },
    lakukanPengurangan() {
      this.hasil = pengurangan(this.variabelSatu, this.variabelDua);
    },
  },
};
</script>
```

```bash
export const penambahan = (variabelA, variabelB) => {
  return variabelA + variabelB;
};

export const pengurangan = (variabelA, variabelB) => {
  return variabelA - variabelB;
};
```

Direktori Komponen
Pada umumnya fungsi pembantu dijadikan satu pada direktori yang sejajar dengan komponen atau halaman.

Tips
Fungsi pembantu bisa diberi nama yang berbeda-beda namun harus mudah dimengerti, jamak dan self-descripting seperti:
- Utilities
- Utils
- Helpers
- Tools

Beberapa contoh fungsi pembantu yang sering dipakai:
- Operator (penambahan, rata-rata, median, min-max, hitung umur dll.)
- Formatter (tanggal, waktu, mata uang dll.)
- Validator (email, nomor telfon, nomor kartu kredit dll.)
- Generator (angka random, text random, warna, format text dll.)
  
### Instance Lifecycle Hooks
Setiap Vue Instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai lifecycle atau siklus hidup.

![](https://drive.google.com/uc?export=view&id=1_WPYTkevTYVdQfhjzlwlE0Vx4cvMweYv)

Cara Kerja Lifecycle di Vue

Silklus hidup sebuah Vue instance berawal ketika inisiasi dan berakhir ketika penghancuran. Setiap siklus memiliki hook-nya masing-masing yang berbentuk fungsi.
```bash
beforeCreate, created, beforeMount, mounted, 
beforeUpdate, updated, activated, deactivated, 
beforeDestroy, destroyed, errorCaptured
```

3 Lifecycle Utama

Diantara banyaknya lifecycle hook, Cukup memahami 3 lifecycle Utama yang memiliki fungsi masing-masing sebagai berikut:

1. Created
   
   Berlangsung setelah instance terbentuk dan sebelum DOM dirender.
   Contoh penggunaan: menambahkan SEO Meta, memasang event listener scroll
2. Mounted
   
   Berlangsung setelah DOM dirender.
   Contoh penggunaan: Handling loader
3. Destroyed
   
   Berlangsung sebelum instance dihancurkan.
   Contoh penggunaan: mencopot event listener scrool

## Task
Pada task ini membuat sebuah todo list dengan menggunakan komponen file tunggal dengan kondisi dan contoh visual yang sudah ditentukan sebagai berikut:
1. Input todo yang lebarnya memenuhi layar

   Output:
   ![](https://drive.google.com/uc?export=view&id=12u5ikZv6yWSjTG_SDuYI-ogAO8EMTvym)
   
2. Masing item memiliki tombol hapus dan edit dengan fungsionalitasnya
   
   Output:
   ![](https://drive.google.com/uc?export=view&id=1SnmYfqOB6dwGMulF-J3JmwXAxtv8kPuM)
   
    - Tampilan ketika tombol edit ditekan, simpan perubahan setelah tombol edit ditekan kembali
      
      Output:
      ![](https://drive.google.com/uc?export=view&id=1YhGIiwOiyTGtkO7hXt8xIjrFPAtmYEkR)
      
    - Jika tombol hapus ditekan, maka list dibawahnya akan naik ke atas menggantikan
      
      Output:
      ![](https://drive.google.com/uc?export=view&id=1KgIL8pfDCCb96YKPQgN6cr2Q4pNaB-jh)
