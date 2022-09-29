<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
      <Top/>
  </header>
  <RouterView />
  <footer>
    <Footer/>
  </footer>
</template>

<style>
@import '@/assets/base.css';

</style>
