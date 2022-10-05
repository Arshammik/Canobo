<template>
  <div id="app">
    <nav>

    </nav>
    <router-view />
    
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer }
}
</script>
<style>
@import '@/assets/base.scss';
</style>
