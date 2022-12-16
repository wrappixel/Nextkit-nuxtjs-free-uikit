<template>
  <div class="product-detail">
    <v-container>
      <v-row>
        <v-col cols="12" lg="9" md="8" xs="12">
          <!--    Carousel    -->
          <div class="mb-16">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="i in productDetail.images" :key="i.id">
                <v-img :src="i.src"></v-img>
              </v-carousel-item>
            </v-carousel>
            <ImageSlide :images="productDetail.images" @onSelectImage="(id) => currentImg = id"/>
          </div>

          <!--    Description    -->
          <div>
            <h1>{{ $t('description') }}</h1>
            <div v-html="productDetail.long_description"></div>
          </div>


        </v-col>
        <v-col cols="12" lg="3" md="4" xs="12">
          <div>
            <h1>{{ productDetail.title }}</h1>
            <div class="d-flex product-price">
              <p class="text-capitalize mr-8">{{ $t('from_price') }}:</p>
              <h4 class="font-weight-bold">{{ productDetail.price | formatPrice }} </h4>
            </div>
            <div class="d-flex product-price" v-if="productDetail.shot_description">
              <p>{{ productDetail.shot_description }}</p>
            </div>
            <!--    Button register tour        -->
            <div>
              <v-btn class="w-100" color="primary"
                     @click="$vuetify.goTo('#contact-form', {duration: 1000, easing:'easeInQuad'})">
                {{ $t('checkout') }}
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
  name: 'ProductDetail',
  components: {Contact, ImageSlide},
  data() {
    return {
      productDetail: {},
      currentImg: null
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
      fetchDetailProduct: "fetchDetailProduct"
    }),
    async init() {
      const id = this.$route.params.id
      const promise = [this.fetchDetailProduct({id: id})]
      await Promise.all(promise)
      this.productDetail = cloneDeep(this.product)
    }
  }
}
</script>

<style scoped>

</style>
