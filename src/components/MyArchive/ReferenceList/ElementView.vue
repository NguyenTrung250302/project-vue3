<template>
  <div>
    <p>{{ ElementView.id }}</p>
  </div>
</template>

<script>
export default {
props: {
    ElementView: {
        type: Object,
    }
}
}
</script>

<style scoped>
p {
width: 146px;
height: 20px;
font-weight: 400;
font-size: 14px;
margin: 20px 0;
color: rgb(41, 40, 40);
}
</style>