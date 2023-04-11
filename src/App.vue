<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <CookiesNotice />
    <v-app-bar flat height="25"></v-app-bar>
    <v-app-bar flat color="#003253" height="60">
      <v-app-bar-title class="motto">
        {{ $t('motto') }}
      </v-app-bar-title>
      <template v-slot:append>
        <p class="company">TERAAC</p>
      </template>
    </v-app-bar>
    <v-app-bar height="45">
      <v-app-bar-title>
        <v-row>
          <v-col class="text-right" style="margin-inline-end: 16px;">
            <a href="/about-us" class="menu-link">
              {{ $t('menu.about-us') }}
            </a>
            <a href="/services" class="menu-link">
              {{ $t('menu.services') }}
            </a>
          </v-col>
        </v-row>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>

      <v-row class="footer" justify="center" no-gutters>
        <v-col class="text-left mt-4" cols="12">
          <div>
            <b>{{ $t('contact.title') }}</b><br>
            {{ $t('contact.street') }}<br>
            {{ $t('contact.city') }}<br>
            {{ $t('contact.phone') }}<br>
            {{ $t('contact.fax') }}
          </div>
        </v-col>
        <v-col class="text-center mt-4" cols="11">
          <span>
            {{ $t('legal.copyright') }}
            <a href="/legal-notice" target="_blank">
              {{ $t('legal.notice') }}
            </a>
          </span>
        </v-col>
        <v-col class="text-center mt-4 like-link" cols="1">
          <LanguageSelector />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import LanguageSelector from './components/LanguageSelector.vue'
import CookiesNotice from './components/CookiesNotice.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    LanguageSelector,
    CookiesNotice
  }
})
</script>
