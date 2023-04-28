import { createApp } from 'vue'
import store from './store/index.js';
import App from './App.vue'

// createApp(App).mount('#app')

// createApp(App).use(store).mount('#app');

const app = createApp(App)

app.use(store)

app.mount('#app')