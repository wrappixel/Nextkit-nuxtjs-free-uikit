<template>
  <div>
    <div class="formbanner1-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="5" class="d-flex align-center">
            <div class="text-center text-md-left">
              <h2 class="formbanner1-title font-weight-bold">
                Give your Business Real boost Now!
              </h2>
              <p class="mt-16 pt-4">
                To accomplish great things, we must not only act, but also
                dream; not only plan, but also believe.
              </p>
              <div class="mt-16 pt-2">
                <form>
                  <div class="stylish-input-group">
                    <v-text-field
                      placeholder="Enter Email Address"
                      solo
                    ></v-text-field>
                    <v-btn
                      rounded
                      color="primary"
                      elevation="0"
                      class="text-uppercase font-weight-medium"
                      dark
                    >
                      Get Started
                    </v-btn>
                  </div>
                </form>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="6" class="ml-auto">
            <v-img
              :src="require('@/assets/images/form-banner/form-banner1.png')"
              alt="banner"
            />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Form Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormBanner1",
  data() {
    return {};
  },
  methods: {},
};
</script>
