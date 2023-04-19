<template>
  <span @click.stop="switchLanguage()">
    {{ altLanguage }}
  </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LanguageSelector',

  data: () => ({
    altLanguage: '',
  }),

  beforeMount() {
    this.setLanguageLabel();
  },

  methods: {
    setLanguageLabel() {
      const altLocale = this.$i18n.locale === 'ca' ? 'es' : 'ca';
      this.altLanguage = this.$t(`languages.${altLocale}`);
    },

    switchLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'ca' ? 'es' : 'ca';
      this.$cookies.set('locale', this.$i18n.locale);
      this.setLanguageLabel();
    },
  },
});
</script>
