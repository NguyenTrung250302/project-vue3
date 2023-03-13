<template>
  <div>
    <nav-bar-header />
    <title-header nameTitle="RESOURCES"/>
    <nav-title 
    headLine1="Homepage"
    headLine2="Resources"
    />
    <!--  -->
    <main-tap-resources />
    <!--  -->
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script>
import NavBarHeader from '@/components/MyArchive/headerSolution/NavBarHeader.vue';
import TitleHeader from '@/components/MyArchive/headerSolution/TitleHeader.vue';
import MainContactInfo from '@/components/MyArchive/ContactInfomation/MainContactInfo.vue';
import ReferenceList from '@/components/MyArchive/ReferenceList/ReferenceList.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
import MainTapResources from '@/BuildTapComponents/BuildTapResources/MainTapResources.vue';
import NavTitle from "@/BuildTapComponents/NavTitle.vue";
export default {
components: {
NavBarHeader,
TitleHeader,
MainContactInfo,
ReferenceList,
FooterView,
MainTapResources,
NavTitle
}
}
</script>