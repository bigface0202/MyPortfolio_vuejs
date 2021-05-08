<template>
  <div class="publication">
    <li class="publication__list">
      <div class="publication__text">
        <h2 class="publication__title">{{ title }}</h2>
        <h4 class="publication__authors">{{ authors }}</h4>
        <p class="publication__text">{{ publisher }}</p>
        <p class="publication__text">{{ year }}</p>
        <p class="publication__text">{{ doi }}</p>
        <base-badge v-if="firstAuthor" :title="'First Author'"></base-badge>
      </div>
    </li>
  </div>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue'
export default {
  components: { BaseBadge },
  props: ['id', 'title', 'authors', 'publisher', 'year', 'doi', 'firstAuthor']
}
</script>

<style lang="scss" scoped>
.publication {
  &__list {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
  }
  &__title {
    margin: 0;
  }
  &__authors {
    margin: 0 0 0.5rem 0;
  }
  &__text {
    margin: 0;
  }
}

</style>
