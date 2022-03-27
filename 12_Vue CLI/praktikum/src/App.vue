<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style >
h2 {
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
