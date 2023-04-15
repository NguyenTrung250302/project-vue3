<template>
  <div class="avatar-container">
    <img :src="avatarUser" alt="Avatar">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      avatarUser: ''
    };
  },
  mounted() {
    axios.get('https://dev-crawler-api.trainery.live/assets')
      .then(response => {
        this.avatarUser = response.data.url;
        console.log(this.avatarUser)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.avatar-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

