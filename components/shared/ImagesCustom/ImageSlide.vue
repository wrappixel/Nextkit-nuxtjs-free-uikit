<template>
  <v-sheet class="my-16 p-br4-imp" elevation="5" max-width="450">
    <v-slide-group
      v-model="image"
      class="p-br16"
      active-class="success"
      show-arrows
      center-active
      light
    >
      <v-slide-item
        v-for="i in images"
        :key="i.id"
        v-slot="{ active, toggle }"
        class="mr-8"
      >
        <v-card
          width="100"
          height="150"
          @click="toggle"
          :class="active ? '' : 'image-deactive'"
        >
          <v-scale-transition>
            <v-img :src="i.src" height="150"/>
          </v-scale-transition>
        </v-card>
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
      handler: function (val) {
        this.$emit('update:current', val)
      }
    },
    current: {
      handler: function (val) {
        this.image = val
      }
    }
  }
}
</script>

<style scoped>

</style>
