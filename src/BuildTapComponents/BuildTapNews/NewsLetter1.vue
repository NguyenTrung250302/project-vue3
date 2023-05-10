<template>
  <div class="container0">
    <nav-bar-header />
    <!-- show news -->
    <div class="newsletter0">
      <h1>{{ newsList.length > 0 ? newsList[0].title : "Loading..." }}</h1>
      <img
        id="img-center"
        :src="newsList.length > 0 ? newsList[0].thumbnail : ''"
        alt="img 0"
      />
      <h2>{{ newsList.length > 0 ? newsList[0].caption : "Loading..." }}</h2>
      <p>
        Trang web liên quan:
        <a
          href="https://thaycaoanh.vn/tu-vi-1/xem-tu-vi-tron-doi-cua-12-con-giap-chinh-xac-nhat-2/"
        >
          {{ newsList.length > 0 ? newsList[0].url : "Loading..." }}
        </a>
      </p>
    </div>
    <!-- comment -->
    <comment-news />
    <!-- related-info -->
    <div class="related-information">
      <h3>Tin liên quan</h3>
      <div class="related-info">
        <img
          class="img"
          :src="newsList.length > 0 ? newsList[1].thumbnail : ''"
          alt="img 0"
        />
        <a href="" @:click="changeTapNews1">{{
          newsList.length > 0 ? newsList[1].title : "Loading..."
        }}</a>
      </div>
      <div class="related-info">
        <img
          class="img"
          :src="newsList.length > 0 ? newsList[2].thumbnail : ''"
          alt="img 0"
        />
        <a href="" @:click="changeTapNews1">{{
          newsList.length > 0 ? newsList[2].title : "Loading..."
        }}</a>
      </div>
      <div class="related-info">
        <img
          class="img"
          :src="newsList.length > 0 ? newsList[4].thumbnail : ''"
          alt="img 0"
        />
        <a href="" @:click="changeTapNews1">{{
          newsList.length > 0 ? newsList[4].title : "Loading..."
        }}</a>
      </div>
    </div>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import axios from "axios";
import NavBarHeader from "@/components/MyArchive/headerSolution/NavBarHeader.vue";
import FooterView from "@/components/MyArchive/FooterView.vue";
import CommentNews from "@/BuildTapComponents/BuildTapNews/CommentNews.vue";
export default {
  components: {
    NavBarHeader,
    FooterView,
    CommentNews,
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
  methods: {
    changeTapNews1() {
      this.$router.push("/news2");
    },
    changeTapNews2() {
      this.$router.push("/news3");
    },
    changeTapNews3() {
      this.$router.push("/news4");
    },
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
.related-information {
  width: 700px;
  height: 500px;
  margin: 30px auto;
  border: solid 1px silver;
}
.related-info {
  margin: 20px 20px;
  display: flex;
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
  color: rgb(51, 51, 64);
}
h3 {
  border-bottom: solid 1px silver;
  margin: 0 20px;
  padding: 20px 0;
  font-weight: 500;
  font-size: 20px;
}
.img {
  width: 200px;
  height: 100px;
}
#img-center {
  margin: 0 auto;
}
p {
  font-size: 18px;
  font-weight: 500;
  margin: 20px auto;
}
a {
  margin: 0 15px;
  font-weight: 500;
  font-size: 20px;
}
a:hover {
  color: rgb(0, 47, 255);
}
</style>