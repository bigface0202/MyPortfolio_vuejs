<template>
  <div class="profile-content">
    <v-img class="profile-content__icon" :src="require('@/assets/img/me3.png')"/>
    <section class="profile-content__text">
      <label class="profile-content__text__label">
        Name
      </label>
      <p class="profile-content__text__name">
        岸下 優介 (Yusuke Kishishita)
      </p>
      <p class="profile-content__text__description">
        初めまして！
        今は東京都内で機械学習エンジニア兼ミャンマーのエンジニアチームとの共同プロジェクトをやっております。<br>
        2020年3月までは広島大学生体システム論研究室で博士課程に所属しており、人間に関する研究（主に触覚や力覚・筋感覚などの知覚）を行っておりました。
        人間に対する（主に筋肉）理解を深めていきたい所存であります。
      </p>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: $concept_lighten_color;
  &__icon {
    flex-grow: 0;
    width: 250px;
    height: 300px;
    margin: 15px;
    border-radius: 50px;
  }
  &__text {
    flex: 1;
    max-width: 900px;
    padding: 50px;
    margin: 15px;
    color: black;
    vertical-align: bottom;
    background-color: white;
    border-radius: 50px;
    &__label {
      display: block;
      font-size: 1rem;
    }
    &__name {
      font-size: 1.2rem;
      font-weight: bold;
    }
    &__description {
      font-size: 1.2rem;
    }
  }
  &__notes {
    margin: 0;
    font-size: 0.5px;
    text-align: right;
    background-color: $concept_lighten_color !important;
  }
}
</style>
