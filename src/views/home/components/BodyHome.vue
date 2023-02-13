<template>
  <div class="body-home">
    <body-home-1  class="body-home1"/>
    <body-home-2 />
    <body-home-3 />
    <body-home-4 />
  </div>
</template>

<script>
import BodyHome1 from '@/views/home/components/BodyHome1.vue';
import BodyHome2 from '@/views/home/components/BodyHome2.vue';
import BodyHome3 from '@/views/home/components/BodyHome3.vue';
import BodyHome4 from '@/views/home/components/BodyHome4.vue';

export default {
  name: 'BodyHome',
  components: {
    BodyHome1,
    BodyHome2,
    BodyHome3,
    BodyHome4,
  },
};
</script>

<style>
.body-home {
    height: 1200px;
    max-width: auto;
    background-color: #ffff;
}
.body-home1 {
  text-align: justify;
}
</style>