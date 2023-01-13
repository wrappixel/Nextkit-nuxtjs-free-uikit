<template>
  <div class="coming-wrapper" ref="coming-soon">
    <v-container>
      <!-- -----------------------------------------------
            Start Coming Soon
        ----------------------------------------------- -->
      <v-row>
        <v-col cols="12" sm="10" md="6" class="d-flex align-center">
          <div>
            <h2 class="coming-title font-weight-bold white--text">
              Pro Version coming soon
            </h2>
            <h4 class="coming-subtitle white--text font-weight-light">
              We will add Pro Version with tons of great features and multiple
              category demos which is ready to use...
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                to="/#"
                class="btn-custom-md"
                color="white"
                elevation="0"
              >
                Coming Soon
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Coming Soon
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  },
  methods: {}
};
</script>
