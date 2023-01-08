<template>
  <div>
    <!-- -----------------------------------------------
    Banner
    ----------------------------------------------- -->
    <Banner @search="onApplyFilterSearch" />
    <!--  -----------------------------------------------
    ./ Banner
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Top Featured
    ----------------------------------------------- -->
    <div v-show="loading">
      <div class="blog-component mini-spacer mt-36">
        <HomeLoading />
      </div>
    </div>
    <div v-show="!loading">
      <div class="blog-component mini-spacer mt-36">
        <v-container>
          <!-- -----------------------------------------------
              Start Blog Text
          ----------------------------------------------- -->
          <v-row justify="center">
            <v-col cols="12" sm="10" md="9" lg="7">
              <div class="text-center">
                <h2 class="font-36"><i class="mdi mdi-heart-outline"></i></h2>
                <h2 class="section-title font-weight-bold no-margin">
                  {{ $t('featured_trip_label') }}
                </h2>
                <p class="section-sub-title">{{ $t('featured_trip_des') }}</p>
              </div>
            </v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Blog Text
          ----------------------------------------------- -->
          <!-- -----------------------------------------------
              Start Blog
          ----------------------------------------------- -->
          <v-row class="mt-13" justify="center">
            <template v-for="(trip, index) in featuredTrips">
              <v-col cols="12" md="6" lg="4" :key="index">
                <trip-item :trip="trip"></trip-item>
              </v-col>
            </template>
          </v-row>

          <!-- -----------------------------------------------
              End Blog
          ----------------------------------------------- -->
        </v-container>
      </div>
      <!-- -----------------------------------------------
      ./ All Components
      ----------------------------------------------- -->

      <div class="feature3-component mini-spacer bg-extra-light">
        <v-container class="position-relative">
          <!-- -----------------------------------------------
              Start Feature 3 Text
          ----------------------------------------------- -->
          <v-row>
            <v-col cols="12" lg="10">
              <v-img
                :src="require('@/assets/images/landingpage/travel.jpeg')"
                alt="feature"
                class="rounded"
              />
            </v-col>
            <v-col cols="12" md="7" lg="5" class="feature3-card">
              <v-card class="card-shadow">
                <v-card-text>
                  <div class="pa-10 text-center">
                    <h3 class="feature3-title font-weight-medium">
                      The New way of Making Your Website in mins
                    </h3>
                    <p>
                      You can relay on our amazing features list and also our customer services will
                      be great experience. You will love it for sure.
                    </p>
                    <v-btn
                      color="error"
                      class="btn-custom-lg linking mt-10 btn-arrow"
                      nuxt
                      large
                      to="/"
                      elevation="0"
                    >
                      <span>Explore More</span>
                      <i class="mdi mdi-arrow-right"></i>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Feature 3 Text
          ----------------------------------------------- -->
        </v-container>
      </div>

      <div class="feature2-component mt-36 pt-36 pb-48">
        <v-container>
          <!-- -----------------------------------------------
              Start Feature 2 Text
          ----------------------------------------------- -->
          <v-row justify="center">
            <v-col cols="12" md="10" lg="7">
              <div class="text-center">
                <h2 class="font-36"><i class="mdi mdi-star-outline"></i></h2>
                <h2 class="section-title font-weight-bold no-margin">
                  {{ $t('featured_city_label') }}
                </h2>
                <p class="section-sub-title">{{ $t('featured_city_desc') }}</p>
              </div>
            </v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Feature 2 Text
          ----------------------------------------------- -->
          <!-- -----------------------------------------------
              Start Feature 2
          ----------------------------------------------- -->
          <v-row justify="center" class="feature2-spacer">
            <template v-for="(loc, index) in featuredLocations">
              <v-col cols="6" md="6" lg="3" :key="index" @click="goToFeaturedLocations(loc)">
                  <featured-location :location="loc" class="cursor-pointer"></featured-location>
              </v-col>
            </template>
          </v-row>

          <!-- -----------------------------------------------
              End Feature 2
          ----------------------------------------------- -->
        </v-container>
      </div>

      <!-- -----------------------------------------------
      Coming Soon
      ----------------------------------------------- -->
      <div class="feature1-component mini-spacer bg-extra-light">
        <v-container>
          <!-- -----------------------------------------------
              Start Feature 1 Text
          ----------------------------------------------- -->
          <v-row justify="center">
            <v-col cols="12" md="10" lg="7">
              <div class="text-center">
                <h2 class="section-title font-weight-medium">
                  Awesome with Extra Ordinary Flexibility
                </h2>
                <p>
                  You can relay on our amazing features list and also our customer services will be
                  great experience for you without doubt and in no-time
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Feature 1 Text
          ----------------------------------------------- -->
          <!-- -----------------------------------------------
              Start Feature 1
          ----------------------------------------------- -->
          <v-row justify="center" class="mt-13">
            <v-col cols="12" md="6">
              <v-card elevation="0">
                <v-card-text>
                  <div class="icon-round bg-light-info">
                    <i class="mdi mdi-star"></i>
                  </div>
                  <h5 class="font-weight-medium font-18">Instant Solutions</h5>
                  <p class="mt-10 mb-8"> </p
                  ><p class="mt-10 mb-8">
                    You can relay on our amazing features list and also our customer services will
                    be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent tristique pellentesque ipsum.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card elevation="0">
                <v-card-text>
                  <div class="icon-round bg-light-info">
                    <i class="mdi mdi-check-circle"></i>
                  </div>
                  <h5 class="font-weight-medium font-18">Powerful Techniques</h5>
                  <p class="mt-10 mb-8">
                    You can relay on our amazing features list and also our customer services will
                    be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent tristique pellentesque ipsum.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Feature 1
          ----------------------------------------------- -->
        </v-container>
      </div>

      <div class="coming-wrapper" ref="coming-soon">
        <v-container>
          <!-- -----------------------------------------------
              Start Coming Soon
          ----------------------------------------------- -->
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12">
              <Contact :outline="false" :solo="true" />
            </v-col>
            <v-col></v-col>
          </v-row>

          <!-- -----------------------------------------------
              End Coming Soon
          ----------------------------------------------- -->
        </v-container>
      </div>
      <!-- -----------------------------------------------
      ./ Coming Soon
      ----------------------------------------------- -->
    </div>
  </div>
