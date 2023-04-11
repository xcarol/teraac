<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="service in services" :key="service.name">

        <v-card flat>
          <v-img :src="service.img" height="300px" cover></v-img>

          <v-card-title>
            {{ $t(service.name + '.title') }}
          </v-card-title>

          <v-card-text>
            {{ $t(service.name + '.text') }}
          </v-card-text>  
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import serviceLiniaPreITVImg from '../assets/service-linia-pre-itv.jpg'
import serviceAlineacioDireccioImg from '../assets/service-alineacio-direccio.jpg'
import serviceMecanicaImg from '../assets/service-mecanica.jpg'
import serviceAireCondicionatImg from '../assets/service-aire-condicionat.jpg'
import serviceInjeccioImg from '../assets/service-injeccio.jpg'

export default {
  name: 'ServicesPage',

  data: () => ({
    services: undefined,
  }),

  beforeMount() {
    this.services = [
      { name: 'service-linia-pre-itv', img: serviceLiniaPreITVImg },
      { name: 'service-alineacio-direccio', img: serviceAlineacioDireccioImg },
      { name: 'service-mecanica', img: serviceMecanicaImg },
      { name: 'service-aire-condicionat', img: serviceAireCondicionatImg },
      { name: 'service-injeccio', img: serviceInjeccioImg },
    ];
  }
}
</script>
