<script setup lang="ts">
import { ref } from 'vue';
import WhiteLogo from '/images/logos/white-logo.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex">
        <img :src="WhiteLogo" alt="logo"/>
    </NuxtLink>
</template>