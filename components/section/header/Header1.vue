<script setup lang="ts">
import { ref } from "vue";
import { headerMenu } from "@/data/CustomComponents";
const drawer = ref(null);
</script>
<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar
      app
      flat
      class="app-header position-relative navbar-light header1"
    >
      <v-container class="py-0 fill-height">
        <v-toolbar>
          <!-- Logo -->
          <div class="logo">
            <LcLogoPurpleLogo />
          </div>
          <!-- Desktop view Navigation -->
          <div
            class="navigation ml-auto"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >
            <ul class="navbar-nav d-flex" min-height="auto">
              <li
                class="nav-item"
                v-for="nav in headerMenu"
                :key="nav.title"
                text
              >
                <NuxtLink
                  :to="nav.href"
                  v-scroll-to="nav.href"
                  class="nav-link"
                  >{{ nav.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- login-regiter -->
          <v-btn
            class="btn px-6 bg-primary-light ml-2 d-md-flex d-none"
            flat
            variant="outlined"
            color="primary"
          >
            Hire Me
          </v-btn>
          <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex drawer-icon ml-auto  mr-0"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-toolbar>
      </v-container>
    </v-app-bar>
      </div>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->

    <!----sidebar menu drawer start----->
    <div class="nav1">
    <v-navigation-drawer color="white" v-model="drawer" temporary>
      <div
        class="navigation"
        v-bind:class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav py-4" min-height="auto">
          <li class="nav-item  mb-3" v-for="nav in headerMenu" :key="nav.title" text>
            <NuxtLink :to="nav.href" v-scroll-to="nav.href" class="nav-link text-dark">{{
              nav.title
            }}</NuxtLink>
          </li>
          <li class="nav-item mx-3 mt-4 ">
            <v-btn
              class="btn bg-primary-light "
              flat block
              variant="outlined"
              color="primary"
            >
              Hire Me
            </v-btn>
          </li>  
        </ul>
      </div>
    </v-navigation-drawer>
    </div>
</template>
