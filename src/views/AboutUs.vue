<template>
  <v-card flat :title="$t('menu.aboutus')">
    <div v-if="getLocale() === 'ca'">
      <AboutUsCa />
    </div>
    <div v-else>
      <AboutUsEs />
    </div>
  </v-card>
</template>

<script>
import AboutUsCa from '../components/AboutUsCa.vue';
import AboutUsEs from '../components/AboutUsEs.vue';

export default {
  name: 'AboutUs',

  components: {
    AboutUsCa,
    AboutUsEs,
  },

  methods: {
    getLocale() {
      return this.$cookies.get('locale') || this.$i18n.locale;
    },
  },

  watch: {
    '$i18n.locale': {
      immediate: true,
      handler() {
        this.head.changeTitle();
      },
    },
  },
};
</script>
