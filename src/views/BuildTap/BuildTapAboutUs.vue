<template>
  <div>
    <nav-bar-header />
    <!--  -->
    <header-back-ground />
    <main-tap-about-us />
    <!--  -->
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script>
import NavBarHeader from "@/components/MyArchive/headerSolution/NavBarHeader.vue";
import MainContactInfo from "@/components/MyArchive/ContactInfomation/MainContactInfo.vue";
import ReferenceList from "@/components/MyArchive/ReferenceList/ReferenceList.vue";
import FooterView from "@/components/MyArchive/FooterView.vue";
import MainTapAboutUs from "@/BuildTapComponents/BuildTapAboutUs/MainTapAboutUs.vue";
import HeaderBackGround from "@/BuildTapComponents/BuildTapAboutUs/HeaderBackGround.vue";

export default {
  components: {
    NavBarHeader,
    MainContactInfo,
    ReferenceList,
    FooterView,
    MainTapAboutUs,
    HeaderBackGround,
  },
};
</script>
