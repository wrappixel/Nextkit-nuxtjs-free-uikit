<template>
  <div class="banner-wrapper protrip-banner">
    <img class="img-bg" :lazy-src="img" max-height="150" max-width="250" :src="img"> </img>
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6" class="d-flex align-center justify-center banner-text">
          <div class="text-center text-md-left">
            <!-- < class="banner-title font-weight-bold white--text "> -->
          <vue-typed-js :strings="['Where do you want to go?']" :loop="true"
            :smartBackspace='true'
            :typeSpeed='120'
            :backSpeed='20'
            :backDelay='1000'>
            <h1 class="typing banner-title font-weight-bold white--text"></h1>
          </vue-typed-js>
             
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6" class="d-flex align-center justify-center banner-text">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              Where do you want to go?
            </h1>
          </div>
        </v-col>
        
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data() {
    return {}
  },
  
  computed: {
    img() {
      return require('@/assets/images/landingpage/travel.jpeg')
    },
  },
}
</script>
