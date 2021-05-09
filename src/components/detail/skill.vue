<template>
  <div class="skill">
    <h2 class="skill__title">About My Skill</h2>
    <section class="skill__contents">
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/python.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">Python</h3>
        <p class="skill__contents__card__text">3年以上</p>
      </div>
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/flutter.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">Flutter</h3>
        <p class="skill__contents__card__text">1年以上</p>
      </div>
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/vuejs.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">Vue.js</h3>
        <p class="skill__contents__card__text">1ヶ月程度</p>
      </div>
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/unity.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">Unity</h3>
        <p class="skill__contents__card__text">半年程度</p>
      </div>
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/handa.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">電子工作</h3>
        <p class="skill__contents__card__text">3年以上</p>
      </div>
      <div class="skill__contents__card">
        <v-img :src="require('@/assets/img/shikaku.png')"  class="skill__contents__card__icon" />
        <h3 class="skill__contents__card__text">基本情報技術者</h3>
        <p class="skill__contents__card__text">資格</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {}
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
