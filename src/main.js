import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// Vue.use(ViewUI);
createApp(App).use(store).use(router).mount('#app')