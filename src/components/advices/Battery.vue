<template>
  <v-card flat>
    <v-card-title class="company-big-title">
      {{ $t('battery.title') }}
    </v-card-title>
    <v-card flat v-for="(paragraph, index) in paragraphs" :key="index">
      <v-card-subtitle class="company-title">
        {{ paragraph.title }}
      </v-card-subtitle>
      <v-card-text class="company-text" v-for="(text, index) in paragraph.items" :key="index">{{ text }}</v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'BatteryAdvice',

  data: () => ({
    paragraphs: [],
  }),

  watch: {
    '$i18n.locale': function localeChange(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.fillParagraphs();
      }
    },
  },

  methods: {
    fillParagraphs() {
      this.paragraphs = [];

      let parCount = 1;
      const thereAreContent = true;

      while (thereAreContent) {
        const title = `battery.p${parCount}.title`;
        const paragraphTitle = this.$t(title);
        if (paragraphTitle === title) {
          break;
        }
        const items = [];
        let texCount = 1;
        while (thereAreContent) {
          const text = `battery.p${parCount}.text${texCount}`;
          const paragraphText = this.$t(text);
          if (paragraphText === text) {
            break;
          }
          items.push(paragraphText);
          texCount += 1;
        }
        this.paragraphs.push({ title: paragraphTitle, items });
        parCount += 1;
      }
    },
  },

  beforeMount() {
    this.fillParagraphs();
  },
};
</script>
