<template>
  <div class="timeline">
    <h2 class="timeline__title">About My Career</h2>
    <item class="timeline__contents"
          v-for="tl in timeline"
          :key="tl.id"
          :year="tl.year"
          :school="tl.school"
          :description="tl.description"
          :icon="tl.icon"
          :color="tl.color"
          :side="tl.side"/>
  </div>
</template>
<script>
import Item from '@/components/detail/timeline/item.vue'
export default {
  components: {
    Item
  },
  computed: {
    timeline () {
      return this.$store.getters['tl/timeline']
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  &__title {
    text-align: left;
  }
  &__contents {
    margin-top: 20px;
  }
}

</style>
