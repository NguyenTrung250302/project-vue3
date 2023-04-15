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
      layout: "empty"
    }
  },
  {
    path: "/errorLogin",
    component: NotFound,
    meta: {
    layout: "empty"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
