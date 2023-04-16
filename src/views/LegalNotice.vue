<template>
  <v-card :title="this.$t('legal.title')">
    <div v-if="locale === 'ca'">
      <LegalCa />
    </div>
    <div v-else>
      <LegalEs />
    </div>
  </v-card>
</template>

<script>
import LegalCa from '../components/LegalCa.vue';
import LegalEs from '../components/LegalEs.vue';

export default {
  name: 'LegalNotice',

  data: () => ({
    locale: 'ca',
  }),
  components: {
    LegalCa,
    LegalEs,
  },

  beforeMount() {
    this.locale = this.$cookies.get('locale');
  },
};
</script>
