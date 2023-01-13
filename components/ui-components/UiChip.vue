<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Chip
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Chip</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Chip
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        
        <div class="text-center">
          <v-chip class="ma-2"> Default </v-chip>
          <v-chip class="ma-2" color="primary"> primary </v-chip>
          <v-chip class="ma-2" color="accent"> accent </v-chip>
          <v-chip class="ma-2" color="secondary"> secondary </v-chip>
          <v-chip class="ma-2" color="error" text-color="white"> error </v-chip>
          <v-chip class="ma-2" color="success" text-color="white">
            success
          </v-chip>
          <v-chip class="ma-2" color="warning" text-color="white">
            warning
          </v-chip>
        </div>
        <div class="text-center mt-3">
          <v-chip class="ma-2" color="primary" label> Label </v-chip>
          <v-chip class="ma-2" color="accent" label> Label </v-chip>
          <v-chip class="ma-2" color="warning" label text-color="white">
            <v-icon start left> mdi-label </v-icon>
            Tags
          </v-chip>

          <v-chip class="ma-2" color="error" label>
            <v-icon start left> mdi-account-circle-outline </v-icon>
            John Leider
          </v-chip>

          <v-chip class="ma-2" close color="success" label text-color="white">
            <v-icon start left> mdi-twitter </v-icon>
            New Tweets
          </v-chip>
        </div>
      </v-container>
    </div>
  </div>
</template>

