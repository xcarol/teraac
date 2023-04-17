import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

import loadFonts from './plugins/webfontloader';

loadFonts();

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(VueCookies);

app.mount('#app');
