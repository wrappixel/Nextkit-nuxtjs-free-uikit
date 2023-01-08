<template>
  <div class="logo">
    <NLink to="/new-home">
      <v-img
        :src="require('@/assets/images/logos/logo.png')"
        alt="logo"
        width="250"
        height="100"
        contain
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
