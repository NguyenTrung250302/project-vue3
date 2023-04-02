<template>
  <div>
    <nav-bar-header-user />
    <main-page-user />
    <footer-view />
  </div>
</template>

<script>
import NavBarHeaderUser from "@/BuildTapComponents/PageUser/NavBarHeaderUser.vue";
import MainPageUser from '@/BuildTapComponents/PageUser/MainPageUser.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
  components: {
    NavBarHeaderUser,
    MainPageUser,
    FooterView,
  },
};
</script>