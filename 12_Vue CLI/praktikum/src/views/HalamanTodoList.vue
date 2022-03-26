<template>
  <div class="comp">
    <h2>Todo List</h2>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="item">
          <input v-if="editidx == index" v-model="todo.text" />

          <span v-else>
            <router-link :to="'/' + index">
              {{ todo.text }}
            </router-link>
          </span>

          <div class="buttons">
            <button v-on:click="deleteTodo(index)">Hapus</button>
            <button v-on:click="editTodo(index)">
              {{ editidx == index ? "Update" : "Edit" }}
            </button>
          </div>
        </div>
      </li>
    </ol>

    <div class="inp">
      <input type="text" v-model="newTodo" />
      <button v-on:click="addTodo">Tambahkan</button>
    </div>
    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>
  <script>
export default {
  setup() {},
  data() {
    return {
      newTodo: "",
      todos: [],
      editidx: null,
    };
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  watch: {
    todos: {
      handler(newTodo) {
        localStorage.todos = JSON.stringify(newTodo);
      },
      deep: true,
    },
  },
  methods: {
    addTodo() {
      var newItem = this.newTodo.trim();
      if (newItem != "") {
        this.todos.push({
          text: newItem,
        });
        this.newTodo = "";
        this.saveData();
      }
    },
    todotextUpdate(e) {
      this.newTodo = e.target.value;
    },
    editTodo(index) {
      if (index == this.editidx) {
        this.editidx = null;
      } else {
        this.editidx = index;
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    saveData() {
      localStorage.setItem("mylist", JSON.stringfy(this.todos));
    },
  },
};
</script>