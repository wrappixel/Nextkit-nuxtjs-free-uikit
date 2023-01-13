<script setup lang="ts">
import { ref } from "vue";
const checkbox2 = ref(false);
/* Password hide/show */
const show2 = ref(true);
const show3 = ref(true);
</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Form</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Form
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <v-card class="card-shadow">
              <v-card-text>
                <v-text-field
                v-model="first"
                color="primary"
                label="User Name"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="last"
                color="primary"
                type="email"
                label="Email"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                    color="primary"
                     variant="underlined"
                    :type="show2 ? 'text' : 'password'"
                    label="Password"
                    :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="show2 = !show2"
                >
                </v-text-field>

                <v-text-field
                    color="primary"
                     variant="underlined"
                    :type="show3 ? 'text' : 'password'"
                    label="Confirm Password"
                    :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="show3 = !show3"
                >
                </v-text-field>
                <v-checkbox
                  v-model="checkbox2"
                  class="ml-n2 mt-n2 "
                  color="primary"
                  label="Remember me"
                  hide-details
                ></v-checkbox>
                <div class="mt-1">
                  <v-btn class="bg-success mr-3 text-white" elevation="0" >Save</v-btn>
                  <v-btn class="bg-dark" elevation="0" dark>Cancel</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

