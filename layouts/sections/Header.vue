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
            <li class="nav-item">
              <!-- login-regiter -->
              <v-menu
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                :close-on-click="true"
              >
                <template v-slot:activator="{on, attrs}">
                  <v-btn color="error" elevation="0" v-bind="attrs" v-on="on" class="text-capitalize">
                    {{ $t('language') }}
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
                              <country-flag :country="language.flag" size="medium"/>
                            </p>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-list-item>
                  <div class="px-16">
                    <v-btn class="w-100 text-capitalize" color="error" @click="onSave">
                      {{ $t('save') }}
                    </v-btn>
                  </div>

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
      locale: 'vi'
    }
  },
  mounted() {
    if (localStorage.getItem('locale')) {
      this.$i18n.locale = localStorage.getItem('locale')
    }
    window.onscroll = () => {
      if (document.documentElement.scrollTop >= 20) {
        this.bg = "white";
      } else {
        this.bg = this.background
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
    },
    onSave() {
      this.setLocale(this.locale)
      localStorage.setItem('locale', this.locale)
      this.$i18n.locale = this.locale
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
