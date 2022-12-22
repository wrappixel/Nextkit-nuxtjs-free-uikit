<template>
  <div class="blog-component mini-spacer">
    <v-container>
      <!-- -----------------------------------------------
          Start Blog Text
      ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="section-title font-weight-medium">Recent Blogs</h2>
            <p>
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
          End Blog Text
      ----------------------------------------------- -->
      <!-- -----------------------------------------------
          Start Blog
      ----------------------------------------------- -->
      <div v-show="isLoading">
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
      </div>
      <div v-show="!isLoading">
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4" v-for="trip in trips" :key="trip.id">
            <trip-item :trip="trip" />
          </v-col>
        </v-row>
      </div>

      <!-- -----------------------------------------------
          End Blog
      ----------------------------------------------- -->
    </v-container>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import TripItem from "@/components/protrip/TripItem";

export default {
  name: "TripsList",
  components: {TripItem},
  data() {
    return {
      trips: [],
      isLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions('trip', {
      fetchAllTrips: 'fetchAllTrips'
    }),
    async init() {
      const promise = [this.fetchAllTrips()]

      const [result] = await Promise.all(promise)

      if (result.success) {
        this.trips = result.trips
      }


      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>
