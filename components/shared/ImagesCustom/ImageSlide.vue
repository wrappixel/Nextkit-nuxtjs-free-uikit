<template>
  <v-sheet class="mx-auto" max-width="500">
    <v-slide-group
      v-model="image"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="i in images"
        :key="i.id"
        v-slot="{ active, toggle }"
      >
        <v-img :src="i.src" width="300" aspect-ratio="0.8" :transition="false"/>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "ImageSlide",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    current: {}
  },
  data() {
    return {
      image: null
    }
  },

  watch: {
    images: {
      handler: function (val) {
        this.image = val[0].src
      }
    },
    image: {
      handler: function (val, old) {
        if (val !== old) {
          this.$emit('update:this.current', val)
        }

      }
    }
  }
}
</script>

<style scoped>

</style>
