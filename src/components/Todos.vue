<template>
  <TodoItem 
  v-for="todo in todos" 
  v-bind:key="todo.id" 
  v-bind:todoProps="todo" 
  v-on:item-completed="markComplete"
  />
</template>


<script>
import  { ref } from "vue";
import TodoItem from './TodoItem.vue';
export default {
    name: "Todos",
    components: { TodoItem },
    setup () {
      const todos  = ref([
        {
          id : 1,
          title: 'step 1: find out via google',
          completed: false
        },

        {
          id : 2,
          title: 'step 2: follow the pattern',
          completed: false
        },

        {
          id : 3,
          title: 'step 3:create personal projects',
          completed: false
        }
        
      ]);

      const markComplete = id => {
        todos.value =  todos.value.map(todo => {
          if(todo.id  === id) todo.completed = !todo.completed;
          return todo 
        })
      }

      return {
        todos,
        markComplete
      }

      return {
        todos
      }
    }
}
</script>


<style>

</style>