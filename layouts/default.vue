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
  name: "default",
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>

<style></style>
