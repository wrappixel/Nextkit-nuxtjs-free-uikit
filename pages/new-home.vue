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
    All Components
    ----------------------------------------------- -->
    <AllCustomComponents />
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
    Banner: () => import('@/components/shared/lp-banner/Banner'),
    ComingSoon: () => import('@/components/shared/coming-soon/ComingSoon'),
    AllCustomComponents: () => import('@/components/custom/AllCustomComponents'),
  },
}
</script>
