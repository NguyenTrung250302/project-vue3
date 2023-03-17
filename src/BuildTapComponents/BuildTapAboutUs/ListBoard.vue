<template>
  <div class="list-board">
    <element-board 
      number="102"
      lineText="Type something"
    />
        <element-board 
      number="354"
      lineText="Type something"
    />
        <element-board 
      number="521"
      lineText="Type something"
    />
        <element-board 
      number="974"
      lineText="Type something"
    /> 
  </div>
</template>

<script>
import ElementBoard from "@/BuildTapComponents/BuildTapAboutUs/ElementBoard.vue";
export default {
components: {
    ElementBoard
}
}
</script>

<style scoped>
.list-board {
    display: flex;
    justify-content: space-between;
    padding: 0 9%;
    margin: 30px 0;
}
</style>