<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        {{ $t('motto') }}
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
            C/ Pompeu Fabra, 50<br>
            08922 Santa Coloma de Gramenet (Barcelona)<br>
            Tel: 93 386 12 68 <br>
            Fax: 93 386 74 42
          </div>
        </v-col>
        <v-col class="text-center mt-4" cols="11">
          <span>
            © Teraac Bosch Car Service S.L. 2023. Todos los derechos reservados.
            <a href="legal-notice" target="_blank">
              Aviso Legal
            </a>
          </span>
        </v-col>
        <v-col class="text-center mt-4" cols="1">
          <LanguageSelector />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import LanguageSelector from './components/LanguageSelector.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    LanguageSelector
  }
})
</script>
