<template>
  <div>
    <solution-view 
    v-for="SolutionView in ListMenuSolution"
    v-bind:key="SolutionView"
    v-bind:SolutionView="SolutionView"
    />
  </div>
</template>

<script>
import SolutionView from './SolutionView.vue'
export default {
  components: {
     SolutionView 
    },
  props: {
    ListMenuSolution: Array,
  }
}
</script>

<style>

</style>