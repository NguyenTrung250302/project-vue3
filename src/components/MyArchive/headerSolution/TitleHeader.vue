<template>
  <div class="title-header">
    <h1>{{ nameTitle }}</h1>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["nameTitle"],
};
</script>

<style scoped>
.title-header {
  width: auto;
  height: 135px;
  background-image: url("@/assets/backgroundtitle.png");
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
}
h1 {
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 165px;
}
</style>