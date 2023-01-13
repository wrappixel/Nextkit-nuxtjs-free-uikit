<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Alert
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Alert</h2>
              <p>
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Alert
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <v-alert border="top" color="primary" dark>
              I'm an alert with a top border and primary color
            </v-alert>
            <v-alert border="left" color="accent" dark>
              I'm an alert with a border left type accent
            </v-alert>
            <v-alert border="right" color="error" dark>
              I'm an alert with a right border and error color
            </v-alert>
            <v-alert border="bottom" color="warning" dark>
              I'm an alert with a bottom border and warning color
            </v-alert>
            <v-alert border="left" color="success" dark>
              I'm an alert with a border left type success
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiAlert",
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Library",
          disabled: false,
          href: "/",
        },
        {
          text: "Data",
          disabled: true,
          href: "/",
        },
      ],
    };
  },
  methods: {},
};
</script>
