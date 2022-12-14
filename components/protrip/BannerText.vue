<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">{{ title }}</h2>
              <p>
                {{ detail }}
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerText',
  data() {
    return {}
  },
  props: {
    title: String,
    detail: String,
  },
  methods: {},
}
</script>
