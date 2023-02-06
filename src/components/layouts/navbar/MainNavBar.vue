<template>
  <div class="main-navbar">
    <p>{{buttonTitle}}</p>
    <font-awesome-icon icon="fa-solid fa-chevron-down" />
  </div>
</template>

<script lang="ts" >
export default {
  props: ['buttonTitle'],
  // props dung de truyen du lieu data tu component cha sang component con va
  // component con co the truyen thong bao toi cac components cha bang cac su kien
};
</script>

<style>
.main-navbar {
  display: flex;
}
</style>