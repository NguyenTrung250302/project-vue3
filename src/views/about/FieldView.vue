<template>
  <div class="">
    <h2 class="field">{{ titleField }}</h2>
    <!-- tiêu đề lĩnh vực -->
  </div>
</template>

<script>
export default {
  props: ['titleField'],
};
</script>

<style>
.field {
margin: 0 0 0 20px;
}
</style>