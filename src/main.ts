/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faChevronDown,
  faChevronRight,
  faMinus,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
// eslint-disable-next-line max-len
library.add(faUserSecret, faMinus, faChevronRight, faChevronDown, faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .mount('#app');
