<template>
  <div>
    <ul class="list-info">
        <li>Tech blog</li>
        <li>Success Stories</li>
        <li>Events</li>
        <li>BIM</li>
        <li>Digital twins</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list-info {
  display: flex;
  justify-content: center;
}
li {
width: auto;
height: 24px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #A4A4A4;
margin: 30px 30px;
}
li:hover {
color: rgba(0, 111, 237, 1);
cursor: pointer;
}
</style>