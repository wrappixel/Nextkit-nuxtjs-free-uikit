<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Card
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Card</h2>
              <p>
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Card
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="6" lg="4">
            <v-card class="card-shadow">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Special Title Treatment </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" text> Share </v-btn>

                <v-btn color="error" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="10" md="6" lg="4">
            <v-card class="card-shadow">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
              >
                <v-card-title>Special Title Treatment </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" text> Share </v-btn>

                <v-btn color="error" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="10" md="6" lg="4">
            <v-card class="card-shadow">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              >
                <v-card-title>Special Title Treatment </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" text> Share </v-btn>

                <v-btn color="error" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiCard",
  data() {
    return {};
  },
  methods: {},
};
</script>
