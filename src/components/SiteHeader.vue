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
      <v-img @click="goto('home')" :src="logoImg" width="100" class="logo"></v-img>
    </template>
  </v-app-bar>
  <v-app-bar height="45">
    <v-app-bar-title>
      <v-row>
        <v-spacer />
        <v-col class="flex-grow-0 flex-shrink-1 d-none d-sm-block">
          <div class="d-inline-block align-center" v-for="(item, index) in items" :key="index">
            <router-link class="menu-link" :to="item.to">{{ $t(item.menu) }}</router-link>
          </div>
        </v-col>
      </v-row>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn class="d-xs-block d-sm-none" icon="mdi-menu" @click.stop="drawer = !drawer"></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer location="right" v-model="drawer" temporary>
    <v-list>
      <v-list-item class="menu-link" v-for="item in items" :key="item.to" :title="$t(item.menu)"
        @click.stop="goto(item.to)">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';
import Logo from '../assets/logo.svg';

export default defineComponent({
  name: 'SiteHeader',

  data: () => ({
    logoImg: Logo,
    drawer: false,
    items: [
      { to: 'about', menu: 'menu.about-us' },
      { to: 'contact', menu: 'menu.contact' },
    ],
  }),

  methods: {
    goto(page) {
      this.$router.push({ name: page });
      this.drawer = false;
    },
  },
});
</script>

<style scoped>
:deep() .v-toolbar__prepend {
  align-self: auto;
}
</style>
