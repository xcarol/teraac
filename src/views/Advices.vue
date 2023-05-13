<template>
  <v-card flat>
    <v-card-title class="company-big-title">{{ $t('advices.title') }}</v-card-title>
    <v-card mb-2 flat>
      <v-row dense class="custom-v-row">
        <v-col cols="6" sm="4" md="2" v-for="(advice, index) in advices" :key="index">
          <v-card class="ma-2 elevation-8 advice-v-card">
            <v-img class="advice-img" :src="advice.image"></v-img>
            <v-card-title class="company-title">{{ $t(`advices.${advice.name}.title`) }}</v-card-title>
            <v-card-text class="text-left advice-text">{{ $t(`advices.${advice.name}.description`) }}</v-card-text>
            <v-card-actions class="pt-0 justify-end advice-actions">
              <v-btn variant="tonal" color="primary" @click="goto(advice.page)">
                {{ $t('advices.button') }}
              </v-btn>
            </v-card-actions>
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
      { name: 'battery', image: battery, page: 'battery' },
      { name: 'holiday', image: holiday },
      { name: 'lights', image: lights },
      { name: 'tyres', image: tyres },
      { name: 'winter', image: winter },
    ],
  }),

  methods: {
    goto(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.advice-v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.advice-text {
  flex-grow: 1;
}

.advice-actions {
  align-self: flex-end;
}

.advice-img {
  flex-grow: 0;
}
</style>
