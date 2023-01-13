<script setup lang="ts">
import { ref } from 'vue';
import MainBanner from '@/components/shared/lp-banner/BannerTwo.vue';
import UiComponents from '@/components/ui-components/AllComponents.vue';
import CommingSoon from '@/components/shared/coming-soon/ComingSoon.vue';
</script>

<template>
  <div>
    <!-------Banner-------->
    <MainBanner />
    <!-------UI Components-------->
    <UiComponents />
    <!----Commingsoon ----->
    <CommingSoon/>
  </div>
</template>