</template>

<script>
import Banner from '@/components/protrip/Banner'
import BannerText from '@/components/protrip/BannerText'
import TripItem from '@/components/protrip/TripItem'
import FeaturedLocation from '@/components/protrip/FeaturedLocation'
import tourisServices from '@/services/apis/tourisServices'
import HomeLoading from '@/components/protrip/HomeLoading'
import { mapActions, mapState } from 'vuex'
import Contact from '~/vuetify-package/nextkit/components/custom/contact/Contact'

export default {
  data() {
    return {
      loading: true,
      featuredTrips: [],
      locations_all: [],
      demoFeaturedTrips: [
        {
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
        {
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
        {
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
      ],
      demoLocations: [
        {
          id: 1,
          country: 'Vietnam',
          country_code: 'VN',
          city: 'Hà Nội',
          city_code: 'HN',
          img_src: 'https://assets.miinho.click/images/723e1b937892c26313beb976869ba2a2.jpg',
          created_at: 1666624260,
          updated_at: 1666624260,
          published: true,
          featured: true,
        },
        {
          id: 1,
          country: 'Vietnam',
          country_code: 'VN',
          city: 'Hồ Chí Minh',
          city_code: 'HCM',
          img_src: 'https://assets.miinho.click/images/723e1b937892c26313beb976869ba2a2.jpg',
          created_at: 1666624260,
          updated_at: 1666624260,
          published: true,
          featured: true,
        },
        {
          id: 1,
          country: 'Vietnam',
          country_code: 'VN',
          city: 'Hải Phòng',
          city_code: 'HP',
          img_src: 'https://assets.miinho.click/images/723e1b937892c26313beb976869ba2a2.jpg',
          created_at: 1666624260,
          updated_at: 1666624260,
          published: true,
          featured: true,
        },
        {
          id: 1,
          country: 'Vietnam',
          country_code: 'VN',
          city: 'Đà Nẵng',
          city_code: 'DN',
          img_src: 'https://assets.miinho.click/images/723e1b937892c26313beb976869ba2a2.jpg',
          created_at: 1666624260,
          updated_at: 1666624260,
          published: true,
          featured: true,
        },
      ],
      customer: {
        name: '',
        phone: '',
        note: '',
      },
    }
  },
  components: {
    Banner,
    BannerText,
    TripItem,
    FeaturedLocation,
    HomeLoading,
    BannerText1: () => import('@/components/custom/banner/BannerText'),
    ComingSoon: () => import('@/components/shared/coming-soon/ComingSoon'),
    AllCustomComponents: () => import('@/components/custom/AllCustomComponents'),
    Contact,
  },
  async mounted() {
    await this.init()
  },
  computed: {
    ...mapState('trip', ['locations']),
    featuredLocations() {
      if (!this.locations) {
        return this.demoLocations
      }
      return this.locations.filter((e) => {
        return e.featured === true
      })
    },
  },
  methods: {
    ...mapActions('trip', ['fetchAllLocations']),
    async init() {
      this.loading = true
      await Promise.all([this.fetchFeaturedTrip(), this.fetchAllLocations()])
      this.loading = false
    },
    async fetchFeaturedTrip() {
      const result = await tourisServices.fetchListFeatured()
      if (result.success) {
        this.featuredTrips = result.trips
      }
    },
    onApplyFilterSearch(filter) {
      this.$router.push({ name: 'search', query: filter })
    },
    goToFeaturedLocations(loc) {
      this.$router.push({name: 'search', query: {
        to: loc.city_code
      }})
    }
  },
}
</script>
