<script setup lang="ts">
import { ref } from "vue";
import {pricePlan} from '@/data/CustomComponents';
</script>
<template>
  <div>
    <div class="pricing-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Pricing Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Simple Pricing to make your Work Effective
              </h2>
              <p class="text-muted">We offer 100% satisafaction and Money back Guarantee</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Pricing
        ----------------------------------------------- -->
        <v-row class="mt-7" justify="center">
          <v-col cols="12" md="4" sm="6" v-for="card in pricePlan" :key="card.title">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-7"
            >
              <div class="text-center pa-8 border rounded-sm">
                <h5 class="font-weight-regular font-18">{{card.title}}</h5>
                <div>
                  <sup class="text-muted">$</sup>
                  <span class="price-text">{{card.price}}</span>
                  <h6 class="font-14 text-uppercase font-weight-regular">{{card.plan}}</h6>
                </div>
                <p class="mt-9 text-muted">
                  {{card.desc}}
                </p>
              </div>
              <v-btn
                block
                large
                :color="card.buttoncolor"
                class="text-uppercase rounded-t-0 py-4"
              >
                Choose Plan
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Pricing
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

