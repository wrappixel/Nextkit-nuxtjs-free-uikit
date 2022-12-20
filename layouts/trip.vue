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
  data(){
    return {
      background: 'bg-danger-grediant',
      textNav: 'white--text'
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
