<template>
  <div class="card-item">
    <div class="card-hover">
      <div class="card">
        <h1>Construction</h1>
        <svg
          class="icon"
          width="51"
          height="5"
          viewBox="0 0 51 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="50" height="5" rx="2.5" fill="#006FED" />
        </svg>
        <p>
          After the satisfactory comparison, the project will be put into practice
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-item {
  width: 100%;
  height: 450px;
  position: relative;
  background-image: url("@/assets/photo3.png");
  background-size: 100% 100%;
}
.card-hover {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(5, 28, 54, 0.75);
}
.card-item:hover .card-hover {
  display: block;
  cursor: pointer;
}
h1 {
  margin: auto;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
}
p {
  margin: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
  padding: 0 150px;
}
.icon {
  margin: 15px auto;
}
.card {
  width: 100%;
  height: auto;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>