<template>
  <div>
    <nav-bar-header />
    <title-header nameTitle="Solution"/>
    <nav-item-header 
    headLine1="Homepage"
    headLine2="Homepage"
    headLine3="Solutions"
    />
    <description-motto />
    <main-menu-solution />
    <main-contact-info style="margin-top: 90px;"/>
    <reference-list />
    <footer-view />
  </div>
</template>

<script lang="ts">
import MainContactInfo from "@/components/MyArchive/ContactInfomation/MainContactInfo.vue";
import ReferenceList from "@/components/MyArchive/ReferenceList/ReferenceList.vue";
import FooterView from "@/components/MyArchive/FooterView.vue";
import MainMenuSolution from "@/BuildTapComponents/BuildTapSolution/MainMenuSolution.vue";
import DescriptionMotto from "@/components/MyArchive/myinsert/DescriptionMotto.vue";
import NavBarHeader from '@/components/MyArchive/headerSolution/NavBarHeader.vue';
import TitleHeader from '@/components/MyArchive/headerSolution/TitleHeader.vue';
import NavItemHeader from "@/components/MyArchive/headerSolution/NavItemHeader.vue";
export default {
  components: {
    MainContactInfo,
    ReferenceList,
    FooterView,
    MainMenuSolution,
    DescriptionMotto,
    TitleHeader,
    NavBarHeader,
    NavItemHeader
  },
};
</script>

// <script setup lang="ts">
// import Breadcrumb from "../../partials/Breadcrumb.vue";
// </script>
