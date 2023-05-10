<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" sm="6">
        <v-img class="elevation-10" :src="banner"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card flat>
          <v-card-title class="company-title">{{ $t('landing-page.title') }}</v-card-title>
          <v-card-text class="company-title">{{ $t('landing-page.description') }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import banner from '../assets/landing-pic.jpeg';

export default {
  name: 'LandingPage',

  data: () => ({
    banner,
  }),
};
</script>
