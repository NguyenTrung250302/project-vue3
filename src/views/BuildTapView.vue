<template>
  <div>
    <NavBarSolution />
    <main-menu-solution />
    <main-contact-info style="margin-top: 90px;"/>
    <reference-list />
    <footer-view />
  </div>
</template>

<script lang="ts">
import NavBarSolution from "@/components/MyArchive/NavBarSolution.vue";
import MainMenuSolution from "@/components/MyArchive/menusolution/MainMenuSolution.vue";
import MainContactInfo from "@/components/MyArchive/ContactInfomation/MainContactInfo.vue";
import ReferenceList from "@/components/MyArchive/ReferenceList/ReferenceList.vue";
import FooterView from "@/components/MyArchive/FooterView.vue";
export default {
  components: {
    NavBarSolution,
    MainMenuSolution,
    MainContactInfo,
    ReferenceList,
    FooterView,
  },
};
</script>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
</script>

