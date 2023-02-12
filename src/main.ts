import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faBrain,
  faChevronDown,
  faChevronRight,
  faCode,
  faEye,
  faFileCirclePlus,
  faGlobe,
  faHammer,
  faListCheck,
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

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

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
  faListCheck,
  faFileCirclePlus,
  faBrain,
  faHammer,
  faGlobe,
  faCode,
  faEye,
);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  // .use(Antd)
  .mount('#app');
