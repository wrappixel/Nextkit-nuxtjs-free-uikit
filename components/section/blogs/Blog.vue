<script setup lang="ts">
import { ref } from "vue";
import { Blog } from "@/data/CustomComponents";
</script>
<template>
  <div>
    <div class="blog-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Blog Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Recent Blogs</h2>
              <p class="text-muted">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Blog
        ----------------------------------------------- -->
        <v-row class="mt-9" justify="center">
          <v-col cols="12" md="4" sm="6" v-for="card in Blog  " :key="card.title">
            <v-card elevation="0" class="blog-card overflow-hidden mb-8">
              <a href="#" class="text-decoration-none">
                <div class="position-relative mb-6">
                  <img
                    :src="`/images/blog/${card.img}`"
                    :alt="card.img"
                    class="img-fluid"
                  />
                  <div class="date-badge bg-info-grediant">
                    {{ card.month }} <span>{{ card.date }}</span>
                  </div>
                </div>
                <div>
                  <div class="blog-title font-weight-medium font-18">
                    {{ card.title }}
                  </div>
                  <p class="my-5 text-muted">
                    {{ card.desc }}
                  </p>
                  <div class="text-themecolor linking d-flex align-center">
                    Learn More <i class="mdi mdi-arrow-right"></i>
                  </div>
                </div>
              </a>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
