<template>
  <v-card flat :title="this.$t('menu.contact')">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card-text>
          <v-icon icon="mdi-home"></v-icon> {{ $t('contact.street') }}<br />
          <v-icon></v-icon> {{ $t('contact.city') }}<br />
          <v-icon icon="mdi-phone"></v-icon>
          <a class="contact-link" :href="phone1">{{ $t('contact.phone1') }}</a> -
          <a class="contact-link" :href="phone2">{{ $t('contact.phone2') }}</a><br />
          <v-icon icon="mdi-email"></v-icon>
          <a class="contact-link" :href="mailto" target="_blank">{{ $t('contact.email') }}</a><br />
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card-text>
          <iframe
            :src="mapurl"
            class="elevation-10"
            width="100%" height="300" style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ContactPage',

  data: () => ({
    mailto: '',
    phone1: '',
    phone2: '',
    mapurl: '',
  }),

  beforeMount() {
    this.mailto = `mailto:${this.$t('contact.email')}`;
    this.phone1 = `tel:${this.$t('contact.phone1')}`;
    this.phone2 = `tel:${this.$t('contact.phone2')}`;
    this.mapurl = import.meta.env.VITE_EMBEDDED_MAP;
  },
};
</script>
