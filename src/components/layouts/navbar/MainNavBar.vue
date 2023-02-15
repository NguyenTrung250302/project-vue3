<!-- eslint-disable no-undef -->
<template>
  <div class="main-navbar">
    <p>{{ buttonTitle }}</p>
    <font-awesome-icon
      icon="fa-solid fa-chevron-down"
      style="margin: 15px 5px 0 5px" />
  </div>
</template>

<script lang="ts">
export default {
  props: ['buttonTitle'],
};
</script>

<style>
.main-navbar {
  display: flex;
}
</style>
