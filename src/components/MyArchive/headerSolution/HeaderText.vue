<template>
  <div>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
props: ['headerText']
}
</script>

<style scoped>
p {
width: auto;
height: 20px;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #121212;
}
p:hover {
color: rgba(0, 111, 237, 1);
cursor: pointer;
}
</style>