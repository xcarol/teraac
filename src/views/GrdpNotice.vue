<template>
  <v-card :title="$t('grdp.title')">
    <div v-if="getLocale() === 'ca'">
      <GrdpCa />
    </div>
    <div v-else>
      <GrdpEs />
    </div>
  </v-card>
</template>

<script>
import GrdpCa from '../components/GrdpCa.vue';
import GrdpEs from '../components/GrdpEs.vue';

export default {
  name: 'GrdpNotice',

  components: {
    GrdpCa,
    GrdpEs,
  },

  methods: {
    getLocale() {
      return this.$cookies.get('locale') || this.$i18n.locale;
    },
  },
};
</script>
