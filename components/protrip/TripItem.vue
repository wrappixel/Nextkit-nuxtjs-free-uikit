<template>
  <v-card elevation="0" class="blog-card overflow-hidden mb-15">
    <div class="position-relative mb-15">
      <a href="#">
        <v-img :src="require('@/assets/images/blog/img1.jpg')" alt="blog" class="blog-img" />
      </a>
      <div class="date-badge bg-info-grediant"> Oct <span>23</span> </div>
    </div>
    <div>
      <a href="#" class="blog-title text-decoration-none font-weight-medium font-18"
        >Learn from small things to create something bigger.</a
      >
      <p class="mt-10 mb-10"> Business Park, Opp. Corns Sam Restaurant, New Yoark, US </p>
      <a href="#" class="text-themecolor linking text-decoration-none d-flex align-center">
        Learn More <i class="mdi mdi-arrow-right"></i>
      </a>
    </div>
  </v-card>
</template>
<script>
export default {}
</script>
