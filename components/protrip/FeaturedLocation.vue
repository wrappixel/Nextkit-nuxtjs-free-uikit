<template>
  <v-card class="card-shadow featured-location">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="location.img_src"
    >
      <v-card-title class="feat-title"> {{location.city}} </v-card-title>
    </v-img>
  </v-card>
</template>
<script>
export default {
  name: 'FeaturedLocation',
  props: {
    location: {
      type: Object,
      default: {
        id: 1,
        country: 'Vietnam',
        country_code: 'VN',
        city: 'Hà Nội',
        city_code: 'HN',
        img_src:'https://assets.miinho.click/images/723e1b937892c26313beb976869ba2a2.jpg',
        published: true,
        featured: true,
      },
    },
  },
  data() {
    return {
      currency: 'VND',
    }
  },
}
</script>
