<template>
  <div class="banner-wrapper protrip-banner">
    <img class="img-bg" :lazy-src="img" max-height="150" max-width="250" :src="img"> </img>
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center" class="mti-56">
        <v-col cols="12" md="8" lg="6" class="d-flex align-center justify-center banner-text">
          <div class="text-center text-md-left">
            <!-- < class="banner-title font-weight-bold white--text "> -->
          <vue-typed-js :strings="[$t('where_do_you_want_to_go')]" :loop="true"
            :smartBackspace='true'
            :typeSpeed='120'
            :backSpeed='20'
            :backDelay='1000'>
            <h1 class="typing banner-title font-weight-bold white--text"></h1>
          </vue-typed-js>

          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="mti-56">
        <v-col cols="12" md="8" lg="8" class="d-flex align-center justify-center banner-text">
          <SearchBox @onApplyFilter="handleApplyFilters" :is-fixed="false"/>
        </v-col>

      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
import SearchBox from '@/components/protrip/SearchBox'
export default {
  name: 'Banner',
  components:{
    SearchBox,
  },
  data() {
    return {}
  },

  computed: {
    img() {
      return require('@/assets/images/landingpage/travel.jpg')
    },
  },
  methods: {
    handleApplyFilters(payload) {
      this.$emit('search', payload)
    }
  }
}
</script>
