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
    <TripsList />
    <!-- -----------------------------------------------
    ./ All Components

    ----------------------------------------------- -->

    <!-- -----------------------------------------------
    Coming Soon
    ----------------------------------------------- -->
<!--    <ComingSoon />-->
    <!-- -----------------------------------------------
    ./ Coming Soon
    ----------------------------------------------- -->
  </div>
</template>

<script>
import Banner from '@/components/protrip/Banner'
import BannerText from '@/components/protrip/BannerText'
import TripsList from "@/components/protrip/TripsList";
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
    TripsList,
    Banner,
    BannerText,
    BannerText1: () => import('@/components/custom/banner/BannerText'),
    ComingSoon: () => import('@/components/shared/coming-soon/ComingSoon'),
    AllCustomComponents: () => import('@/components/custom/AllCustomComponents'),
  },
}
</script>
