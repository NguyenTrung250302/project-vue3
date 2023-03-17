<template>
  <div class="navigation-view">
    <ul class="navigation">
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
      <li><a href="#">Page 4</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation-view {
  margin-top: 30px;
}
.navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation li {
  display: inline-block;
  margin: 0 10px;
}

.navigation li a {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgb(190, 190, 190);
  background: #fff;
  text-indent: -9999px;
}

.navigation li a:hover {
  background: rgba(66, 75, 90, 1);
  color: #fff;
}

.navigation li.active a {
  background: rgba(66, 75, 90, 1);
  color: #fff;
}
</style>