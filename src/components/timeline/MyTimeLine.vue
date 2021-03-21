<template>
  <section class="my-timeline">
    <div class="my-timeline__title">About My Career</div>
    <my-time-line-item class="my-timeline__contents"
                       v-for="tl in timeline"
                       :key="tl.id"
                       :year="tl.year"
                       :school="tl.school"
                       :description="tl.description"
                       :icon="tl.icon"
                       :color="tl.color"
                       :side="tl.side"/>
  </section>
</template>
<script>
import MyTimeLineItem from './MyTimeLineItem.vue'
export default {
  components: {
    MyTimeLineItem
  },
  computed: {
    timeline () {
      return this.$store.getters['tl/timeline']
    }
  }
}
</script>
<style lang="scss" scoped>
.my-timeline {
  &__title {
    font-size: 3.2rem;
    text-align: left;
  }
  &__contents {
    margin-top: 20px;
  }
}

</style>
