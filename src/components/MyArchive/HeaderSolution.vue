<template>
  <div class="main-header">
    <nav-bar-header />
    <title-header />
    <nav-item-header />
  </div>
</template>

<script>
import NavBarHeader from './headerSolution/NavBarHeader.vue'
import NavItemHeader from './headerSolution/NavItemHeader.vue'
import TitleHeader from './headerSolution/TitleHeader.vue'
export default {
  components: { 
    NavBarHeader,
    TitleHeader,
    NavItemHeader,
},
}
</script>

<style scoped>
.main-header {
  height: auto;
  width: auto;
}
</style>