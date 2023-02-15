<template>
  <HeaderHome />
  <BodyHome />
  <FooterHome />
</template>

<script lang="ts">
import HeaderHome from '@/components/layouts/navbar/HeaderHome.vue';
import BodyHome from '@/views/home/components/BodyHome.vue';
import FooterHome from '@/components/layouts/footer/FooterHome.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderHome,
    BodyHome,
    FooterHome,
  },
};
</script>
