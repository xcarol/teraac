<template>
  <v-card :title="$t('rgpd.title')">
    <div v-if="getLocale() === 'ca'">
      <RgpdCa />
    </div>
    <div v-else>
      <RgpdEs />
    </div>
  </v-card>
</template>

<script>
import RgpdCa from '../components/RgpdCa.vue';
import RgpdEs from '../components/RgpdEs.vue';

export default {
  name: 'RgpdNotice',

  components: {
    RgpdCa,
    RgpdEs,
  },

  methods: {
    getLocale() {
      return this.$cookies.get('locale') || this.$i18n.locale;
    },
  },
};
</script>
