<template>
  <header class="header">
    <v-card class="header__card" flat>
      <v-card-title class="text-center justify-center py-6">
        <p class="header__title__text">
          y-kissy
        </p>
      </v-card-title>
      <navigation class="header__nav" />
    </v-card>
  </header>
</template>

<script>
import constants from './constants.js'
import Navigation from './navigation.vue'

export default {
  components: {
    Navigation
  },
  data () {
    return {
      drawer: false,
      navItems: constants.navItems
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  font-size: 1rem;
  &__card {
    background-color: #c3e2ff !important;
  }
  &__title {
    text-align: center;
    background-color: #c3e2ff !important;
    &__text {
      color: #4a47a3 !important;
    }
  }
  &__nav {
    margin: 0;
  }
  .isOpen {
    display: block;
  }
}
</style>
