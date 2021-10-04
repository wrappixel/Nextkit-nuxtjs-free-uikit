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
              <p>
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
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="error"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="warning"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="success"
                  elevation="0"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="text-center mt-12">
          <div class="btn-groups">
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  elevation="0"
                  dark
                  outlined
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="error"
                  elevation="0"
                  dark
                  outlined
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="warning"
                  elevation="0"
                  dark
                  outlined
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="success"
                  elevation="0"
                  dark
                  outlined
                  v-bind="attrs"
                  v-on="on"
                >
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
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
<script>
export default {
  name: "UiMenu",
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {},
};
</script>
