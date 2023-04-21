<template>
  <v-card :title="$t('legal.title')">
    <div v-if="getLocale() === 'ca'">
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

  components: {
    LegalCa,
    LegalEs,
  },

  methods: {
    getLocale() {
      return this.$cookies.get('locale') || this.$i18n.locale;
    },
  },
};
</script>
