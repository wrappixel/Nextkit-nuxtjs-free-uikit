<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <Header />
    <div class="protrip-main">
      <v-main>
        <nuxt />
      </v-main>
    </div>

    <Footer />
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
      meta: [
        {
          hid: "description",
          name: "NuxtJs UI kit",
          content: "NuxtJs UI kit is the best way"
        }
      ]
    };
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>

<style></style>
