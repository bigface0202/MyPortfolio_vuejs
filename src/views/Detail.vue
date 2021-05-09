<template>
  <div class="profile">
    <v-container fluid>
      <v-row>
        <v-col >
          <my-skill></my-skill>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <my-time-line></my-time-line>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MyTimeLine from '@/components/detail/timeline/timeline.vue'
import MySkill from '@/components/detail/skill.vue'
export default {
  components: {
    MyTimeLine,
    MySkill
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.profile {
  padding: 15px;
  background-color: $concept_lighten_color !important;
}
</style>
