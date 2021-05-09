<template>
  <div class="timeline">
    <h2 class="timeline__title">About My Career</h2>
    <v-timeline class="timeline__contents" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item class="timeline__contents__item" :color="tl.color" small v-for="tl in timeline" :key="tl.id">
        <v-card>
          <v-card-title :class="tl.color">
            <v-icon dark size="32" class="mr-4">{{ tl.icon }}</v-icon>
            {{ tl.year }}
          </v-card-title>
          <v-container>
            <v-row>
              <v-col md="12">{{ tl.school }}{{ tl.description }}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
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
    &__item {
      margin: 0;
    }
  }
}

</style>
