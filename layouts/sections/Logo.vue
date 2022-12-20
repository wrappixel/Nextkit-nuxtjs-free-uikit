<template>
  <div class="logo">
    <NLink to="/new-home">
      <v-img
        :src="require('@/assets/images/logos/logo.png')"
        alt="logo"
        width="300"
        height="100"
      />
    </NLink>
  </div>
</template>

<script>
export default {
  name: "Logo",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.logo a {
  display: flex;
}
</style>
