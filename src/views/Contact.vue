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
    mapurl: 'https://www.google.com/maps/embed'
            + '?pb=!1m18!1m12!1m3!1d1283.653473265026!2d2.2067561103365083'
            + '!3d41.45030563810665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
            + '!3m3!1m2!1s0x12a4bc928693d749%3A0x9d936eae07a496ff'
            + '!2sBosch%20Car%20Service%20Teraac!5e0!3m2!1sca!2ses!4v1681918706980!5m2!1sca!2ses',
  }),

  beforeMount() {
    this.mailto = `mailto:${this.$t('contact.email')}`;
    this.phone1 = `tel:${this.$t('contact.phone1')}`;
    this.phone2 = `tel:${this.$t('contact.phone2')}`;
  },
};
</script>
