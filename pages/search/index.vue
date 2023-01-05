<template>
  <div>
    <!-- -----------------------------------------------
    Banner
    ----------------------------------------------- -->
    <Banner @search="search" />
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
          <v-row justify="left" class="mb-36">
            <v-col cols="12" sm="10" md="9" lg="7">
              <div class="text-left">
                <h2
                  class="section-title font-weight-bold no-margin"
                  v-show="filters.to_name && filters.from_name"
                >
                  {{ $t('search_result_for', { from: filters.from_name, to: filters.to_name }) }}
                </h2>
                <h2 class="section-title font-weight-bold no-margin" v-show="!filters.to_name && !filters.from_name">
                  {{ $t('search_result') }}
                </h2>
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
            <template v-for="(trip, index) in trips">
              <v-col cols="12" md="6" lg="4" :key="index">
                <trip-item :trip="trip"> </trip-item>
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
      <div class="coming-wrapper" ref="coming-soon">
        <v-container>
          <!-- -----------------------------------------------
              Start Coming Soon
          ----------------------------------------------- -->
          <v-row>
            <v-col cols="12" sm="10" md="12" lg="5" class="quick-contact">
              <div>
                <h4 class="font-weight-medium contact-title mt-0"> Leave us a message </h4>
                <form>
                  <v-row class="mt-15">
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        label="Name"
                        solo
                        v-model="customer.name"
                        placeholder="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        label="Phone Number"
                        solo
                        type="phone"
                        v-model="customer.email"
                        placeholder="Phone number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <v-textarea
                        name="message"
                        v-model="customer.note"
                        solo
                        label="Message"
                        rows="3"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-btn
                    nuxt
                    to="/"
                    class="btn-custom-md btn-danger mt-12"
                    outlined
                    color="white"
                    elevation="0"
                  >
                    Submit
                  </v-btn>
                </form>
              </div>
            </v-col>
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
import tourisServices from '@/services/apis/tourisServices'
import TripItem from '@/components/protrip/TripItem'
import HomeLoading from '@/components/protrip/HomeLoading'
export default {
  data() {
    return {
      loading: true,
      trips: [],
      filters: {},
      customer: {
        name: '',
        phone: '',
        note: '',
      },
    }
  },
  computed: {},
  components: { Banner, TripItem, HomeLoading },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      this.filters = this.$route.query
      await this.search(this.filters)
    },
    goToDetail(id) {
      this.$router.push({ path: `/home/${id}` })
    },
    async search(payload) {
      this.loading = true
      if (payload && payload.from && payload.to) {
        this.filters.from_name = payload.from_name
        this.filters.to_name = payload.to_name
        const url = `${this.$route.path}?from=${encodeURIComponent(
          payload.from
        )}&to=${encodeURIComponent(payload.to)}`
        history.pushState({}, null, url)
      }
      const res = await tourisServices.fetchListAllTours({
        location_from: payload && payload.from ? payload.from : '',
        location_to: payload && payload.to ? payload.to : '',
      })
      if (res && res.success && res.trips) {
        this.trips = res.trips
      }
      this.loading = false
    },
    locationName(code) {
      const loc = this.lo
    },
  },
}
</script>

