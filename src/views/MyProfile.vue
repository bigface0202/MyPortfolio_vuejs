<template>
  <div class="profile">
    <v-container fluid>
      <v-row>
        <v-col class="my-profile">
          <about-me></about-me>
          <about-my-skill></about-my-skill>
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
import MyTimeLine from '@/components/timeline/MyTimeLine.vue'
import AboutMe from '@/components/about/AboutMe.vue'
import AboutMySkill from '../components/about/AboutMySkill.vue'
export default {
  components: {
    MyTimeLine,
    AboutMe,
    AboutMySkill
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
