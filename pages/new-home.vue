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
    <BannerText
      title="Banner"
      detail="Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time."
    />
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
