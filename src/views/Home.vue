<template>
  <section class="home">
    <home-profile/>
  </section>
</template>
<script>
import HomeProfile from '@/components/home/profile.vue'

export default {
  components: {
    HomeProfile
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
}
</style>
