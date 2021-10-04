<template>
  <v-main>
    <Banner />
  </v-main>
</template>

<script>
export default {
  layout: "coming-soon",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    Banner: () => import("@/components/shared/lp-banner/BannerComingSoon")
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
