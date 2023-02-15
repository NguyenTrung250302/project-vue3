import { createApp } from 'vue';
import CoreuiVue from '@coreui/vue';
import CIcon from '@coreui/icons-vue';
import icons from '@/assets/icons';
import DocsExample from '@/components/DocsExample.vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
/* eslint-disable */
// @ts-ignore
app.use(store).use(router).use(CoreuiVue);
app.provide('icons', icons);
app.component('CIcon', CIcon);
app.component('DocsExample', DocsExample);

app.mount('#app');
