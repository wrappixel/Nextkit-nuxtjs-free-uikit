<template>
  <div>
    <template v-if="isSuccess">
      <v-card elevation="0" class="blog-card overflow-hidden mb-15">
        <div class="position-relative mb-10">
          <a href="#">
            <v-img
              :src="tripInfo.img_src"
              alt="blog"
              class="blog-img"
            />
          </a>
        </div>
        <div>
          <p class="mt-2 mb-2 mini-short-des">
            Business Park, Opp. Corns Sam Restaurant
          </p>
          <a
            href="#"
            class="
                    blog-title
                    text-decoration-none
                    font-weight-bold font-22
                  "
          > {{ tripInfo.title }}
          </a>
          <div class="home-trip-price font-weight-medium font-18 mt-5 ">
            <span class="text-themecolor text-line"> {{ tripInfo.compare_at_price | formatPrice }} </span>

            <v-chip class="ma-2" color="error" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{tripInfo.price | formatPrice}}
            </v-chip>
          </div>
          <v-btn class="mt-15" outlined color="error"> Book now </v-btn>
        </div>
      </v-card>
    </template>
    <template v-else>
      Not found data
    </template>
  </div>
</template>
<script>
import {cloneDeep, isEmpty} from "lodash";
import {formatCurrency} from "@/core/utils/currency";

export default {
  name: 'TripItem',
  data() {
    return {
      tripInfo: {},
      isSuccess: true
    }
  },
  props: {
    trip: {
      type: Object,
      default: () => {
      }
    }
  },
  mounted() {
    this.init()
  },
  filters: {
    formatPrice(price) {
      return formatCurrency(price)
    }
  },
  methods: {
    init() {
      if (!isEmpty(this.trip)) {
        this.tripInfo = cloneDeep(this.trip)
        this.isSuccess = true
      }
    }
  }
}
</script>
