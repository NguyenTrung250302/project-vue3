import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";

import App from "./App.vue";
import router from "./router";

createApp(App)
  .component("default-layout", DashboardLayout)
  .component("empty-layout", EmptyLayout)
  .use(router)
  .use(VueApexCharts)
  .mount("#app");
