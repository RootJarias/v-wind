// Base Imports
import { createApp } from 'vue';
import App from '@/App.vue';

// Vue Router v4.1.6
import router from './router';

// Pinia v2.0.32
import pinia from './stores/index';

/* Tailwind CSS v3.3.1 */
import './assets/css/tailwind.css';

// Fontawesome v6.4.0
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/images/icons/fontawesome';

const _App = createApp(App);

// Register Global Components
_App.component('font-awesome-icon', FontAwesomeIcon);

// Register Facilities/3rd Party Components
_App.use(pinia);
_App.use(router);

_App.mount('#app');
