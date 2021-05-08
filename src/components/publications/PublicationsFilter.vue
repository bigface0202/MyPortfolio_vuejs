<template>
  <div class="publications-filter">
    <v-card flat>
      <v-card-title>Find My Publications</v-card-title>
      <v-card-text >
        <span class="publications-filter__option">
          <input class="publication-filter__option__input" type="checkbox" id="paper" checked @change="setFilter" />
          <label class="publication-filter__option__label" for="paper">Journal Paper (International)</label>
        </span>
        <span class="publications-filter__option">
          <input class="publication-filter__option__input" type="checkbox" id="conf_i" checked @change="setFilter" />
          <label class="publication-filter__option__label" for="conf_i">Conference Paper (International)</label>
        </span>
        <span class="publications-filter__option">
          <input class="publication-filter__option__input" type="checkbox" id="conf_j" checked @change="setFilter" />
          <label class="publication-filter__option__label" for="conf_j">Conference Paper (Japanese)</label>
        </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data () {
    return {
      filters: {
        paper: true,
        conf_i: true,
        conf_j: true
      }
    }
  },
  methods: {
    setFilter (event) {
      const inputId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style lang="scss" scoped>
.publications-filter {
  &__option {
    margin-right: 1rem;
    &__label {
      vertical-align: middle;
    }
    &__input {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}
</style>
