<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>
<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Menus
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Menus</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Menus
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <div class="text-center">
          <div class="btn-groups">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                  flat
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="error"
                  v-bind="props"
                  flat
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="warning"
                  v-bind="props"
                  flat
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="success"
                  v-bind="props"
                  flat
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          
          </div>
        </div>
         <div class="text-center mt-6">
          <div class="btn-groups">
            <v-menu
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                  variant="outlined"
                >
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu
              open-on-hover
            >
            <template v-slot:activator="{ props }">
                <v-btn
                  color="error"
                  v-bind="props"
                  variant="outlined"
                >
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="warning"
                  v-bind="props"
                  variant="outlined"
                >
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="success"
                  v-bind="props"
                  variant="outlined"
                >
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div> 
      </v-container>
    </div>
  </div>
</template>
