<script setup>
import { defineComponent } from 'vue';
import LanguageSelector from './LanguageSelector.vue';
</script>

<template>
  <v-footer class="pa-0 flex-grow-0 flex-shrink-0">
    <v-row class="footer" no-gutters>
      <v-col class="text-center mt-4 mb-4" cols="12" sm="10">
        <span>
          {{ $t('legal.copyright') }}
          <router-link to="legal-notice">
            {{ $t('legal.notice') }}
          </router-link>
        </span>
      </v-col>
      <v-col class="text-center mt-4 like-link" cols="12" sm="2">
        <LanguageSelector />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default defineComponent({
  name: 'SiteFooter',
});
</script>
