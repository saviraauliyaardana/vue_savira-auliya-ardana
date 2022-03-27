<template>
  <div id="app">
    <router-link to="/">
      <button>Kembali</button>
    </router-link>

    <h1>{{ item.text }}</h1>
    <p>{{ item.description || "Belum ada deskripsi" }}</p>

    <input type="text" v-show="isShow" v-model="item.description" />

    <button v-on:click="description">
      {{ isShow ? "Simpan" : "Ubah deskripsi" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      item: {},
      newIndex: "",
    };
  },

  beforeMount() {
    this.newIndex = this.$route.params.index;
    if (localStorage.todos) {
      this.item = JSON.parse(localStorage.todos)[this.newIndex];
    }
  },

  methods: {
    description() {
      if (this.isShow) {
        let t = JSON.parse(localStorage.todos);
        t[this.newIndex] = this.item;
        localStorage.todos = JSON.stringify(t);
      }
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style>
input {
  width: 80%;
}
</style>