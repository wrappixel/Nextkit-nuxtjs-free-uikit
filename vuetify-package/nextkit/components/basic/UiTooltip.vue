<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Tooltip
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Tooltip</h2>
              <p>
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Tooltip
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <div class="text-center">
          <div class="btn-groups">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Left
                </v-btn>
              </template>
              <span>Left tooltip</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Top
                </v-btn>
              </template>
              <span>Top tooltip</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Bottom
                </v-btn>
              </template>
              <span>Bottom tooltip</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="accent"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Right
                </v-btn>
              </template>
              <span>Right tooltip</span>
            </v-tooltip>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiTooltip",
  data() {
    return {};
  },
  methods: {},
};
</script>
