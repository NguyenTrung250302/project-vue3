/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faChevronDown,
  faChevronRight,
  faMinus,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faUserSecret,
  faMinus,
  faChevronRight,
  faChevronDown,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
);
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
