<template>
  <v-card elevation="0" class="blog-card overflow-hidden mb-15">
    <div class="position-relative mb-10">
      <a :href="`/trip/${trip.id}`">
        <v-img :src="trip.img_src" alt="blog" class="blog-img" aspect-ratio="1.5" @click="goToDetail"/>
      </a>
    </div>
    <div>
      <p class="mt-2 mb-2 mini-short-des">
        {{ trip.super_short_description }}
      </p>
      <a :href="`/trip/${trip.id}`" class="blog-title text-decoration-none font-weight-bold font-22">
        {{ trip.title }}
      </a>
      <div class="home-trip-price font-weight-medium font-18 mt-5">
        <p
          ><i class="mt-4 mdi mdi-map-marker-outline f-1 icon-bold" />
          {{ `${trip.location_from} - ${trip.location_to}` }}
        </p>
        <span
          class="text-themecolor"
          :class="{ 'text-line': hasCompareAtPrice }"
        >
          {{ compare_at_price | formatPrice }} {{ currency }}
        </span>

        <v-chip
          class="ma-2"
          color="error"
          label
          text-color="white"
          v-if="hasCompareAtPrice"
        >
          <v-icon left> mdi-label</v-icon>
          {{ trip.price | formatPrice }} {{ currency }}
        </v-chip>
      </div>
      <v-btn class="mt-15" outlined color="error" @click="goToDetail"> Book now</v-btn>
    </div>
  </v-card>
</template>
<script>
import {formatCurrency} from "@/core/utils/currency";

export default {
  name: 'TripItem',
  props: {
    trip: {
      type: Object,
      default: {
        id: 0,
        title: 'Learn from small things to create something bigger.',
        handle: 'default-title-1670661861',
        short_description_1: '3 days 2 nights, 3 stars hotel',
        location_from: 'HN',
        location_to: 'HCM',
        price: 1000000,
        compare_at_price: 500000,
        img_src: 'https://assets.miinho.click/images/5404232a1314663e2d1570481061aa32.jpeg',
        published: true,
        staff_price: 20000000000,
        featured: true,
      },
    },
  },
  filters: {
    formatPrice(price) {
      return formatCurrency(price)
    }
  },
  computed: {
    compare_at_price(){
      if (this.hasCompareAtPrice) {
        return this.trip.compare_at_price
      }
      return this.trip.price
    },
    hasCompareAtPrice(){
      return this.trip.compare_at_price && this.trip.compare_at_price > 0 && this.trip.compare_at_price > this.trip.price
    }
  },
  data() {
    return {
      currency: 'VND',
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({name: 'trip-id', params: this.trip.id})
    }
  }
}
</script>
