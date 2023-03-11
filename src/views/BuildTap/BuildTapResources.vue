<template>
  <div>
    <nav-bar-header />
    <title-header nameTitle="RESOURCES"/>
    <!--  -->
    <nav-item-header 
    headLine1="Homepage"
    headLine3="Resources"
    />
    <!--  -->
    <main-tap-resources />
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script>
import NavBarHeader from '@/components/MyArchive/headerSolution/NavBarHeader.vue';
import TitleHeader from '@/components/MyArchive/headerSolution/TitleHeader.vue';
import NavItemHeader from "@/components/MyArchive/headerSolution/NavItemHeader.vue";
import MainContactInfo from '@/components/MyArchive/ContactInfomation/MainContactInfo.vue';
import ReferenceList from '@/components/MyArchive/ReferenceList/ReferenceList.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
import MainTapResources from '@/BuildTapComponents/BuildTapResources/MainTapResources.vue';
export default {
components: {
NavBarHeader,
TitleHeader,
NavItemHeader,
MainContactInfo,
ReferenceList,
FooterView,
MainTapResources
}
}
</script>