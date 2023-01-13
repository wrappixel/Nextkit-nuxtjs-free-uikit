<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" md="10">
            <img src="/images/features/3/feature-img.jpg"
              alt="feature"
              class="rounded img-fluid"
            />
          </v-col>
          <v-col cols="12" sm="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <div>
                <div class="pa-10 text-center">
                  <v-chip size="small" class="bg-primary">
                    Feature 3
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    The New way of Making Your Website in mins
                  </h3>
                  <p class="text-muted">
                    You can relay on our amazing features list and also our
                    customer services will be great experience. You will love it
                    for sure.
                  </p>
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/"
                    elevation="0"
                  >
                    <span>Explore More</span>
                    <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

