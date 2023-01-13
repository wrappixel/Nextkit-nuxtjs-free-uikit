import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueTablerIcons from 'vue-tabler-icons';
import '@/assets/scss/style.scss';

const Lighttheme: ThemeDefinition = {
  colors: {
    background: '#FFFFFF',
    white: '#FFFFFF',
    blue: '#0164d3',
    info:'#0164d3',
    success: '#2cdd9b',
    warning: '#fec500',
    primary: '#316ce8',
    accent: '#607df9',
    light: '#f4f8fa',
    dark: '#263238',
    error:'#ff4d7e',
    muted:'#8d97ad',
    green:'#439691',
    'light-blue': '#5b6987',
    'light-blue-1':'#2d6adf',
    'gray-100':'#e5e7ec',
    'gray-200': '#f3f5f8',
    'gray-300': '#c4c8ce',
    'gray-400': '#c6cbd6',
    'gray-500': '#8d97ad',
    'gray-600':'#3e4555',
    'orange': '#ff6a5b',
    'danger-dark': '#a23131',
    'success-dark': '#1dc8cc',
    'warning-dark': '#dcaf17',
    'primary-light':'#dae5fb',
    'primary-dark': '#345bcb',
    'info-dark': '#2c73cb',
    'red-dark': '#d61f1f',
    'inverse-dark': '#232a37',
    'dark-blue':'3252a2',
    // ==================================== //
    // Lighten Colors
    // ==================================== //
    'success-lighten-5': '#e1f3e5',
    'success-lighten-4': '#f2f9f4',
    'info-lighten-5': '#e5f4fb',
    'warning-lighten-5': '#fdf6e3',
    'error-lighten-5': '#fce2e5',
    'primary-lighten-5': '#e6edfd',
    'accent-lighten-5': '#f4e6fd',
    
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: Lighttheme,
        variables: {},
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(VueTablerIcons);
});
