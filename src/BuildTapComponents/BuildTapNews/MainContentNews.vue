<template>
  <div class="container-main">
    <div class="title">
    <h1>Linh Quang Điện</h1>
    </div>
    <img src="@/assets/group-thaycaoanh1.png" alt="loading">
    <div class="title">
      <h1>Thầy Cao Anh</h1>
    </div>
    <div class="img">
      <img class="img-child" src="@/assets/tuvi-thay-cao-anh.png" alt="loading">
      <img class="img-child" src="@/assets/chungnhan.png" alt="loading">
    </div>
    <div class="info">
      <ul>
        <li>Email:</li>
        <li>Hotline:</li>
        <li>Website:</li>
        <li>Facebook:</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-main {
margin: 20px auto;
}
.title {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 25px;
  font-weight: 700;
}
.img {
  display: flex;
}
.img-child {
  margin: 0 auto;
  width: 50%;
  height: 500px;
}
</style>