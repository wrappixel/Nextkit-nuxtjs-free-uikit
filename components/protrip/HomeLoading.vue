<template>
  <v-container>
    <v-row>
      <v-col v-for="(i) in numOfTrip"
        cols="12"
        md="4"
             :key="`t${i}`"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="image,article,button"
        />
      </v-col>
      <!--   text   -->
      <v-col
        cols="12"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="article"
        />
      </v-col>

<!--      city  -->
      <v-col v-for="(i, index) in numOfCity"
             cols="12"
             md="4"
             :key="`c${i}`"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="card"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'HomeLoading',
  data() {
    return {
      numOfTrip: 6,
      numOfCity: 6
    }
  }
}
</script>
