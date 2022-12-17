<template>
  <v-app dark class="product">
    <!--v-if="$route.name!=='login'"-->
    <Header :background="background"/>
    <div>
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
  data(){
    return {
      background: 'bg-danger-grediant'
    }
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  mounted() {

  },
  methods: {}
};
</script>

<style></style>
