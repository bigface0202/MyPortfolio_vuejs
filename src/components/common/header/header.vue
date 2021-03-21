<template>
  <header class="header">
    <v-card class="header__card" flat>
      <v-card-title class="text-center justify-center py-6">
        <p class="header__title__text">
          y-kissy
        </p>
      </v-card-title>
      <v-tabs right background-color="transparent" class="header__nav" grow>
        <v-tab
          v-for="(navItem, index) in navItems"
          :key="index"
          :to="navItem.url">
          {{ navItem.name }}
        </v-tab>
      </v-tabs>
    </v-card>
  </header>
</template>

<script>
import constants from './constants.js'

export default {
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
  font-size: 2.5rem;
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
    background-color: #c3e2ff !important;
    &__text {
      color: #4a47a3 !important;
    }
  }
}
</style>
