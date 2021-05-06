<template>
  <v-app id="app" class="portfolio">
    <original-header class="portfolio__header" />
    <div class="portfolio__content">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import OriginalHeader from '@/components/common/header/header.vue'

export default {
  components: {
    OriginalHeader
  }
}
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  font-size: 20px;
}

.sidebar {
  float: left;
}

.portfolio {
  &__header {
    margin: 0;
  }
  &__content {
    margin: 0;
  }
}

#app {
  font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
