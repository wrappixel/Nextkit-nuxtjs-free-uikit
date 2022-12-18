<template>
  <div class="product-detail">
    <v-container>
      <v-row>
        <v-col lg="8" md="8" sm="12">
          <!--    Carousel    -->
          <div class="mb-16">
            <v-carousel hide-delimiters v-model="currentImg" class="elevation-8">
              <v-carousel-item v-for="i in productDetail.images" :key="i.id" :src="i.src">
<!--                <v-img :src="i.src"></v-img>-->
              </v-carousel-item>
            </v-carousel>
            <ImageSlide :images="productDetail.images" @onSelectImage="(id) => currentImg = id" :current.sync="currentImg"/>
          </div>

          <!--    Description    -->
          <div class="product-detail__description">
            <h1>{{ $t('description') }}</h1>
            <div>
              <div v-html="productDetail.long_description"></div>
            </div>
          </div>


        </v-col>
        <v-col lg="4" md="4" sm="12">
          <div>
            <h1>{{ productDetail.title }}</h1>
            <div class="product-price">
              <div class="d-flex">
                <p class="text-capitalize mr-8 my-0">{{ $t('from_price') }}:</p>
                <h4 class="font-weight-bold">{{ productDetail.price | formatPrice }} </h4>
              </div>
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
              ></v-rating>
            </div>

            <div class="d-flex product-price" v-if="productDetail.short_description">
              <p class="black--text">{{ productDetail.short_description }}</p>
            </div>
            <!--    Button register tour        -->
            <div>
              <v-btn class="w-100" color="error"
                     @click="$vuetify.goTo('#contact-form', {duration: 1000, easing:'easeInQuad'})">
                <span class="font-weight-bold">
                  {{ $t('checkout') }}
                </span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!--     Form contact     -->
      <Contact id="contact-form"/>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {cloneDeep} from 'lodash'
import {formatCurrency} from "~/core/utils/currency";
import ImageSlide from "~/components/shared/ImagesCustom/ImageSlide";
import Contact from "~/vuetify-package/nextkit/components/custom/contact/Contact";

export default {
  layout: 'product',
  name: 'ProductDetail',
  components: {Contact, ImageSlide},
  data() {
    return {
      productDetail: {},
      currentImg: null,
      rating: 4
    }
  },
  computed: {
    ...mapState('product', ['product'])
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
    ...mapActions('product', {
      fetchDetailProduct: "fetchDetailProduct",
      fetchAllProducts: 'fetchAllProducts'
    }),
    async init() {
      const id = this.$route.params.id
      const promise = [this.fetchDetailProduct({id: id}),this.fetchAllProducts()]
      await Promise.all(promise)
      this.productDetail = cloneDeep(this.product)
    }
  }
}
</script>

<style scoped>

</style>
