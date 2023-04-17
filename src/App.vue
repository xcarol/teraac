<script setup>
import { RouterView } from 'vue-router';
import CookiesNotice from './components/CookiesNotice.vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <v-app>
    <CookiesNotice />
    <SiteHeader />
    <v-main>
      <RouterView />
    </v-main>
    <SiteFooter />
  </v-app>
</template>
