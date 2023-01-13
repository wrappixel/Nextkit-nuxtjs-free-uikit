<script setup lang="ts">
import { ref } from "vue";
import {Testimonials} from '@/data/CustomComponents';
</script>
<template>
  <div>
    <div class="testimonial-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Testimonial Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Check what our Customers are Saying
              </h2>
              <p class="text-muted">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Testimonial Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Testimonial
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="4" sm="6" v-for="card in Testimonials" :key="card.name">
            <v-card class="card-shadow">
              <v-card-text class="pa-sm-10 pa-5">
                <p class="text-body-1 mb-8 text-dark">“{{ card.testimonial }}”</p>
                <div class="d-flex align-center">
                  <v-avatar size="60">
                    <img :src="`/images/testimonial/${card.img}`" :alt="card.img" height="60"/>    
                  </v-avatar>         
                  <div class="ml-5">
                    <h6 class="text-uppercase font-weight-medium font-14">
                      {{ card.name }}
                    </h6>
                    <div class="d-flex align-center">
                      <a
                        class="error--text"
                        v-for="social in card.socialicon"
                        :key="social.icon"  
                      >
                        <i :class="social.icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Testimonial
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
