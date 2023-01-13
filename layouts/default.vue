<script setup lang="ts">
const title = ref("Next-kit - Nuxt3 Typescript Free UI kit built with Vuetify3");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript Free UI kit built with Vuetify3`
      : "Next-kit - Nuxt3 Typescript Free UI kit built with Vuetify3";
  },
});
</script>

<template>
  <v-app dark>
    <LcHeader/>
    <v-main>
      <slot />  
    </v-main>
    <LcFooter/>
  </v-app>
</template>
