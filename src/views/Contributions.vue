<template>
  <v-card flat>
    <v-card-title class="company-title">{{ $t('contributions.title') }}</v-card-title>
    <v-card-text class="company-text">{{ $t('contributions.description1') }}</v-card-text>
    <v-card-text class="company-text">{{ $t('contributions.description2') }}</v-card-text>
    <v-card>
      <v-card-title class="company-title">{{ $t('contributions.companies') }}</v-card-title>
      <v-row dense>
        <v-col cols="6" sm="4" md="2" v-for="(company, index) in companies" :key="index">
          <v-card class="ma-2 elevation-8">
            <v-img class="ma-5" :src="company"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-card-title class="company-title">{{ $t('contributions.brands') }}</v-card-title>
      <v-row dense>
        <v-col cols="6" sm="4" md="2" v-for="(brand, index) in brands" :key="index">
          <v-card class="ma-2 elevation-8 custom-v-card">
            <v-img class="ma-5" :src="brand.logo"></v-img>
            <v-card-text class="text-center">{{ $t(`brands.${brand.name}`) }}</v-card-text>
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

import alpine from '../assets/brands/alpine.jpg';
import aragon from '../assets/brands/aragon.jpg';
import audison from '../assets/brands/audison.jpg';
import blaupunkt from '../assets/brands/blaupunkt.jpg';
import boschb from '../assets/brands/bosch.jpg';
import diavia from '../assets/brands/diavia.jpg';
import dirna from '../assets/brands/dirna.jpg';
import dometic from '../assets/brands/dometic.jpg';
import dunlop from '../assets/brands/dunlop.jpg';
import goodyear from '../assets/brands/goodyear.jpg';
import hertz from '../assets/brands/hertz.jpg';
import kenwood from '../assets/brands/kenwood.jpg';
import monroe from '../assets/brands/monroe.jpg';
import parrot from '../assets/brands/parrot.jpg';
import tomtom from '../assets/brands/tomtom.jpg';
import valvoline from '../assets/brands/valvoline.jpg';
import waeco from '../assets/brands/waeco.jpg';
import webasto from '../assets/brands/webasto.jpg';

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
    brands: [
      { name: 'alpine', logo: alpine },
      { name: 'aragon', logo: aragon },
      { name: 'audison', logo: audison },
      { name: 'blaupunkt', logo: blaupunkt },
      { name: 'boschb', logo: boschb },
      { name: 'detector', logo: detector },
      { name: 'diavia', logo: diavia },
      { name: 'dirna', logo: dirna },
      { name: 'dometic', logo: dometic },
      { name: 'dunlop', logo: dunlop },
      { name: 'goodyear', logo: goodyear },
      { name: 'hertz', logo: hertz },
      { name: 'kenwood', logo: kenwood },
      { name: 'monroe', logo: monroe },
      { name: 'parrot', logo: parrot },
      { name: 'tomtom', logo: tomtom },
      { name: 'valvoline', logo: valvoline },
      { name: 'waeco', logo: waeco },
      { name: 'webasto', logo: webasto },
    ],
  }),
};
</script>
