<template>
  <div>
    <div class="pricing-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Pricing Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Simple Pricing to make your Work Effective
              </h2>
              <p>We offer 100% satisafaction and Money back Guarantee</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Pricing
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <h5 class="font-weight-regular font-18">Regular Plan</h5>
                <div>
                  <sup>$</sup>
                  <span class="price-text">39</span>
                  <h6 class="font-14 text-uppercase font-weight-regular">
                    Yearly
                  </h6>
                </div>
                <p class="mt-16 pt-4">
                  The Master license allows you to customize, store and even
                  host your website using your platform
                </p>
              </v-card-text>
              <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                Choose Plan
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <h5 class="font-weight-regular font-18">Master Plan</h5>
                <div>
                  <sup>$</sup>
                  <span class="price-text">49</span>
                  <h6 class="font-14 text-uppercase font-weight-regular">
                    Yearly
                  </h6>
                </div>
                <p class="mt-16 pt-4">
                  The Master license allows you to customize, store and even
                  host your website using your platform
                </p>
              </v-card-text>
              <v-btn
                block
                large
                depressed
                color="error"
                class="text-uppercase rounded-t-0"
              >
                Choose Plan
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <h5 class="font-weight-regular font-18">Premium Plan</h5>
                <div>
                  <sup>$</sup>
                  <span class="price-text">69</span>
                  <h6 class="font-14 text-uppercase font-weight-regular">
                    Yearly
                  </h6>
                </div>
                <p class="mt-16 pt-4">
                  The Master license allows you to customize, store and even
                  host your website using your platform
                </p>
              </v-card-text>
              <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                Choose Plan
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {};
  },
  methods: {},
};
</script>
