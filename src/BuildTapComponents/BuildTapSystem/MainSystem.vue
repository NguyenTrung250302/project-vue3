<template>
  <div class="main-system">
    <nav-item-header 
    headLine1="Homepage"
    headLine2="Service"
    headLine3="System Intergration"
    />
    <div class="system-description">
    </div>
  </div>
</template>

<script>
import NavItemHeader from "@/components/MyArchive/headerSolution/NavItemHeader.vue";
export default {
components: {
  NavItemHeader,
}
}
</script>

<style>
.main-system {
    height: 575px;
    width: 1350px;
    margin: 0 auto;
    background-image: url('@/assets/photo5.png');
    background-size: cover;
    position: relative;
}
</style>