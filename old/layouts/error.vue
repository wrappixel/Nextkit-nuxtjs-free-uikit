<template>
  <v-main>
    <Banner />
  </v-main>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    Banner: () => import("@/components/shared/lp-banner/Banner404")
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
