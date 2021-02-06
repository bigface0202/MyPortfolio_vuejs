<template>
  <section class="about-my-skill">
    <div class="section__title">
      <div class="section__title-text">About My Skill</div>
    </div>
    <v-container>
      <v-row class="about-my-skill__contents">
        <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/python.png"  class="img-fluid" />
              <v-card-title class="justify-center">Python</v-card-title>
              <v-card-text class=text-center>3年以上</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/flutter.png" class="img-fluid" />
              <v-card-title class="justify-center">Flutter</v-card-title>
              <v-card-text class=text-center>1年以上</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/vuejs.png" class="img-fluid" />
              <v-card-title class="justify-center">Vue.js</v-card-title>
              <v-card-text class=text-center>1ヶ月程度</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="about-my-skill__contents">
          <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/unity.png"  class="img-fluid" />
              <v-card-title class="justify-center">Unity</v-card-title>
              <v-card-text class=text-center>半年程度</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/handa.png" class="img-fluid" height="128"/>
              <v-card-title class="justify-center">電子工作</v-card-title>
              <v-card-text class=text-center>1年以上</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="mx-auto" outlined>
              <img src="@/assets/img/shikaku.png" class="img-fluid" height="128"/>
              <v-card-title class="justify-center">基本情報技術者</v-card-title>
              <v-card-text class=text-center>資格</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about-my-skill__contents {
  margin-top: 20px;
  justify-content: center;
  text-align: center;
  &-text {
    word-wrap: break-word;
  }
}
</style>