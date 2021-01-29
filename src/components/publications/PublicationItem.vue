<template>
  <li>
    <div class="product__text">
      <h3>{{ title }}</h3>
      <p>{{ authors }}</p>
      <p>{{ publisher }}</p>
      <p>{{ year }}</p>
      <p>{{ doi }}</p>
      <base-badge v-if="firstAuthor" :title="'First Author'"></base-badge>
    </div>
  </li>
</template>

<script>
import BaseBadge from "../ui/BaseBadge.vue";
export default {
  components: { BaseBadge },
  props: ["id", "title", "authors", "publisher", "year", "doi", "firstAuthor"],
};
</script>

<style scoped>
h2 {
  text-align: center;
}
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__text h4 {
  margin: 0 0 0.5rem 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>