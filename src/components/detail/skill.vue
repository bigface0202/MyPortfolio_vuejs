<template>
  <div class="skill">
    <h2 class="skill__title">About My Skill</h2>
    <section class="skill__contents">
      <div class="skill__contents__card" v-for="skill in skills" :key="skill.id">
        <v-img :src="skill.icon"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">{{ skill.asset }}</h3>
        <p class="skill__contents__card__text">{{ skill.description }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  computed: {
    skills () {
      return this.$store.getters['skills/skills']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.skill {
  &__title {
    text-align: left;
  }
  &__contents {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    &__card {
      width: 250px;
      height: 250px;
      padding: 15px;
      margin: 15px;
      background-color: $white_color;
      border-radius: 50px;
      &__icon {
        width: 150px;
        height: 150px;
        margin: auto;
      }
      &__text {
        margin: auto;
        text-align: center;
      }
    }
  }
}
</style>
