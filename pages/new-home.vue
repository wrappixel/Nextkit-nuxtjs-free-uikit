<template>
  <div>
    <!-- -----------------------------------------------
    Banner
    ----------------------------------------------- -->
    <Banner />
    <!--  -----------------------------------------------
    ./ Banner
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Top Featured
    ----------------------------------------------- -->
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
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-10">
                <a href="#">
                  <v-img
                    :src="require('@/assets/images/blog/img1.jpg')"
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
                > Learn from small things to create something bigger.
                </a>
                <div class="home-trip-price font-weight-medium font-18 mt-5 ">
                  <span class="text-themecolor text-line"> 1,000,000 VND </span>

                  <v-chip class="ma-2" color="error" label text-color="white">
                    <v-icon left> mdi-label </v-icon>
                    800,000 VND
                  </v-chip>
                </div>
                <v-btn class="mt-15" outlined color="error"> Book now </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-10">
                <a href="#">
                  <v-img
                    :src="require('@/assets/images/blog/img1.jpg')"
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
                > Learn from small things to create something bigger.
                </a>
                <div class="home-trip-price font-weight-medium font-18 mt-5 ">
                  <span class="text-themecolor text-line"> 1,000,000 VND </span>

                  <v-chip class="ma-2" color="error" label text-color="white">
                    <v-icon left> mdi-label </v-icon>
                    800,000 VND
                  </v-chip>
                </div>
                <v-btn class="mt-15" outlined color="error"> Book now </v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-10">
                <a href="#">
                  <v-img
                    :src="require('@/assets/images/blog/img1.jpg')"
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
                > Learn from small things to create something bigger.
                </a>
                <div class="home-trip-price font-weight-medium font-18 mt-5 ">
                  <span class="text-themecolor text-line"> 1,000,000 VND </span>

                  <v-chip class="ma-2" color="error" label text-color="white">
                    <v-icon left> mdi-label </v-icon>
                    800,000 VND
                  </v-chip>
                </div>
                <v-btn class="mt-15" outlined color="error"> Book now </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
      </v-container>
    </div>
    <!-- -----------------------------------------------
    ./ All Components

    ----------------------------------------------- -->

    <!-- -----------------------------------------------
    Coming Soon
    ----------------------------------------------- -->
    <ComingSoon />
    <!-- -----------------------------------------------
    ./ Coming Soon
    ----------------------------------------------- -->
  </div>
</template>

<script>
import Banner from '@/components/protrip/Banner'
import BannerText from '@/components/protrip/BannerText'
export default {
  head() {
    return {
      title: 'NuxtJs UI kit | Free UI kit built with Vuetify',
      meta: [
        {
          hid: 'description',
          name: 'Next Ui Kit',
          content: 'Next Ui Kit is the best way',
        },
      ],
    }
  },

  data() {
    return {}
  },
  components: {
    Banner,
    BannerText,
    BannerText1: () => import('@/components/custom/banner/BannerText'),
    ComingSoon: () => import('@/components/shared/coming-soon/ComingSoon'),
    AllCustomComponents: () => import('@/components/custom/AllCustomComponents'),
  },
}
</script>
