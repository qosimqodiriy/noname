<script setup>
import { RouterView } from 'vue-router'
import TheTabs from '@/components/Base/Tab.vue'
import TheHeader from '@/components/Base/Header.vue'
import HeaderLink from '@/components/Base/HeaderLink.vue'

</script>

<template>
  <div>
    <header-link />
    <the-header />
    <the-tabs />
    <RouterView />
  </div>
</template>