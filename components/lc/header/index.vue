<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(null);
</script>
<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar class="app-header pt-lg-0 pt-3" absolute flat elevate-on-scroll>
      <v-container class="fill-height">
        <v-toolbar class="bg-transparent d-flex align-center">
          <!-- Logo -->
          <LcLogoWhiteTextLogo />
          <!-- Desktop view Navigation -->
          <div
            class="navigation ml-auto d-lg-block"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >
            <ul class="d-flex navbar-nav">
              <li class="nav-item">
                <NuxtLink class="nav-link " to="/"> Custom Components </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/basic-components"
                  >Basic Components</NuxtLink
                >
              </li>
              <li class="nav-item d-md-flex d-sm-none">
                <!-- login-regiter -->
                <v-btn
                  class="btn bg-white"
                  flat
                >
                  <NuxtLink to="https://www.wrappixel.com/templates/nextkit-nuxtjs-free-uikit/" target="_blank" class="text-decoration-none text-dark">Download Free</NuxtLink>
                </v-btn>
              </li>
            </ul>
          </div>
          <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex ml-auto drawer-icon text-white mr-0"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
  <!----sidebar menu drawer start----->
  <v-navigation-drawer v-model="drawer" temporary>
    <ul class="navbar-nav py-4 ">
      <li class="nav-item mb-3">
        <NuxtLink class="nav-link text-dark py-0" to="/"> Custom Components </NuxtLink>
      </li>
      <li class="nav-item mb-4">
        <NuxtLink class="nav-link text-dark py-0" to="/basic-components"
          >Basic Components</NuxtLink
        >
      </li>
      <li class="nav-item ml-3 mr-3">
        <!-- login-regiter -->
        <v-btn color="error" block flat>
         <NuxtLink to="https://www.wrappixel.com/templates/nextkit-nuxtjs-free-uikit/" target="_blank" class="text-decoration-none text-white">Download Free</NuxtLink>
        </v-btn>
      </li>
    </ul>
  </v-navigation-drawer>
</template>
