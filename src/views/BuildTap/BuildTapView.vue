<template>
  <div>
    <header-solution />
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
import HeaderSolution from '@/components/MyArchive/HeaderSolution.vue';
import MainMenuSolution from "@/BuildTapComponents/BuildTapSolution/MainMenuSolution.vue";
import DescriptionMotto from "@/components/MyArchive/myinsert/DescriptionMotto.vue";
export default {
  components: {
    MainContactInfo,
    ReferenceList,
    FooterView,
    HeaderSolution,
    MainMenuSolution,
    DescriptionMotto
  },
};
</script>

<script setup lang="ts">
import Breadcrumb from "../../partials/Breadcrumb.vue";
</script>
