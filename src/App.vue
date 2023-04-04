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

      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          <div>
            <b>{{ $t('contact.title') }}</b><br>
            C/ Pompeu Fabra, 50<br>
            08922 Santa Coloma de Gramenet (Barcelona)<br>
            Tel: 93 386 12 68 <br>
            Fax: 93 386 74 42
          </div>
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          <span>
            © Copyright 2017. All Rights Reserved. <a href="legal-notice" target="_blank">Aviso
              Legal</a>
          </span>
        </v-col>
      </v-row>



    </v-footer>
  </v-app>
</template>
