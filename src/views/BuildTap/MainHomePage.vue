<template>
  <div class="container-main-page">
    <header-home-page />
    <!--  -->
    <main-content />
    <!--  -->
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script>
import HeaderHomePage from "@/BuildTapComponents/BuildTapHomePage/HeaderHomePage.vue";
import MainContent from '@/BuildTapComponents/BuildTapHomePage/MainContent.vue';
import MainContactInfo from '@/components/MyArchive/ContactInfomation/MainContactInfo.vue';
import ReferenceList from '@/components/MyArchive/ReferenceList/ReferenceList.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
components: {
HeaderHomePage,
MainContent,
MainContactInfo,
ReferenceList,
FooterView,
}
}
</script>