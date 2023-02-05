<script lang="ts">
import HeaderHome from '@/components/HeaderHome.vue';
import BodyHome from '@/components/BodyHome.vue';
import FooterHome from '@/components/FooterHome.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderHome,
    BodyHome,
    FooterHome,
  },
};
</script>

<template>
  <HeaderHome />
  <BodyHome />
  <FooterHome />
</template>
