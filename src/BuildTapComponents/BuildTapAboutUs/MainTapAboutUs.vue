<template>
  <div class="main-tap-about-us">
    <page-title pageTitle="About us" />
    <brand-introduction />
    <board-info />
    <slider-view />
  </div>
</template>

<script>
import PageTitle from "../PageTitle.vue";
import BoardInfo from "./BoardInfo.vue";
import BrandIntroduction from "./BrandIntroduction.vue";
import SliderView from "@/BuildTapComponents/BuildTapAboutUs/SliderView.vue";
export default {
  components: { 
  PageTitle, 
  BrandIntroduction, 
  BoardInfo, 
  SliderView 
  },
};
</script>

<style scoped>
.main-tap-about-us {
  width: 100%;
  height: auto;
}
</style>