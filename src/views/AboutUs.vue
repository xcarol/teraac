<template>
  <v-card flat :title="$t('menu.about-us')">
    <div v-if="locale === 'ca'">
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

  data: () => ({
    locale: 'ca',
  }),

  components: {
    AboutUsCa,
    AboutUsEs,
  },

  beforeMount() {
    this.locale = this.$cookies.get('locale');
  },

  beforeUpdate() {
    this.locale = this.$cookies.get('locale');
  },
};
</script>
