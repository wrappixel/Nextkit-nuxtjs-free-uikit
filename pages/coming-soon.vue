<template>
  <v-main>
    <Banner />
    <v-container>
      <contact />
    </v-container>
  </v-main>
</template>

<script>
import Contact from "@/vuetify-package/nextkit/components/custom/contact/Contact";
export default {
  layout: "coming-soon",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    Contact,
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
