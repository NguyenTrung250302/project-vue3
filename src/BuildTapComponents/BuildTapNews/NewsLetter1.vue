<template>
  <div class="container0">
    <nav-bar-header />
    <!-- show news -->
    <div class="newsletter0">
      <h1>{{ newsList.length > 0 ? newsList[0].title : "Loading..." }}</h1>
      <img
        :src="newsList.length > 0 ? newsList[0].thumbnail : ''"
        alt="img 0"
      />
      <h2>{{ newsList.length > 0 ? newsList[0].caption : "Loading..." }}</h2>
      <p> Trang web liên quan:
      <a href="https://thaycaoanh.vn/tu-vi-1/xem-tu-vi-tron-doi-cua-12-con-giap-chinh-xac-nhat-2/">
      {{newsList.length > 0 ? newsList[0].url : "Loading..."}}
      </a>
      </p>
    </div>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import axios from "axios";
import NavBarHeader from "@/components/MyArchive/headerSolution/NavBarHeader.vue";
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
  components: {
    NavBarHeader,
    FooterView,
  },
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    const token = localStorage.getItem("accessToken");

    axios
      .get(
        "https://dev-crawler-api.trainery.live//master-caoanh/news/hot-news?pagination=5",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        this.newsList = response.data.data;
        console.log("array data news:", this.newsList);
        console.log("title news:", this.newsList[0].title);
        console.log("caption news:", this.newsList[0].caption);
        console.log("url img news:", this.newsList[0].thumbnail);
        console.log("url news:", this.newsList[0].url);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.container0 {
  width: 100%;
  height: auto;
}
.newsletter0 {
  margin: 0 auto;
}
h1 {
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  margin: 30px auto;
}
h2 {
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  margin: 40px auto;
  color:  rgb(51,51,64);
}
img {
  margin: 0 auto;
}
p {
  font-size: 18px;
  font-weight: 500;
}
a:hover {
  color: rgb(0, 47, 255);
}
</style>