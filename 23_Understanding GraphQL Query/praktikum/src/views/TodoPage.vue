<template>
  <div>
    <h1>My List</h1>
    <div class="todo-form">
      <form @submit.prevent="OnSubmit">
        <input  v-model = "newTodo" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>

  <div class="todo-list">
      <!-- <li v-for="item in anggota" :key="item.id">
        <span>ID: {{item.id}}</span>
        <br>
        <span>Nama: {{item.nama}}</span>
      </li> -->
    <ul>
      <li v-for="(todo,index) in Alltodos" :key="index" class="todo">
        <div class="content">
          <h3>{{todo}}</h3>
        </div>
        <div class="content">
          <i class="far fa-times-circle fa-2x" @click="Completed(index)"></i>
        </div>
      </li> 
    </ul>
  </div>

  <!-- <div v-if="searchName === ''">
    <ApolloQuery :query="searchName" ? gpl => gpl`query getAllUser($name: String!)` :gpl => gpl`query getAllUser`* :variables="(name: searchName)">

    </ApolloQuery>
  </div> -->
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// import gpl from "graphql-tag";

export default {
  name : "TodoPage",
  components : {
  },

  // apollo:{
  //   anggota : gpl`
  //     query MyQuery {
  //       anggota {
  //         id
  //         nama
  //         keterangans {
  //           id
  //           id_anggota
  //           nilai
  //           pelajaran
  //           status
  //         }
  //       }
  //     }
  //   `,
  // },

  // computed:{
  //   getAllAnggotas (){
  //     return this.anggota ?? []
  //   }

  // },

  setup(){

    const newTodo = ref("");
    const Alltodos = ref([]);
    const OnSubmit = () =>{
      Alltodos.value.push(newTodo.value);
      newTodo.value="";
    }
    const Completed = (index) => {
      Alltodos.value.splice(index,1);
    }
    return {
      newTodo,
      OnSubmit,
      Alltodos,
      Completed
    }
  }

}
</script>

<style  scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input{
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center
}
.todo-form{
  margin-top: 30px;
}
.todo{
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding:10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}

h3{
  margin: 0px;
  padding: 0px;
}
li{
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216)
}
.content{
  flex:1;
}
i{
  cursor: pointer;
  color: red;
}
</style>

