<template>
  <v-card flat>
    <v-card-title class="landing-title">{{ $t('contributions.title') }}</v-card-title>
    <v-card-text class="landing-text">{{ $t('contributions.description1') }}</v-card-text>
    <v-card-text class="landing-text">{{ $t('contributions.description2') }}</v-card-text>
    <v-card>
      <v-card-title class="landing-title">{{ $t('contributions.companies') }}</v-card-title>
      <v-row dense>
        <v-col cols="6" sm="4" md="2" v-for="(company, index) in companies" :key="index">
          <v-card class="ma-2 elevation-8">
            <v-img class="ma-5" :src="company"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import bosch from '../assets/companies/1bosch.jpg';
import leaseplan from '../assets/companies/2leaseplan.jpg';
import arval from '../assets/companies/3arval.jpg';
import detector from '../assets/companies/4detector.jpg';
import racc from '../assets/companies/5racc.jpg';
import adac from '../assets/companies/6adac.jpg';
import race from '../assets/companies/7race.jpg';
import autoclub from '../assets/companies/8autoclub.jpg';
import mapfre from '../assets/companies/9 mapfre.jpg';
import cea from '../assets/companies/10cea.jpg';

export default {
  name: 'ContributionsPage',

  data: () => ({
    companies: [
      bosch,
      leaseplan,
      arval,
      detector,
      racc,
      adac,
      race,
      autoclub,
      mapfre,
      cea,
    ],
  }),
};
</script>
