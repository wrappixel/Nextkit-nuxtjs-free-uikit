<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" lg="10">
            <v-img
              :src="require('@/assets/images/features/3/feature-img.jpg')"
              alt="feature"
              class="rounded"
            />
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <v-chip small color="info" text-color="white">
                    Feature 3
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    The New way of Making Your Website in mins
                  </h3>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience. You will love it
                    for sure.
                  </p>
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/"
                    elevation="0"
                  >
                    <span>Explore More</span>
                    <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature3",
  data() {
    return {};
  },
  methods: {},
};
</script>
