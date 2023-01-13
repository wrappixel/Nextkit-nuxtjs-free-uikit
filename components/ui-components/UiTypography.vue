<script setup lang="ts">
import { ref } from "vue";

const classes = ref([
  ["h1.Heading", "text-h1"],
  ["h2.Heading", "text-h2"],
  ["h3.Heading", "text-h3"],
  ["h4.Heading", "text-h4"],
  ["h5.Heading", "text-h5"],
  ["h6.Heading", "text-h6"],
]);
</script>
<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Typography
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Typography</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Typography
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div class="pb-8">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div v-for="[name, cls] in classes" :key="name">
              <div :class="[cls,'mb-2 text-gray-600']">{{ name }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

