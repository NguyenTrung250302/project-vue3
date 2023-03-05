<template>
<div class="main-menu-solution">
  <div class="row">
    <box-solution />
    <box-solution-1 />
    <box-solution-2 />
  </div>
  <div class="row">
    <box-solution-3 />
    <box-solution-4 />
    <box-solution-5 />
  </div>
  <div class="row">
    <box-solution-6 />
  </div>
</div>
</template>

<script>
import BoxSolution from "@/components/MyArchive/menusolution/BoxSolution.vue";
import BoxSolution1 from './BoxSolution1.vue';
import BoxSolution2 from './BoxSolution2.vue';
import BoxSolution3 from './BoxSolution3.vue';
import BoxSolution4 from './BoxSolution4.vue';
import BoxSolution5 from './BoxSolution5.vue';
import BoxSolution6 from './BoxSolution6.vue';
export default {
  components: {
    BoxSolution,
    BoxSolution1,
    BoxSolution2,
    BoxSolution3,
    BoxSolution4,
    BoxSolution5,
    BoxSolution6
  },
};
</script>

<style scoped>
.main-menu-solution {
  width: 1336px;
  height: auto;
  margin-top: 40px;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 35px 155px;
}
</style>