<template>
  <transition name="fade">
    <v-alert :type="type" :value="alert">
      {{ message }}
    </v-alert>
  </transition>

</template>

<script>

export default {
  name: 'Notification',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'info',
      validator (value) {
        return [
          'success',
          'warning',
          'info',
          'error'
        ].includes(value)
      }
    }
  },
  data(){
    return{
      alert: true,
    }
  },
  created(){
    setTimeout(()=>{
      this.alert=false
    },5000)
  }
}
</script>
