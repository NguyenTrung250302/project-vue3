<template>
  <div class="menu-solution-view"> 
    <div class="row">
      <block-solution />
      <block-solution-1 />
      <block-solution-2 />
    </div>
    <div class="row">
      <block-solution-3 />
      <block-solution-4 />
      <block-solution-5 />
    </div>
    <div class="row">
      <block-solution-6 />
    </div>
  </div>
</template>

<script>
import BlockSolution from "@/BuildTapComponents/BuildTapSolution/BlockSolution.vue";
import BlockSolution1 from "@/BuildTapComponents/BuildTapSolution/BlockSolution1.vue";
import BlockSolution2 from './BlockSolution2.vue';
import BlockSolution3 from './BlockSolution3.vue';
import BlockSolution4 from "@/BuildTapComponents/BuildTapSolution/BlockSolution4.vue";
import BlockSolution5 from "@/BuildTapComponents/BuildTapSolution/BlockSolution5.vue";
import BlockSolution6 from "@/BuildTapComponents/BuildTapSolution/BlockSolution6.vue";
export default {
components: {
  BlockSolution,
  BlockSolution1,
BlockSolution2,
BlockSolution3,
BlockSolution4,
BlockSolution5,
BlockSolution6

}
}
</script>


BlockSolution<style scoped>
.menu-solution-view{
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