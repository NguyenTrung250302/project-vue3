<template>
  <div class="main-tap-about-us">
    <page-title pageTitle="About us" />
    <brand-introduction />
    <board-info />
    <comment-user />
  </div>
</template>

<script>
import PageTitle from "../PageTitle.vue";
import BoardInfo from "./BoardInfo.vue";
import BrandIntroduction from "./BrandIntroduction.vue";
import CommentUser from "@/BuildTapComponents/BuildTapAboutUs/CommentUser.vue";
export default {
  components: { PageTitle, BrandIntroduction, BoardInfo, CommentUser },
};
</script>

<style scoped>
.main-tap-about-us {
  width: 100%;
  height: auto;
}
</style>