<template>
  <v-app id="app" class="portfolio">
    <original-header class="portfolio__header" />
    <div class="portfolio__content">
      <router-view />
    </div>
    <original-footer/>
  </v-app>
</template>

<script>
import OriginalHeader from '@/components/common/header/header.vue'
import OriginalFooter from '@/components/common/footer.vue'

export default {
  components: {
    OriginalHeader,
    OriginalFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/colors.scss';

html {
  font-size: 20px;
  background-color: $concept_color !important;
}

.portfolio {
  padding: 5px;
  margin: 50px 50px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
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

.v-application--wrap {
  min-height: 100%;
}
</style>
