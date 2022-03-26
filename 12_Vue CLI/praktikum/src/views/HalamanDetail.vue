<template>
  <div id="app">
    <router-link to="/">
      <button>Kembali</button>
    </router-link>

    <h1>{{ item.text }}</h1>
    <p>Belum ada deskripsi{{ item.description }}</p>

    <input type="text== item.description" v-show="isShow" />
    <button v-on:click="description(item.description)">Ubah Deskripsi</button>
    {{ Isshow ? "Save" : "edit" }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      newDescription: "",
      item: {},
      editDescription: null,
    };
  },

  beforeMount() {
    const newIndex = this.$route.params.index;
    if (localStorage.todos) {
      this.item = JSON.parse(localStorage.todos)[newIndex];
    }
  },

  methods: {
    description() {
      this.isShow = true;
    },
  },
};
</script>
<style>
input {
  flex-wrap: wrap;
  width: 80%;
}
</style>