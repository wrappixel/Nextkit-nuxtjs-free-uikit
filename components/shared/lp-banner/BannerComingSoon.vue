<template>
  <div class="bg-danger-grediant coming-soon__banner-wrapper" style="">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="6"
          lg="6"
          class="d-flex align-center justify-center"
        >
          <div class="text-center">
            <h2 class="coming-title font-weight-bold white--text">
              Coming soon
            </h2>
            <h4 class="coming-subtitle white--text font-weight-light">
              {{$t('coming_soon_description')}}
            </h4>
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
  name: "BannerComingSoon",
  data() {
    return {};
  },
  methods: {}
};
</script>
