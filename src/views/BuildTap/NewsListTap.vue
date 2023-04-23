<template>
  <div>
    <button @click="toggleId">show data:</button>
    <ul v-show="clicked">
      <li v-for="(news, index) in newsList" :key="index">
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsList: [],
      clicked: false,
    }
  },
  methods: {
    toggleId() {
      this.clicked = !this.clicked
    },
  },
  mounted() {
    const token = localStorage.getItem('accessToken')

    axios.get('https://dev-crawler-api.trainery.live//master-caoanh/news/hot-news?pagination=5',
     { 
      headers: {
      Authorization: `Bearer ${token}`
     }
     })
      .then(response => {
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