<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app elevate-on-scroll class="app-header protrip-nav" :class="bg" elevation="4" :collapse="false">
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo/>

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text"/>
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <v-tabs background-color="transparent" @change="onChangeRoute" v-model="currentRoute" color="white">
              <v-tab v-for="(route, index) in routesBar" :value="route.key" :href="route.key" :key="index">
                <h2 class="text-capitalize font-weight-bold" :class="customColor">{{route.value}}</h2>
              </v-tab>
            </v-tabs>
            <li class="nav-item">
              <!-- login-regiter -->
              <v-menu
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                :close-on-click="true"
              >
                <template v-slot:activator="{on, attrs}">
                  <v-btn elevation="0" v-bind="attrs" v-on="on" class="text-capitalize transparent" active-class="transparent" depressed>
                    <country-flag :country="language.flag" size="big"/>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-row align="center">
                      <v-col cols="12">
                        <v-select :items="languages" :value.sync="language" single-line @change="onChangeLang"
                                  item-text="label" item-value="locale" class="language-select" outlined>
                          <template v-slot:prepend-inner>
                            <p class="my-0">
                              <country-flag :country="language.flag" size="normal"/>
                            </p>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-list-item>

                </v-list>
              </v-menu>

            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Header',
  props: {
    background: {
      type: String,
      default: () => 'transparent'
    },
    textColor: {
      type: String,
      default: () => 'white--text'
    }
  },
  components: {
    Logo: () => import('@/layouts/sections/Logo'),
  },
  data() {
    return {
      isActive: false,
      bg: 'transparent',
      languages: [
        {
          flag:'vn',
          locale: 'vi',
          label: 'Vietnamese'
        },
        {
          flag: 'us',
          locale: 'en',
          label: 'English'
        }
      ],
      language: {
        flag:'vn',
        locale: 'vi',
        label: 'Vietnamese'
      },
      locale: 'vi',
      routesBar: [
        {
          key: 'hotels',
          value: this.$t('hotels')
        },
        {
          key: 'tours',
          value: this.$t('tours')
        },
        {
          key: 'plants',
          value: this.$t('plants')
        },
      ],
      currentRoute:'',
      customColor: 'white--text'
    }
  },
  mounted() {
    if (localStorage.getItem('locale')) {
      this.$i18n.locale = localStorage.getItem('locale')
      this.onChangeLang(this.$i18n.locale)
    }
    window.onscroll = () => {
      if (document.documentElement.scrollTop >= 20) {
        this.bg = "white";
        this.customColor = 'black--text'
      } else {
        this.bg = this.background
        this.customColor = 'white--text'
      }
    };
    this.bg = this.background
  },
  methods: {
    ...mapActions('locale', ['setLocale']),
    toggleClass: function (event) {
      this.isActive = !this.isActive
    },
    onChangeLang(locale) {
      const language = this.languages.find(item => item.locale === locale)
      this.language = language
      this.locale = locale

      this.setLocale(this.locale)
      localStorage.setItem('locale', this.locale)
      this.$i18n.locale = this.locale
    },
    onChangeRoute(name) {
      console.log(name)
    }
  },
  watch: {
    background: {
      handler: function (val) {
        this.bg = val
      },
      deep: true
    }
  }
}
</script>
