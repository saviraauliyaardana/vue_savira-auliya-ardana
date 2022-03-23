<template>
  <div class="comp">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="item">
          <input v-if="editidx == index" v-model="todo.text" />

          <span v-else>
            {{ todo.text }}
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
  methods: {
    addTodo() {
      var newItem = this.newTodo.trim();
      if (newItem != "") {
        this.todos.push({
          text: newItem,
        });
        this.newTodo = "";
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
  },
};
</script>
<style >
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.comp input {
  margin: auto;
  width: 80%;
}

.item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
}

.buttons button {
  margin-left: 20px;
}

.inp {
  display: flex;
}
.inp input {
  flex: 1;
}
.inp button {
  margin-left: 20px;
}
</style>