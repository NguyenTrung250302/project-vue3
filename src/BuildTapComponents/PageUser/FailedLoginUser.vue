<template>
  <div container-failed-login>
    <div class="box">
      <span>
        <ul>
          <li>Thông tin đăng nhập của bạn không đúng</li>
          <li>vui lòng thực hiện lại đăng nhập</li>
          <li>hoặc báo cáo nếu có sự cố</li>
        </ul>
      </span>
      <img src="@/assets/5219070.png">
      <div class="btn-1">
      <button v-on:click="isBackLogin">back</button>
      <button>support</button>
      </div>
      <div class="btn-2">
      <button>report</button>
      </div>
      <div>
      <a href="/">Tham khảo các trang khác ?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods: {
  isBackLogin() {
    this.$router.push("/login")
  }
}
}
</script>

<style scoped>
.container-failed-login {
  position: relative;
  width: 100%;
  height: 1vh;
}
button {
  box-shadow: 1px 1px 2px 2px #6e6666;
  width: 150px;
  height: 40px;
  margin: 10px 5px;
  border-radius: 5%;
}
button:hover {
  background-color: #ffffff;
  color: red;
  transition: all .4s;
}
span {
  width: auto;
  height: 60px;
  margin:40px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  color: red;
}
li {
  display: flex;
  justify-content: center;
}
img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 420px;
  height: 400px;
  border-radius: 3%;
  margin:  auto;
  background-color: rgb(226, 238, 237);
  box-shadow: 2px 2px 5px 2px #babec0;
}
.btn-1 {
  display: flex;
  justify-content: space-around;
}
.btn-2 {
  display: flex;
  justify-content: center;
}
a {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-decoration: underline;
}
</style>