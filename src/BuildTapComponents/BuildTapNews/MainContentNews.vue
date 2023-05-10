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
    <div>
      <img src="@/assets/beside_logo.webp" alt="loading">
      <ul>
        <li>Email:thaycaoanh@gmail.com</li>
        <li>Hotline: 0904.710.481 hoặc 0989.461.985</li>
        <li>Website:
          <a href="https://thaycaoanh.com/">https://thaycaoanh.com/</a>
        </li>
        <li>Facebook:
          <a target="blank" rel="nofollow" href="https://www.facebook.com/thaycaoanh10481">https://www.facebook.com/thaycaoanh10481</a>
        </li>
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
li {
  font-weight: 500;
}
a:hover {
  color: rgb(0, 68, 255);
}
</style>