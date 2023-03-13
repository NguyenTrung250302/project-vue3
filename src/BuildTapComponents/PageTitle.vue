<template>
  <div>
    <h1 class="page-title">{{ pageTitle }}</h1>
    <svg
      class="icon"
      width="50"
      height="5"
      viewBox="0 0 50 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="5" rx="2.5" fill="#006FED" />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["pageTitle"],
};
</script>

<style scoped>
.page-title {
  width: 371px;
  height: 40px;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
}
.icon {
margin: 10px auto;
}
</style>