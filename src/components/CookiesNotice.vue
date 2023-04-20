<template>
  <v-app-bar class="cookies-notice-bar" flat height="40" v-if="cookieNotSet">
    <v-app-bar-title class="cookies-notice-title">
      <i18n-t keypath="legal.cookie-notice" scope="global">
        <router-link @click.stop="closeCookiesNotice" to="legal-notice">
          {{ $t('legal.title') }}
        </router-link>
      </i18n-t>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn @click.stop="closeCookiesNotice" icon="mdi-close"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CookiesNotice',

  data: () => ({
    cookieTrg: undefined,
  }),
  beforeMount() {
    this.cookieTrg = this.$cookies.get('cookies-notice');
  },
  computed: {
    cookieNotSet: {
      get() {
        return this.cookieTrg !== '1';
      },
    },
  },
  methods: {
    closeCookiesNotice() {
      this.cookieTrg = '1';
      this.$cookies.set('cookies-notice', '1');
    },
  },
});
</script>

<style scoped>
a {
  font-size: 14px !important;
}

.cookies-notice-bar {
  background-color: #d1e4ff !important;
  color: #56B0FF !important;
}

.cookies-notice-title {
  font-size: 14px !important;
}
</style>
