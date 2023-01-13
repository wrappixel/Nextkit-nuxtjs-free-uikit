<script setup lang="ts">
import {UiCard} from '@/data/BasicComponents';
</script>

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
              <p class="text-muted">
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
          <v-col cols="12" sm="6" lg="4" v-for="card in UiCard" :key="card.title">
            <v-card class="mx-auto card-shadow" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                :src="`/images/card/${card.img}`"
                cover
              >
                <v-card-title>{{card.title}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4 font-weight-medium">
                {{card.subtitle}}
              </v-card-subtitle>

              <v-card-text class="pt-1">
                <div>{{card.desc}}</div>
              </v-card-text>

              <v-card-actions class="pl-4 pb-4">
                <v-btn color="primary" class="btn">Share</v-btn>
                <v-btn color="error" class="btn"> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
