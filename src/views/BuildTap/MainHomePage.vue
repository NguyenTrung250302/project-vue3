<template>
  <div class="container-main-page">
    <nav-bar-header />
    <!--  -->
    <main-home-page-1 />
    <!--  -->
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script>
import NavBarHeader from '@/components/MyArchive/headerSolution/NavBarHeader.vue';
import MainContactInfo from '@/components/MyArchive/ContactInfomation/MainContactInfo.vue';
import ReferenceList from '@/components/MyArchive/ReferenceList/ReferenceList.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
import MainHomePage1 from '@/BuildTapComponents/BuildTapHomePage/MainHomePage1.vue';
export default {
components: {
NavBarHeader,
MainContactInfo,
ReferenceList,
FooterView,
MainHomePage1
}
}
</script>

<style scoped>

</style>