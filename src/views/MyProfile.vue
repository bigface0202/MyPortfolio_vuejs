<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="mx-auto" outlined>
          <about-me></about-me>
          <about-my-skill></about-my-skill>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" outlined>
          <my-time-line></my-time-line>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyTimeLine from "@/components/timeline/MyTimeLine.vue";
import AboutMe from "@/components/about/AboutMe.vue";
import AboutMySkill from '../components/about/AboutMySkill.vue';
export default {
  components: {
    MyTimeLine,
    AboutMe,
    AboutMySkill
  },
};
</script>

<style scoped>
</style>