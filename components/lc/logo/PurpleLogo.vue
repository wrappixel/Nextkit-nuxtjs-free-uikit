<script setup lang="ts">
import { ref } from 'vue';
import PurpleLogo from '/images/logos/purple-logo.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex">
        <img :src="PurpleLogo" alt="logo"/>
    </NuxtLink>
</template>