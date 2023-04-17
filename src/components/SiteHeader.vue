<template>
  <v-app-bar flat height="25"></v-app-bar>
  <v-app-bar flat color="#003253" height="60" class="main-app-bar">
      <v-app-bar-title class="motto">
        {{ $t('motto') }}
      </v-app-bar-title>
      <template v-slot:append>
        <p class="company">TERAAC</p>
      </template>
      <template v-slot:prepend>
        <v-img @click="gotoMain()" :src="logoImg" width="100" class="logo"></v-img>
      </template>
    </v-app-bar>
    <v-app-bar height="45">
      <v-app-bar-title>
        <v-row>
          <v-col class="text-right" style="margin-inline-end: 16px;">
            <router-link class="menu-link" to="about">{{ $t('menu.about-us') }}</router-link>
            <router-link class="menu-link" to="services">{{ $t('menu.services') }}</router-link>
          </v-col>
        </v-row>
      </v-app-bar-title>
    </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue';
import Logo from '../assets/logo.svg';

export default defineComponent({
  name: 'SiteHeader',

  data: () => ({
    logoImg: Logo,
  }),

  methods: {
    gotoMain() {
      this.$router.push({ name: 'home' });
    },
  },
});
</script>

<style scoped>
:deep() .v-toolbar__prepend {
  align-self: auto;
}
</style>
