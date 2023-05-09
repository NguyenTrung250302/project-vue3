<template>
  <div class="container-sidebar">
    <div class="newsletter">
      <h1>XEM CHI TIẾT TẠI ĐÂY !</h1>
    </div>
    <div class="newsletter">
      <a @:click="changeTapNews1">{{
        newsList.length > 0 ? newsList[0].title : "Loading..."
      }}</a>
      <img
        :src="newsList.length > 0 ? newsList[0].thumbnail : ''"
        alt="img 1"
      />
    </div>
    <div class="newsletter">
      <a @:click="changeTapNews2">{{
        newsList.length > 0 ? newsList[1].title : "Loading..."
      }}</a>
      <img
        :src="newsList.length > 0 ? newsList[1].thumbnail : ''"
        alt="img 2"
      />
    </div>
    <div class="newsletter">
      <a @:click="changeTapNews3">{{
        newsList.length > 0 ? newsList[2].title : "Loading..."
      }}</a>
      <img
        :src="newsList.length > 0 ? newsList[2].thumbnail : ''"
        alt="img 3"
      />
    </div>
    <div class="newsletter">
      <a @:click="changeTapNews4">{{
        newsList.length > 0 ? newsList[3].title : "Loading..."
      }}</a>
      <img
        :src="newsList.length > 0 ? newsList[3].thumbnail : ''"
        alt="img 4"
      />
    </div>
    <div class="newsletter">
      <a @:click="changeTapNews5">{{
        newsList.length > 0 ? newsList[4].title : "Loading..."
      }}</a>
      <img
        :src="newsList.length > 0 ? newsList[4].thumbnail : ''"
        alt="img 5"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    changeTapNews1() {
      this.$router.push("/news1");
    },
    changeTapNews2() {
      this.$router.push("/news2");
    },
    changeTapNews3() {
      this.$router.push("/news3");
    },
    changeTapNews4() {
      this.$router.push("/news4");
    },
    changeTapNews5() {
      this.$router.push("/news5");
    },
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
.newsletter {
  width: 450px;
  margin: 30px auto;
}
a {
  font-weight: 700;
  font-size: 20px;
}
a:hover {
  color: rgb(0, 89, 255);
  cursor: pointer;
}
h1 {
  font-weight: 700;
  font-size: 30px;
  color: cadetblue;
}
</style>