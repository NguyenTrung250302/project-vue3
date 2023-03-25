<template>
  <div class="navigation-view">
    <h1>Why people love BuildTab</h1>
    <div class="list-item">
      <feedback-item />

    </div>
    <!-- <navigation-view /> -->
  </div>
</template>

<script>
import feedbackItem from "@/BuildTapComponents/BuildTapAboutUs/feedbackItem.vue";
// import NavigationView from "./NavigationView.vue";
export default {
  components: { 
    feedbackItem, 
    // NavigationView
},
};
</script>

<style scoped>
.navigation-view {
  width: auto;
  height: 650px;
}
.list-item {
  display: flex;
}
h1 {
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  color: #000000;
  margin: 100px 0 50px 0;
}
</style>