import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import HomePage from "@/views/BuildTap/HomePage.vue";
import BuildTapView from "@/views/BuildTap/BuildTapView.vue";
import BuildTapSystem from "@/views/BuildTap/BuildTapSystem.vue";
import BuildTapResources from "@/views/BuildTap/BuildTapResources.vue";
import BuildTapAboutUs from "@/views/BuildTap/BuildTapAboutUs.vue";
import LoginBuildTap from "@/BuildTapComponents/LoginBuildTap.vue";
import MainHomePage from "@/views/BuildTap/MainHomePage.vue";
import PageProfile from "@/views/BuildTap/PageProfile.vue";
import NewsListTap from "@/views/BuildTap/NewsListTap.vue";
import NewsLetter1 from "@/BuildTapComponents/BuildTapNews/NewsLetter1.vue";
import NewsLetter2 from "@/BuildTapComponents/BuildTapNews/NewsLetter2.vue";
import NewsLetter3 from "@/BuildTapComponents/BuildTapNews/NewsLetter3.vue";
import NewsLetter4 from "@/BuildTapComponents/BuildTapNews/NewsLetter4.vue";
import NewsLetter5 from "@/BuildTapComponents/BuildTapNews/NewsLetter5.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/login",
    component: LoginBuildTap,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/MainPage",
    component: MainHomePage,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/solution",
    component: BuildTapView,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/system",
    component: BuildTapSystem,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/resources",
    component: BuildTapResources,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/about",
    component: BuildTapAboutUs,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/profile",
    component: PageProfile,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/news",
    component: NewsListTap,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/errorLogin",
    component: NotFound,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/news1",
    component: NewsLetter1,
    meta: {
      layout: "empty",
    },
  },
    {
    path: "/news2",
    component: NewsLetter2,
    meta: {
      layout: "empty",
    },
  },
    {
    path: "/news3",
    component: NewsLetter3,
    meta: {
      layout: "empty",
    },
  },
    {
    path: "/news4",
    component: NewsLetter4,
    meta: {
      layout: "empty",
    },
  },
    {
    path: "/news5",
    component: NewsLetter5,
    meta: {
      layout: "empty",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
