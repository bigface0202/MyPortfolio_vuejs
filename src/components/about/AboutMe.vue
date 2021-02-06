<template>
  <section class="about-me">
    <div class="section__title">
      <div class="section__title-text">About Me</div>
    </div>
    <v-container>
      <v-row class="about-me__contents">
        <v-col md="5" class="about-me__contents-img">
          <img src="@/assets/img/me3.png" alt="" class="img-fluid" />
        </v-col>
        <v-col md="5" class="about-me__contents-text">
          <p>
            初めまして！岸下優介（Yusuke
            Kishishita）です。今は東京都内で深層学習・機械学習・IoTエンジニア兼ミャンマーのエンジニアチームのPMをやっております。
          </p>
          <p>
            2020年3月までは広島大学生体システム論研究室で博士課程に所属しており、人間に関する研究（主に触覚や力覚・筋感覚などの知覚）を行っておりました。
          </p>
          <p>人間に対する（主に筋肉）理解を深めていきたい所存であります。</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about-me__contents {
  margin-top: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
</style>