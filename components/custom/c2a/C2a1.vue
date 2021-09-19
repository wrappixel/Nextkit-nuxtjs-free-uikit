<template>
  <div>
    <div class="c2a1-spacer primary">
      <v-container>
        <!-- -----------------------------------------------
            Start Call-2-Action
        ----------------------------------------------- -->
        <div class="d-block d-md-flex align-center">
          <h2 class="c2a-title white--text font-weight-medium">
            Are you happy with what we offer? Ask for Free Quote
          </h2>
          <div class="ml-auto mt-5 mt-md-0">
            <v-btn
              nuxt
              large
              to="/"
              class="btn-custom-md"
              outlined
              color="white"
              elevation="0"
              block
            >
              Ask for Quatation
            </v-btn>
          </div>
        </div>

        <!-- -----------------------------------------------
            End Call-2-Action
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "C2a1",
  data() {
    return {};
  },
  methods: {},
};
</script>
