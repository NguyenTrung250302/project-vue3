<template>
  <div class="body-home">
    <body-home-1 />
    <body-home-2 />
  </div>
</template>

<script>
import BodyHome1 from '@/views/home/components/BodyHome1.vue';
import BodyHome2 from '@/views/home/components/BodyHome2.vue';

export default {
  name: 'BodyHome',
  components: {
    BodyHome1,
    BodyHome2,
  },
};
</script>

<style>
.body-home {
    height: 1200px;
    max-width: auto;
    background-color: #ffff;
}
</style>