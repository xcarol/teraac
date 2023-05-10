<template>
  <v-card flat>
    <v-card-title class="company-big-title">{{ $t('advices.title') }}</v-card-title>
    <v-card>
      <v-row dense>
        <v-col cols="6" sm="4" md="2" v-for="(advice, index) in advices" :key="index">
          <v-card class="ma-2 elevation-8 custom-v-card">
            <v-img :src="advice.image"></v-img>
            <v-card-title class="company-title">{{ $t(`advices.${advice.name}.title`) }}</v-card-title>
            <v-card-text class="text-left custom-v-card-text">{{ $t(`advices.${advice.name}.description`) }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import battery from '../assets/advices/battery.jpg';
import holiday from '../assets/advices/holiday.jpg';
import lights from '../assets/advices/light_and_sight.jpg';
import tyres from '../assets/advices/tyres.jpg';
import winter from '../assets/advices/winter.jpg';

export default {
  name: 'AdvicesPage',

  data: () => ({
    advices: [
      { name: 'battery', image: battery },
      { name: 'holiday', image: holiday },
      { name: 'lights', image: lights },
      { name: 'tyres', image: tyres },
      { name: 'winter', image: winter },
    ],
  }),
};
</script>

<style scoped>

</style>
