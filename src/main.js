// Base Imports
import { createApp } from 'vue';
import App from './App.vue';

// Vue Router v4.1.6
import router from './router';

// Pinia v2.0.32
import { createPinia } from 'pinia';

/* Tailwind CSS v3.3.1 */
import './assets/css/tailwind.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
