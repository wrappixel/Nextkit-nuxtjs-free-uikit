<template>
  <v-row
    align="center"
    class="white pa-12 search-container search-box"
    no-gutters
    style="padding: 8px 36px !important"
  >
    <v-col cols="6" md="3" lg="3">
      <div class="flex flex-row flex-space-between">
        <div>
          <h3 class="search-title">{{ $t("from") }}</h3>
          <div class="flex flex-row">
            <v-autocomplete
              :items="items"
              :placeholder="$t('from_placeholder')"
              v-model="filters.location_from"
              :filter="customFilter"
              item-text="city"
              item-value="city_code"
              :single-line="true"
              class="pt-0 f-3"
            >
            </v-autocomplete>
            <i class="mt-4 mdi mdi-map-marker-outline f-1 icon-bold" />
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="6" md="2" lg="2">
      <div class="flex flex-center wall-container">
        <div class="wall"></div>
      </div>
    </v-col>
    <v-col cols="6" md="3" lg="3">
      <div class="flex flex-row flex-space-between">
        <div>
          <h3 class="search-title">{{ $t("to") }}</h3>
          <div class="flex flex-row">
            <v-autocomplete
              :items="items"
              :placeholder="$t('to_placeholder')"
              v-model="filters.location_to"
              :filter="customFilter"
              item-text="city"
              item-value="city_code"
              :single-line="true"
              class="pt-0 f-3"
            >
            </v-autocomplete>
            <i class="mt-4 mdi mdi-map-marker-outline f-1 icon-bold" />
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="6" md="2" lg="2">
      <div class="flex flex-center wall-container">
        <div class="wall"></div>
      </div>
    </v-col>
    <v-col cols="6" md="1" lg="1" justify="center" class="search-btn">
      <v-btn
        large
        color="black"
        class="search-btn"
        dark
        @click="onSearchTours"
      >
        <v-icon :large="true"> mdi-magnify </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "SearchBox",
  data: () => ({
    items: [],
    filters: {
      location_to: "",
      location_from: "",
      limit: 50,
      page: 1,
      search_string: "",
      price_min: 0,
      price_max: 0,
      order_by: "price DESC",
    },
  }),
  props: {
    isFixed: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState("core", {
      destinations: (state) => state.countries,
    }),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions("core", ["fetchLocations"]),
    async init() {
      const promise = [this.fetchLocations()];
      await Promise.all(promise);
      this.items = this.destinations;
      this.filters = this.$route.query;
    },
    fetchTour() {
      this.$emit("onApplyFilter", this.filters);
    },
    customFilter(item, queryText, itemText) {
      const textOne = item.city.toLowerCase();
      const searchText = queryText.toLowerCase();

      return textOne.indexOf(searchText) > -1;
    },
    onSearchTours() {
      this.fetchTour();
    },
  },
};
</script>
