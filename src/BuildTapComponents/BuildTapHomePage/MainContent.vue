<template>
  <div class="container-content">
    <h1>{{}}</h1>
    <button>call api</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    const profile = axios.post('https://dev-crawler-api.trainery.live//master-caoanh/auth/refresh-token', {
    })
      .then(response => {
        this.profile = response.data;
        
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.container-content {
  width: 100%;
  height: 200px;
  background-color: rgb(202, 223, 217);
}
button {
  box-shadow: 1px 1px 2px 1px rgb(136, 127, 127);
  font-size: 20px;
}
</style>2