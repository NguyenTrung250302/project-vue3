<template>
  <div>
    <NavBarSolution />
    <MainMenuSolution />
    <main-contact-info />
  </div>
</template>

<script lang="ts">
import NavBarSolution from "@/components/MyArchive/NavBarSolution.vue";
import MainMenuSolution from "@/components/MyArchive/MainMenuSolution.vue";
import MainContactInfo from "@/components/MyArchive/ContactInfomation/MainContactInfo.vue";
export default {
  components: {
    NavBarSolution,
    MainMenuSolution,
    MainContactInfo,
  },
};
</script>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
import MainContactInfoVue from '@/components/MyArchive/contactinfo/MainContactInfo.vue';
</script>

