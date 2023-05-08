<template>
  <div>
    <header>
      <nav-bar-header />
    </header>

    <body>
      <div class="sidebar">
        <list-data-news />
      </div>
      <div class="main">
        <main-content-news />
      </div>
    </body>
    <footer>
      <footer-view />
    </footer>
  </div>
</template>

<script>
import NavBarHeader from "@/components/MyArchive/headerSolution/NavBarHeader.vue";
import ListDataNews from "@/BuildTapComponents/BuildTapNews/ListDataNews.vue";
import MainContentNews from "@/BuildTapComponents/BuildTapNews/MainContentNews.vue";
import FooterView from "@/components/MyArchive/FooterView.vue";
export default {
  components: {
    NavBarHeader,
    ListDataNews,
    MainContentNews,
    FooterView,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "sidebar main";
  grid-gap: 10px;
}
.sidebar {
  grid-area: sidebar; /* chỉ định khu vực cho sidebar */
}

.main {
  grid-area: main; /* chỉ định khu vực cho main */
}
</style>>