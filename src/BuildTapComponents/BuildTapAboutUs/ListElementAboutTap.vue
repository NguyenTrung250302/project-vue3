<template>
  <div class="list-info">
    <element-info />
    <element-info />
    <element-info />
    <element-info />
    <element-info />
    <element-info />
  </div>
</template>

<script>
import ElementInfo from './ElementInfo.vue'
export default {
  components: { ElementInfo },

}
</script>

<style scoped>
.list-info {
  margin: 30px 0 70px 0;
    width: auto;
    height: auto;
      display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>