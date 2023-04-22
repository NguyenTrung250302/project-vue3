<template>
  <div>
    <button @click="toggleId">show data:</button>
    <ul v-show="clickedId">
      <li v-for="(news, index) in newsList" :key="index">
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      newsList: [],
      clickedId: false,
    }
  },
  methods: {
    toggleId() {
      this.clickedId = !this.clickedId
    },
  },
  mounted() {
    // Lấy token từ local storage
    const token = localStorage.getItem('token')

    // Gọi API để lấy danh sách tin tức nóng
    axios.get('https://dev-crawler-api.trainery.live//master-caoanh/news/hot-news?pagination=5',
     { 
      headers: {
      Authorization: `Bearer ${token}`
     }
     })
      .then(response => {
        // Lưu danh sách tin tức nóng vào state của component
        this.newsList = response.data.data
        console.log(response.data.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>
button {
  border: solid 1px #333;
  border-radius: 5px;
}
</style>