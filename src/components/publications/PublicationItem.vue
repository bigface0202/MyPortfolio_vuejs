<template>
  <li>
    <div class="publication__text">
      <h2>{{ title }}</h2>
      <h4>{{ authors }}</h4>
      <p>{{ publisher }}</p>
      <p>{{ year }}</p>
      <p>{{ doi }}</p>
      <base-badge v-if="firstAuthor" :title="'First Author'"></base-badge>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue'
export default {
  components: { BaseBadge },
  props: ['id', 'title', 'authors', 'publisher', 'year', 'doi', 'firstAuthor']
}
</script>

<style scoped>
li {
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
}

.product__data {
  display: flex;
}

.publication__text h4 {
  margin: 0 0 0.5rem 0;
}

.product__actions {
  text-align: center;
}
</style>
