import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import BuildTapView from "@/views/BuildTap/BuildTapView.vue";
import BuildTapSystem from "@/views/BuildTap/BuildTapSystem.vue";
import BuildTapResources from "@/views/BuildTap/BuildTapResources.vue";
import BuildTapAboutUs from "@/views/BuildTap/BuildTapAboutUs.vue";
import HomePage from "@/views/BuildTap/HomePage.vue";
import LoginBuildTap from "@/BuildTapComponents/LoginBuildTap.vue";
import MainHomePage from "@/views/BuildTap/MainHomePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginBuildTap,
    meta: {
      layout: "empty",
    },
  },
    {
    path: "/MainPage",
    name: "MainPage",
    component: MainHomePage,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/solution",
    name: "Solution",
    component: BuildTapView,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/system",
    name: "System",
    component: BuildTapSystem,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/resources",
    name: "Resources",
    component: BuildTapResources,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/about",
    name: "About",
    component: BuildTapAboutUs,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
