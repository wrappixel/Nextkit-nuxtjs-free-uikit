<template>
  <div class="banner-wrapper bg-danger-dark">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="6"
          lg="4"
          class="d-flex align-center justify-center"
        >
          <div class="text-center">
            <h1 class="banner-title font-weight-bold text-white">
              Opps, 404 - Error
            </h1>
            <h4 class="banner-subtitle mr-0 text-white font-weight-regular">
              The page you are looking for is not available please go back to
              homepage
            </h4>
            <div class="mt-16 pt-2">
              <v-btn large to="/" color="error" elevation="0">
                Back to Homepage
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>

