<template>
  <div class="background"></div>
  <nav-title 
  headLine1="Homepage"
  headLine2="About us"
  />
</template>

<script>
import NavTitle from '@/BuildTapComponents/NavTitle.vue';
export default {
  components: { NavTitle },

}
</script>

<style scoped>
.background {
    width: 100%;
    height: 340px;
    background-image: url('@/assets/team.png');
    background-size: cover;
    background-position: center;
}
</style>