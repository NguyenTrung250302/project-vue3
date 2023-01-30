<template>
  <div id="App">
    <Header></Header>
    <Todos></Todos>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue"

export default {
  name: "App",
  components: { 
    Header,
    Todos,
  },
};
</script>

<style>
#App {
  font-family: Avenir,Helvetica, Arial, sans-serif;
}
</style>