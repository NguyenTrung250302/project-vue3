<template>
  <div class="slider">
    <div class="pagination">
      <a class="icon" href="#">&lt;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a class="icon" href="#">&gt;</a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.slider {
  width: 100%;
  height: 150px;
  margin-top: 40px;
}
.pagination {
  display: flex;
  justify-content: center;  
}

.pagination a {
  color: rgba(107, 107, 107, 1);
  text-decoration: none;
  padding: 3px 10px;
  border-radius: 20%;
  border: 1px solid rgba(218, 218, 218, 1);
  margin: 0 5px;
  font-weight: 500;
}

.pagination a:hover {
  background-color: #007bff;
  color: #fff;
}

.pagination a.active {
  background-color: #007bff;
  color: #fff;
}
.pagination .icon:hover {
  background-color: rgba(218, 218, 218, 1);
  color: rgba(255, 255, 255, 1);
}
</style>