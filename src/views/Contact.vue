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
          <v-map :zoom="15" center="{lat: 41.385064, lng: 2.173403}">
            <v-marker :lat="41.385064" :lng="2.173403" />
          </v-map>
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
    claveapi: 'AIzaSyD6M1Tylbc_0cx-DFHpSnxrrG8hCg6o_fI',
  }),

  beforeMount() {
    this.mailto = `mailto:${this.$t('contact.email')}`;
    this.phone1 = `tel:${this.$t('contact.phone1')}`;
    this.phone2 = `tel:${this.$t('contact.phone2')}`;
  },
};
</script>
