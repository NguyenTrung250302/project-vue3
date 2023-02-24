<template>
  <div>
    <NavBarSolution />
    <MainMenuSolution />
    <main-contact-info style="margin-top: 90px;"/>
    <reference-list />
  </div>
</template>

<script lang="ts">
import NavBarSolution from "@/components/MyArchive/NavBarSolution.vue";
import MainMenuSolution from "@/components/MyArchive/MainMenuSolution.vue";
import MainContactInfo from "@/components/MyArchive/ContactInfomation/MainContactInfo.vue";
import ReferenceList from "@/components/MyArchive/ReferenceList/ReferenceList.vue";
export default {
  components: {
    NavBarSolution,
    MainMenuSolution,
    MainContactInfo,
    ReferenceList,
  },
};
</script>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
import MainContactInfoVue from '@/components/MyArchive/contactinfo/MainContactInfo.vue';
</script>

