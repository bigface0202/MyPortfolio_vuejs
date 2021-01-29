<template>
  <base-card>
    <h2>Find My Publications</h2>
    <span class="filter-option">
      <input type="checkbox" id="paper" checked @change="setFilter" />
      <label for="paper">Journal Paper (International)</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="conf_i" checked @change="setFilter" />
      <label for="conf_i">Conference Paper (International)</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="conf_j" checked @change="setFilter" />
      <label for="conf_j">Conference Paper (Japanese)</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
export default {
  components: { BaseCard },
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        paper: true,
        conf_i: true,
        conf_j: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      console.log(inputId);
      console.log(isActive);
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>