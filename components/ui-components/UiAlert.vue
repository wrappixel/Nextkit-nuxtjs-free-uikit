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
              <p class="text-muted">
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
            <v-alert border="top" density="default" color="primary" class="mb-4">
              I'm an alert with a top border and primary color
            </v-alert>
            <v-alert border="start" density="default" color="accent" class="mb-4">
              I'm an alert with a border left type accent
            </v-alert>
            <v-alert border="end" density="default" color="error" class="mb-4" >
              I'm an alert with a right border and error color
            </v-alert>
            <v-alert border="bottom" density="default" color="warning" class="mb-4">
              I'm an alert with a bottom border and warning color
            </v-alert>
            <v-alert border="start" density="default" color="success" >
              I'm an alert with a border left type success
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
