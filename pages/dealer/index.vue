<template>
  <div>
    <FormBanner1 @submit="onAuthDealer" />
  </div>
</template>

<script>
import FormBanner1 from '@/vuetify-package/nextkit/components/custom/form-banner/FormBanner1'
import { mapActions } from 'vuex'
export default {
  name: 'Dealer',
  components: { FormBanner1 },
  methods: {
    ...mapActions('dealer', ['signInWithDealer']),
    async onAuthDealer(code) {
      const promise = [this.signInWithDealer({ code: code })]

      const [dealer] = await Promise.all(promise)
      if (dealer.success) {
        this.$router.push({ name: 'new-home' })
      }
    },
  },
}
</script>

<style scoped>
</style>
