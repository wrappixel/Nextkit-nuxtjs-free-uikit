<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="8">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                Quick Contact
              </h4>
              <form>
                <v-row class="mt-15">
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Name"
                      outlined
                      v-model="name"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Email"
                      outlined
                      type="email"
                      v-model="email"
                      placeholder="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-textarea
                      name="message"
                      outlined
                      label="Message"
                      rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                  nuxt
                  to="/"
                  class="btn-custom-md btn-danger-gradient mt-12"
                  outlined
                  color="white"
                  elevation="0"
                >
                  Submit
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="12" lg="4">
            <div class="primary contact-detail-card">
              <h2 class="detail-title font-weight-medium white--text">
                Wrappixel Headquarters
              </h2>
              <p class="mt-15 op-8 mb-0 white--text">251 546 9442</p>
              <p class="op-8 mb-8 white--text">info@wrappixel.com</p>
              <p class="mt-15 op-8 mb-0 white--text">601 Sherwood Ave.</p>
              <p class="op-8 mb-0 white--text">San Bernandino, CA 92404</p>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {},
};
</script>
