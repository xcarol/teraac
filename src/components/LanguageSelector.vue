<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <span v-bind="props">
        {{ $t('language') }}
      </span>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        @click="changeLang(item.value)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LanguageSelector',

  data: () => ({
    items: [],
  }),
  beforeMount() {
    this.updateLocaleList();
  },
  methods: {
    updateLocaleList() {
      this.items = [];
      this.$i18n.availableLocales.forEach((locale) => {
        this.items.push({
          title: this.$t(`languages.${locale}`, 0, { locale }),
          value: locale,
        });
      });
    },
    changeLang(locale) {
      this.$i18n.locale = locale;
      this.$cookies.set('locale', locale);
    },
  },
});
</script>
