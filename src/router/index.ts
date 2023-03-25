import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
// import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import BuildTapView from "../views/BuildTap/BuildTapView.vue";
import BuildTapSystem from "@/views/BuildTap/BuildTapSystem.vue";
import BuildTapResources from "@/views/BuildTap/BuildTapResources.vue";
import BuildTapAboutUs from "@/views/BuildTap/BuildTapAboutUs.vue";
import HomePage from "@/views/BuildTap/HomePage.vue";
import LoginBuildTap from "@/BuildTapComponents/LoginBuildTap.vue";
const routes: Array<RouteRecordRaw> = [
  // form goc
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  //   meta: {
  //     layout: "empty",
  //   },
  // },
    {
    path: "/",
    name: "LoginBuildTap",
    component: LoginBuildTap,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: HomePage,
    meta: {
      layout: "empty",
    }
  },
  // 
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
    }
  },
  {
    path: "/resources",
    name: "Resources",
    component: BuildTapResources,
    meta: {
      layout: "empty",
    }
  },
    {
    path: "/about",
    name: "About",
    component: BuildTapAboutUs,
    meta: {
      layout: "empty",
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
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
