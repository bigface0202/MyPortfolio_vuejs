<template>
  <section class="home">
    <home-hero/>
  </section>
</template>
<script>
import HomeHero from '@/components/HomeHero.vue'

export default {
  components: {
    HomeHero
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
