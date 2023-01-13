<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Pagination
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Pagination</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Pagination
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <div>
          <v-row>
            <v-col cols="6">
              <h4 class="font-weight-regular font-18">Basic Pagination</h4>
              <v-pagination
                  class="mt-5"
                  v-model="page"
                  :length="9"
                  rounded="circle"
                ></v-pagination>
            </v-col>
            <v-col cols="6">
              <h4 class="font-weight-regular font-18">Length Pagination</h4>

              <v-pagination
                class="mt-5"
                v-model="page"
                :length="15"
              ></v-pagination>
            </v-col>
            <v-col cols="6">
              <h4 class="font-weight-regular font-18">Disabled Pagination</h4>
              <v-pagination  :length="9" class="mt-5" disabled></v-pagination>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>
