<template>
  <div class="main-tap-resources">
    <page-title 
    pageTitle="Resources"
    />
    <!--  -->
    <list-info />
    <!--  -->
    <list-news-board />
    <!--  -->
    <slider-view />
  </div>
</template>

<script>
import PageTitle from '../PageTitle.vue';
import ListInfo from './ListInfo.vue';
import ListNewsBoard from './ListNewsBoard.vue';
import SliderView from './SliderView.vue';
export default {
  components: { 
    PageTitle, 
    ListInfo,
    ListNewsBoard,
    SliderView, 
},
}
</script>

<style scoped>
.main-tap-resources {
    width: auto;
    height: auto;
}
</style>