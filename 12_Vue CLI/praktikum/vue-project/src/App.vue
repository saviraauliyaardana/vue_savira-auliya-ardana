
<template>
  <div class="bungkus">
    <div class="comp">
      <ol>
        <li v-for="(todo, index) in todos" todo in todos :key="index">
          {{ todo.text }}
        </li>
      </ol>
      <input type="text" v-model="newTodo" />
      <button v-on:click="addTodo">Tambahkan</button>
      <p v-if="todos.length == 4">Hebat!</p>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  setup() {},
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      var newItem = this.newTodo.trim();
      if (newItem) {
        this.todos.push({
          text: newItem,
        });
        this.newTodo = "";
      }
    },
  },
};
</script>
<style >
.bungkus {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>