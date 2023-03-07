<template>
  <div>
    <nav-bar-header />
    <title-header 
    nameTitle="SYSTEM INTERGRATION"
    />
    <nav-item-header 
    headLine1="Homepage"
    headLine2="Service"
    headLine3="System Intergration"
    />
    <main-system />
    <main-contact-info />
    <reference-list />
    <footer-view />
  </div>
</template>

<script lang="ts">
import NavBarHeader from "@/components/MyArchive/headerSolution/NavBarHeader.vue";
import TitleHeader from "@/components/MyArchive/headerSolution/TitleHeader.vue";
import NavItemHeader from "@/components/MyArchive/headerSolution/NavItemHeader.vue";
import MainContactInfo from '@/components/MyArchive/ContactInfomation/MainContactInfo.vue';
import MainSystem from "@/BuildTapComponents/BuildTapSystem/MainSystem.vue";
import ReferenceList from '@/components/MyArchive/ReferenceList/ReferenceList.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
components: {
NavBarHeader,
TitleHeader,
NavItemHeader,
MainContactInfo,
MainSystem,
ReferenceList,
FooterView
}
}
</script>,
ReferenceList